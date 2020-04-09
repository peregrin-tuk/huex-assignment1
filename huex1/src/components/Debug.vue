<template>
  <div class="debug">
    <input v-model="boardName" @change="changeBoardName">
    <button @click="addBoard" value="add new board">new board</button>
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
    methods: {
      changeBoardName: function(e) {
        console.log(e.target.value)
        this.$store.dispatch('updateBoardName', e.target.value)
      },
      addBoard: function() {
        this.$store.dispatch('addNewBoard')
      }
    }
  }
</script>

<style scoped>
  .debug {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #eeeeee;
    min-width: 200px;
    min-height: 150px
  }
</style>
