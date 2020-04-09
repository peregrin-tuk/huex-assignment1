<template>
  <ExpandibleButton icon="mdi-format-color-fill">
    <v-btn-toggle v-model="toggle_exclusive" dense mandatory borderless light>
      <v-btn min-width="24px">
        <v-icon color="teal">mdi-circle</v-icon>
      </v-btn>

      <v-btn min-width="24px">
        <v-icon color="red">mdi-circle</v-icon>
      </v-btn>

      <v-btn min-width="24px">
        <v-icon color="amber">mdi-circle</v-icon>
      </v-btn>

      <v-btn min-width="24px">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-btn-toggle>
  </ExpandibleButton>
</template>

<script lang="ts">
import Vue from "vue";
import ExpandibleButton from "./ExpandibleToolButton.vue";

export default Vue.extend({
  name: "ColorButton",
  components: {
    ExpandibleButton
  }
});
</script>

<style lang="scss" scoped>
</style>