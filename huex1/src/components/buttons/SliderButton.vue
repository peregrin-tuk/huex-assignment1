<template>
  <ExpandibleButton icon="mdi-circle-medium" v-if="$store.getters.activeToolHasSize">
    <v-card 
      class="slider-button-card"
      width="200px"
      height="36px"
      light>
      <v-slider
        min="1"
        max="20"
        :value="size"
        :label="size.toString()"
        dense
        @input="$store.commit('setActiveToolSize', $event)"
      ></v-slider>
    </v-card>
  </ExpandibleButton>
</template>

<script lang="ts">
import Vue from "vue";
import ExpandibleButton from "./ExpandibleToolButton.vue";
import {mapGetters} from "vuex";

export default Vue.extend({
  name: "SliderButton",
  components: {
    ExpandibleButton
  },
  computed: {
      ...mapGetters({
        size: 'getActiveToolSize'
      })
  }
});
</script>

<style lang="scss" scoped>
.slider-button-card {
  padding: 2px 10px;
}
</style>