<template>
  <v-dialog v-model="dialog.show" width="500" v-on:close="closeDialog">
    <template v-slot:activator="{ on }">
      <LabeledButton
        :activator="on"
        :label="label" 
        :icon="icon"
      ></LabeledButton>
    </template>

    <slot />
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import LabeledButton from "./LabeledButton.vue";

export default Vue.extend({
  name: "LabeledButtonWithDialog",
  components: {
    LabeledButton
  },
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  data: () => ({
      dialog: { show: false },
    }),
  methods: {
    closeDialog() {
      this.dialog.show = false
    }
  }
});
</script>

<style lang="scss" scoped>
</style>