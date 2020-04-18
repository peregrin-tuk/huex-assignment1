<template>
  <v-toolbar
    color="primary"
    dense
    flat
    dark
  >
    <BoardTitle color="white" />
    <v-spacer></v-spacer>

    <!-- todo add form stroke color option -->
    <v-btn
      icon
      color="white"
      @click="$store.dispatch('undoHistory')"
    >
      <v-icon color="white">mdi-undo</v-icon>
    </v-btn>
    <ColorButton></ColorButton>
    <SliderButton></SliderButton>

    <v-divider
      vertical
      inset
      class="mx-2"
    />

    <ToolButton icon="mdi-brush" tool="brush" />
    <ToolButton icon="mdi-vector-rectangle" tool="square" />
    <ToolButton icon="mdi-vector-circle" tool="circle" />
    <ToolButton icon="mdi-vector-triangle" tool="triangle" />
    <ToolButton icon="mdi-eraser" tool="eraser" />
  </v-toolbar>
</template>

<script lang="ts">
import Vue from "vue";
import BoardTitle from "./BoardTitle.vue";
import ToolButton from "../buttons/ToolButton.vue";
import SliderButton from "../buttons/SliderButton.vue";
import ColorButton from "../buttons/ColorButton.vue";

export default Vue.extend({
  name: "TopBar",
  components: {
    BoardTitle,
    ToolButton,
    SliderButton,
    ColorButton
  }
})
</script>

<style lang="scss" scoped>
</style>
