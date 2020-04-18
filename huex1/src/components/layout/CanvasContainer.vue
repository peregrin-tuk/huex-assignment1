<template>
    <v-card class="canvas-container" elevation="5">
      <v-responsive :aspect-ratio="16/9">
        <Canvas></Canvas>
      </v-responsive>
    </v-card>   
</template>

<script lang="ts">
  import Vue from 'vue'
  import Canvas from "@/components/Canvas.vue";

  export default Vue.extend({
    name: 'CanvasContainer',
    components: {
      Canvas
    }
  })
</script>

<style lang="scss" scoped>
    .canvas-container {
      background-color: #fff;
      width: 100%;
    }
</style>