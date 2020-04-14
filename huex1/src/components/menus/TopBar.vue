<template>
  <v-toolbar
    color="primary"
    dense
    flat
    dark
  >
    <UserBadge></UserBadge>
    <BoardTitle color="white" />
    <v-spacer></v-spacer>

    <!-- todo replace with actual tool options set -->
    <ColorButton></ColorButton>
    <SliderButton></SliderButton>

    <v-divider
      vertical
      inset
      class="mx-2"
    />

    <ToolButton icon="mdi-cursor-move" tool="select" />
    <ToolButton icon="mdi-brush" tool="brush" />
    <ToolButton icon="mdi-format-text" tool="text" />
    <ToolButton icon="mdi-vector-rectangle" tool="form" />
    <ToolButton icon="mdi-eraser" tool="eraser" />
  </v-toolbar>
</template>

<script lang="ts">
import Vue from "vue";
import BoardTitle from "./BoardTitle.vue";
import ToolButton from "../buttons/ToolButton.vue";
import SliderButton from "../buttons/SliderButton.vue";
import ColorButton from "../buttons/ColorButton.vue";
import UserBadge from "../etc/UserBadge.vue";

export default Vue.extend({
  name: "TopBar",
  components: {
    BoardTitle,
    ToolButton,
    SliderButton,
    ColorButton,
    UserBadge
  }
});
</script>

<style lang="scss" scoped>
</style>
