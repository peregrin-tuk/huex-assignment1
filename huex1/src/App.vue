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
import { firestorePlugin } from "vuefire";
import {db} from "@/database";

Vue.use(firestorePlugin)

export default Vue.extend({
  name: 'App',

  components: {
    HeaderWrapper,
    MainWrapper,
    FooterWrapper
  },

  data: () => ({
    boards: []
  }),

  mounted(): void {
    // Uncomment to see state change in real time when you make changes in firebase
    /*
    setInterval(() => {
      console.table(this.boards)
    }, 2000)
     */
  },

  firestore: {
    boards: db.collection('boards').doc(location.hash.substr(1) || 'first-board' )
  }
});
</script>

<style lang="scss">
  @import "@/styles/app"
</style>
