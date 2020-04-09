<template>
  <v-text-field
    :loading="loading"
    :value="title"
    color="success"
    @change="changeBoardName"/>
</template>

<script lang="ts">
  import Vue from 'vue'

  interface loading {
    loading: boolean | string
  }

  export default Vue.extend({
    name: 'BoardTitle',
    data: function (): loading {
      return {
        loading: false
      }
    },
    computed: {
      title() {
        if(!this.$store.state.currentBoard) return
        return this.$store.state.currentBoard.name
      }
    },
    methods: {
      changeBoardName: function (value: any) {
        if (typeof value !== 'string') return

        this.loading = 'secondary'
        this.$store.dispatch('updateBoardName', value).then(() => {
            this.loading = false
          }
        )
      }
    }
  })
</script>

<style lang="scss" scoped>
</style>
