<template>
  <v-card>
    <v-card-title>Share</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      code
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="dialog = false">Close</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "OpenDialog"
});
</script>

<style lang="scss" scoped>
</style>