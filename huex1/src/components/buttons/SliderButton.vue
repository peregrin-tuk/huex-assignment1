<template>
  <ExpandibleButton icon="mdi-circle-medium">
    <v-card 
      class="slider-button-card"
      width="200px"
      height="36px"
      light>
      <v-slider
        min="1"
        max="20"
        v-model="size"
        :label="size"
        @click:append="increase"
        @click:prepend="decrease"
        dense
      ></v-slider>
    </v-card>
  </ExpandibleButton>
</template>

<script lang="ts">
import Vue from "vue";
import ExpandibleButton from "./ExpandibleToolButton.vue";

export default Vue.extend({
  name: "SliderButton",
  components: {
    ExpandibleButton
  },
  data: () => ({
    size: 10,
  })
});
</script>

<style lang="scss">
.slider-button-card {
  padding: 2px 10px;
}
</style>