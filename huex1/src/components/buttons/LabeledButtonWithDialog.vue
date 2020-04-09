<template>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn v-on="on">
          <v-icon color="white">{{ icon }}</v-icon>
        </v-btn>
      </template>

      <slot></slot>

    </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LabeledButtonWithDialog"
});
</script>

<style lang="scss" scoped>
</style>