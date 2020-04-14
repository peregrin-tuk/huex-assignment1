<template>
  <v-btn
    :fab="selected"
    :icon="!selected"
    :small="selected"
    color="white"
    @click="tool ? $store.commit('setActiveTool', tool) : null"
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
    tool: String,
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    selected(): boolean {
      return this.$store.state.activeTool === this.tool
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
