<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-badge class="mr-4" :content="userCount" :value="userCount" color="secondary" overlap>
        <v-icon color="white" v-on="on">mdi-account-multiple</v-icon>
      </v-badge>
    </template>
    <span>{{ userCount }} doodlers online</span>
  </v-tooltip>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UserBadge",
  data: () => ({
    userCount: 2
  })
});
</script>

<style lang="scss" scoped>
</style>