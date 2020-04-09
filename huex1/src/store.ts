import Vue from 'vue'
import Vuex, {Store} from 'vuex'
import {firestoreAction, vuexfireMutations} from 'vuexfire'
import { db } from './database'

Vue.use(Vuex)

const store: Store<any> = new Vuex.Store({
  state: {
    localStoredBoards: [],
    currentBoard: {
      name: 'loading...',
      key: '',
      content: [],
      id: ''
    },
    activeTool: 'brush', // eg. 'brush' or 'form'
    toolProperties: {
      select: {

      },
      pen: {
        color: '#000000',
        size: 12
      },
      eraser: {
        size: 12
      },
      form: {
        strokeColor: '#000000',
        fillColor: '#000000',
        formType: 'rectangle'
      },
      text: {
        color: '#000000',
        size: 12
      }
    },
    selectedBoardItem: null
  },

  getters: {
    getBoardName: state => {
      return store.state.currentBoard.name
    },
    getBoardId: state => {
      return store.state.currentBoard.id
    }
  },

  mutations: {
    setActiveTool(activeTool, tool) {
      activeTool = tool
    },
    ...vuexfireMutations
  },

  actions: {
    bindCurrentBoard: firestoreAction(({ bindFirestoreRef }, payload) => {
      // console.log('binding board:', payload)
      // console.log(db.collection('boards').doc(payload))
      return bindFirestoreRef('currentBoard',
        db.collection('boards').doc(payload), { reset: false })
        .then(() => { console.log(`successfully bound board "${payload}" from database to the state.`)})
    }),

    updateBoardName: firestoreAction(({ state }, payload) => {
      db.collection('boards')
        .doc(location.hash.substr(1))
        .update( { name: payload})
        .catch(e => {
          console.error(e)
        })
    }),

    addNewBoard: firestoreAction(({bindFirestoreRef}) => {
      const ref = db.collection('boards').doc()
      return ref.set({
        name: 'New board',
        content: [],
        key: 'placeholder'
      }).then(e => {
        // db.collection('boards').doc(ref.id).get().then( (doc) => console.log(doc.data()))
        store.dispatch("bindCurrentBoard", ref.id)
      })
    })
  }
});

export default store
