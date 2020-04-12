<template>
  <v-btn 
    :icon="!selected"
    :fab="selected"
    :small="selected"
    color="white"
  >
    <v-icon
      :color="selected ? 'primary' : 'white'"
    >
      {{ icon }}
    </v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ToolButton", 
  props: {
    selected: Boolean,
    icon: {
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
</style>