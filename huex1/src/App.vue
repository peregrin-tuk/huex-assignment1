<template>
  <v-app>
    <v-content>
      <HeaderWrapper/>
      <MainWrapper/>
      <FooterWrapper/>
    </v-content>
    <Debug />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderWrapper from './components/layout/HeaderWrapper.vue';
import MainWrapper from './components/layout/MainWrapper.vue';
import FooterWrapper from './components/layout/FooterWrapper.vue';
import Debug from "@/components/Debug.vue";
export default Vue.extend({
  name: 'App',
  components: {
    Debug,
    HeaderWrapper,
    MainWrapper,
    FooterWrapper
  },

  data: () => ({
    boards: []
  }),

  mounted(): void {
    // Update hashbang when you load a new board
    this.$store.watch(() => this.$store.getters.getBoardId, n => {
      window.location.href = '#' + n
    })
  },

  created() {
    // Load board from hashbang
    this.$store.dispatch('bindCurrentBoard', window.location.hash.substr(1) || 'first-board')
    .then(() => {
      // console.log(this.$store.state.currentBoard)
      // const boardId = this.$store.state.currentBoard.id
    })
    .catch(() => {
      console.warn('Could not set hash location because the board could not be retrieved.')
    })
  },

});
</script>

<style lang="scss">
  @import "@/styles/app"
</style>
