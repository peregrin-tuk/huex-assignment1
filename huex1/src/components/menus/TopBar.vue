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
    <SliderButton></SliderButton>
    <ColorButton></ColorButton>

    <v-divider 
      vertical 
      inset 
      class="mx-2" 
    />

    <!-- todo replace with actual tools -->
    <ToolButton icon="mdi-heart" />
    <ToolButton icon="mdi-axe" />
    <ToolButton icon="mdi-ice-cream" selected />
    <ToolButton icon="mdi-bed" />
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