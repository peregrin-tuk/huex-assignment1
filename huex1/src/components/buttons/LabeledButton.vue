<template>
  <v-hover v-slot:default="{ hover }">
    <v-btn
      small
      rounded
      class="labeledButton"
      color="white"
      :text="!hover"
      :elevation="hover ? 5 : 0"
      v-on="activator"
    >
      <span
        v-if="hover"
        class="label mr-1"
      >
        {{ label }}
      </span>
      <v-icon 
        small
        :color="hover ? 'info' : 'white'"
      >
        {{ icon }}
      </v-icon>
    </v-btn>
  </v-hover>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LabeledButton",
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    activator: {
      type: Object,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.label {
  color: var(--v-info-base);
  font-size: 0.6rem;
}

.labeledButton {
  justify-content: flex-end;
  // width: 5.4rem;
}
</style>