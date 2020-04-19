<template>
  <v-hover v-slot:default="{ hover }">
    <div class="expandible-button-wrapper">
      <IconButton :icon="icon" />
      <div 
        class="expandible-button-options"
        :class="{ 'expandible-button-options-expanded': hover }">
          <slot></slot>
      </div>
     </div>
  </v-hover>
</template>

<script lang="ts">
import Vue from "vue";
import IconButton from "./IconButton.vue"

export default Vue.extend({
  name: "ExpandibleToolButton",
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  components: {
    IconButton,
  }
});
</script>

<style lang="scss" scoped>
.expandible-button-wrapper {
  display: flex;
  align-items: center;
}

.expandible-button-options {
  max-width: 0;
  transition: max-width .15s ease-out;
  overflow: hidden;
}

.expandible-button-options-expanded {
  max-width: 200px;
  transition: max-width .15s ease-in;
}
</style>