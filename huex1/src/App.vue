<template>
  <v-app>
    <v-content>
      <HeaderWrapper/>
      <MainWrapper/>
      <FooterWrapper/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue';
  import HeaderWrapper from './components/layout/HeaderWrapper.vue';
  import MainWrapper from './components/layout/MainWrapper.vue';
  import FooterWrapper from './components/layout/FooterWrapper.vue';

  export default Vue.extend({
    name: 'App',
    components: {
      HeaderWrapper,
      MainWrapper,
      FooterWrapper
    },

    data: () => ({}),

    created() {
      // Update hashbang when you load a new board
      this.$store.watch(() => this.$store.getters.getBoardId, n => {
        if (n === undefined || n === '' || n === null) return;
        window.location.href = '#' + n
      })

      // Update stored board name when it's changed externally
      this.$store.watch(() => this.$store.getters.getBoardName, (n) => {
        if(!n) return
        this.$store.commit('addOrUpdateCurrentBoardToLocalBoards')
      })

      // Add board to local boards when making a contribution
      this.$store.watch(() => this.$store.getters.isCurrentBoardContributor, n => {
        n ? this.$store.commit('addOrUpdateCurrentBoardToLocalBoards') : null
      })

      // Load board from hashbang or create new one if no hashbang is given
      if (window.location.hash.substr(1)) {
        this.$store.dispatch('bindCurrentBoard', window.location.hash.substr(1) || 'first-board')
      } else {
        console.info('No hashbang given, creating new board')
        this.$store.dispatch('addNewBoard')
      }

      // Load local boards from storage
      this.$store.commit('loadLocalBoardsFromStorage', [])

    },

  });
</script>

<style lang="scss">
  @import "@/styles/app";
</style>
