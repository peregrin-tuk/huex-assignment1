/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex, {Store} from 'vuex'
import {firestoreAction, vuexfireMutations} from 'vuexfire'
import {db} from './database'
import firebase from "firebase";
import localForage from 'localforage'

Vue.use(Vuex)

const defaultCurrentBoard = {
  name: 'loading...',
  key: '',
  content: [],
  id: ''
}

const availableTools = ['circle', 'brush', 'eraser', 'square', 'triangle']

const store: Store<any> = new Vuex.Store({
  state: {
    localStoredBoards: {},
    currentBoard: {},
    currentBoardContributor: false,
    activeTool: 'brush',
    toolProperties: {
      brush: {
        color: '#000000FF',
        size: 12
      },
      eraser: {
        size: 12
      },
      square: {
        color: '#000000FF',
        size: 12
      },
      triangle: {
        color: '#000000FF',
        size: 12
      },
      circle: {
        color: '#000000FF',
        size: 12
      }
    },
    selectedBoardItem: null
  },

  getters: {
    getBoardName: state => state.currentBoard ? state.currentBoard.name : null,
    getBoardId: state => state.currentBoard ? state.currentBoard.id : null,
    getBoardContent: state => state.currentBoard ? state.currentBoard.content : [],
    getNewestBoardContent: state => state.currentBoard ? state.currentBoard.content[state.currentBoard.content.length - 1] : [],
    isCurrentBoardContributor: state => state.currentBoardContributor,
    activeTool: state => state.activeTool,
    activeToolHasColor: state => state.toolProperties[state.activeTool].color !== undefined,
    activeToolHasSize: state => state.toolProperties[state.activeTool].size !== undefined,
    getActiveToolSize: state => state.toolProperties[state.activeTool].size
  },

  mutations: {
    setActiveTool: (state, tool) => {
      availableTools.find((e) => e === tool) ?
        state.activeTool = tool : console.warn(`denied setting active tool to invalid value '${tool}', available values are${availableTools.map((tool) => ' ' + tool)} `)
    },
    setCurrentBoardContributor: (state, payload) => {
      state.currentBoardContributor = payload
    },
    resetCurrentBoardToDefaults: state => state.currentBoard = defaultCurrentBoard,
    setActiveToolColor(state, payload) {
      state.toolProperties[state.activeTool].color = payload
    },
    setActiveToolSize(state, payload) {
      state.toolProperties[state.activeTool].size = payload
    },
    addOrUpdateCurrentBoardToLocalBoards(state) {
      Vue.set(state.localStoredBoards, state.currentBoard.id, {
        name: state.currentBoard.name,
        timestamp: new Date()
      })

      saveStateLocalBoardsToLocalStorage(state.localStoredBoards)

    },
    deleteBoardFromLocalBoards(state, payload) {
      if(!state.localStoredBoards[payload])
        return console.warn('tried to delete non-existent board', payload, 'from locally stored boards')

      Vue.delete(state.localStoredBoards, payload)
      saveStateLocalBoardsToLocalStorage(state.localStoredBoards)
    },

    loadLocalBoardsFromStorage(state) {
      localForage.getItem('boards').then((val: unknown) => {
        if(!val) return
        state.localStoredBoards = val
      })
        .catch((e: any) => console.error(e))
    },
    ...vuexfireMutations
  },

  actions: {
    bindCurrentBoard: firestoreAction(({bindFirestoreRef}, payload) => {
      return bindFirestoreRef('currentBoard',
        db.collection('boards').doc(payload), {reset: true})
        .then((e) => new Promise((resolve, reject) => {
          e ? resolve() : reject()
        }).catch((e) => {
          console.warn('Could not bind board because the board with the id ' + payload + ' could not be retrieved.')
        }))
    }),

    updateBoardName: firestoreAction((store, payload) => {
      return db.collection('boards')
        .doc(store.getters.getBoardId)
        .update({name: payload})
        .then(e => {
          store.commit('addOrUpdateCurrentBoardToLocalBoards')
        })
        .catch(e => {
          console.error(e)
        })
    }),

    addNewBoard: firestoreAction((context) => {
      const ref = db.collection('boards').doc()
      return ref.set({
        name: 'New board',
        content: [],
        key: 'placeholder'
      }).then(e => {
        // db.collection('boards').doc(ref.id).get().then( (doc) => console.log(doc.data()))
        context.dispatch("bindCurrentBoard", ref.id)
      })
    }),

    addElementToCurrentBoardContent: firestoreAction((store, payload) => {
      return db.collection('boards')
        .doc(store.getters.getBoardId)
        .update({
          content: firebase.firestore.FieldValue.arrayUnion(payload)
        })
        .catch(e => {
          console.error(e)
        })
    }),

    undoHistory: firestoreAction(store => {
      const item = store.getters.getNewestBoardContent
      if (!item) return

      return db.collection('boards')
        .doc(store.getters.getBoardId)
        .update({
          content: firebase.firestore.FieldValue.arrayRemove(item)
        })
        .catch(e => {
          console.error(e)
        })
    })
  }
});

function saveStateLocalBoardsToLocalStorage(localStoredBoards: {}) {
  localForage.setItem('boards', localStoredBoards)
    .catch(e => console.error(e))
}

export default store
