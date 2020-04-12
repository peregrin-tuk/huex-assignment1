<template>
  <v-card>
    <v-card-title>Open Board</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      ...
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="$emit('dialog', false)">Cancel</v-btn>
      <v-btn color="primary" text>Open</v-btn>
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