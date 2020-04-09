<template>
  <v-toolbar-title>
    {{ title }}
  </v-toolbar-title>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'BoardTitle',
    data: function () {
      return {

      }
    },
    computed: {
      title () {
        return this.$store.state.currentBoard.name
      }
    }
  })
</script>

<style lang="scss" scoped>
</style>
