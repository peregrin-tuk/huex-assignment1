<template>
  <ExpandibleButton icon="mdi-format-color-fill" v-if="$store.getters.activeToolHasColor">
    <v-btn-toggle 
      dense 
      mandatory 
      borderless 
      light
    >
      <v-btn 
        v-for="(value, key) in defaultColors"
        :key="key"
        min-width="24px">
        <v-icon 
          :color="key"
          @click="setColor(value)">
          mdi-circle</v-icon>
      </v-btn>

      <!-- <v-btn min-width="24px">
        <v-icon color="red">mdi-circle</v-icon>
      </v-btn>

      <v-btn min-width="24px">
        <v-icon color="amber">mdi-circle</v-icon>
      </v-btn> -->

      <v-menu 
        bottom 
        offset-y 
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ on }">
          <v-btn min-width="24px" v-on="on">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>

        <v-color-picker 
          v-model="color"
          hide-inputs 
          dot-size="5"
        >
        </v-color-picker>
      </v-menu>

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
  },
  data: () => ({
    color: "000000FF",
    defaultColors: {
      "teal": "009688FF",
      "red": "F6695EFF",
      "amber": "FFCD36FF"
    }
  }),
  methods: {
    setColor: function(value: string) {
      this.color = value;
    }
  },
  watch: {
    color: function(val) {
      this.$store.commit('setActiveToolColor', val)
    }
  }
});
</script>

<style lang="scss" scoped>
</style>