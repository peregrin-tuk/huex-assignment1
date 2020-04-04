<template>
  <v-toolbar color="primary" dense flat dark>
    <BoardTitle color="white"></BoardTitle>
    <v-spacer></v-spacer>

    <!-- todo replace with actual tools -->
    <SliderButton></SliderButton>
    <ColorButton></ColorButton>

    <v-divider vertical inset class="mx-2"></v-divider>

    <!-- todo replace with actual tools -->
    <ToolButton icon="mdi-heart"></ToolButton>
    <ToolButton icon="mdi-axe"></ToolButton>
    <ToolButton icon="mdi-ice-cream" selected></ToolButton>
    <ToolButton icon="mdi-bed"></ToolButton>
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
});
</script>

<style lang="scss">
</style>