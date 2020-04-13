<template>
  <v-text-field
    class="board-title"
    :loading="loading"
    :value="title"
    color="success"
    outlined
    hide-details
    dense
    label="Edit Title"
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

<style lang="scss">
  .board-title.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot {
    & fieldset, & div label {
      color: var(--v-primary-base) !important;
    }
    &:hover fieldset, &:hover div label {
      color: var(--v-primary-lighten1) !important;
    }
  }
  .board-title.v-text-field--outlined {
    font-size: 1.25rem;
  }
</style>
