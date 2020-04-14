<template>
  <v-app>
    <v-content>
      <HeaderWrapper/>
      <MainWrapper/>
      <FooterWrapper/>
    </v-content>
    <Debug/>
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

    data: () => ({}),

    created() {
      // Update hashbang when you load a new board
      this.$store.watch(() => this.$store.getters.getBoardId, n => {
        if (n === undefined || n === '' || n === null) return;
        window.location.href = '#' + n
      })

      // Load board from hashbang or create new one if no hashbang is given
      if (window.location.hash.substr(1)) {
        this.$store.dispatch('bindCurrentBoard', window.location.hash.substr(1) || 'first-board')
      } else {
        console.info('No hashbang given, creating new board')
        this.$store.dispatch('addNewBoard')
      }


    },

  });
</script>

<style lang="scss">
  @import "@/styles/app"
</style>
