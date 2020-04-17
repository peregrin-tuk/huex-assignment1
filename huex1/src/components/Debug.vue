<template>
  <div class="debug">
    <input v-model="boardName" @change="changeBoardName">
    <br>
    <button @click="addBoard" value="add new board">new board</button>
    <h4 v-if="invalidBoard" @click="addBoard">The board you're requesting is invalid, generate new one?</h4>
    <p @click="storeCurrentBoard">Board Speichern</p>
    <p @click="undoHistory">Undo</p>
  </div>
</template>

<script>
  export default {
    name: "Debug",
    data: function() {
      return {
        boardName: ''
      }
    },
    computed: {
      // TODO use this check in a modal that offers you to generate a new board or open another one
      invalidBoard() {
        const currentBoard = this.$store.state.currentBoard
        return currentBoard === undefined || currentBoard === null
      },
      activeTool: function() {
        return this.$store.state.activeTool
      }
    },
    methods: {
      changeBoardName: function(e) {
        console.log(e.target.value)
        this.$store.dispatch('updateBoardName', e.target.value)
      },
      addBoard: function() {
        this.$store.dispatch('addNewBoard')
      },
      changeActiveTool: function() {
        this.$store.commit('setActiveTool', 'eraser')
      },
      storeCurrentBoard() {
        this.$store.commit("addOrUpdateCurrentBoardToLocalBoards")
      },
      undoHistory() {
        this.$store.dispatch('undoHistory')
      }
    }
  }
</script>

<style scoped>
  input {
    background-color: #ededed;
    border: 1px solid #888
  }
  .debug {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #eeeeee;
    min-width: 200px;
    min-height: 150px
  }
  button {
    border-radius: 3px;
    background-color: lightgreen;
  }
</style>
