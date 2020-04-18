<template>
  <v-card>
    <v-card-title>Create new board</v-card-title>
    <v-card-text>
      Create a new board? You can reopen this board by clicking on the <strong>Open</strong> button on the left side, or by saving and opening the URL at the top of your address bar.
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="accent" text @click="$parent.$parent.$parent.closeDialog()">Cancel</v-btn>
      <v-btn color="primary" @click="addBoard">Create new board</v-btn>
    </v-card-actions>
  </v-card> 
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "OpenDialog",
  data: () => ({
    copied: false,
  }),
  methods: {
    addBoard: function() {
      this.$store.dispatch('addNewBoard')
      // TODO close dialog
    }
  }
});
</script>

<style lang="scss" scoped>
  .copy-button {
    top: -12px;
    width: 9rem;
  }
</style>