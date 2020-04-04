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

  data: () => ({
    //
  }),
});
</script>

<style lang="scss">
  @import "@/styles/app"
</style>
