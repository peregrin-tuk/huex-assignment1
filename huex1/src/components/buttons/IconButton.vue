<template>
  <v-btn
    :fab="selected"
    :icon="!selected"
    :small="selected"
    color="white" 
    @click="$emit('click-event')"
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
  name: "IconButton",
  props: {
    icon: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
    }
  },
});
</script>

<style lang="scss" scoped>
</style>
