<template>
  <IconButton
    :icon="icon"
    class="undo-button"
    @click-event="$store.dispatch('undoHistory')"
  />
</template>

<script lang="ts">
import Vue from "vue";
import IconButton from "./IconButton.vue"

export default Vue.extend({
  name: "ToolButton",
  components: {
    IconButton
  },
  data: () => ({
    icon: 'mdi-undo'
  }),
});
</script>

<style lang="scss" scoped>
</style>
