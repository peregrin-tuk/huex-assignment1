<template>
    <v-card class="canvas-container" elevation="5">
      <v-responsive :aspect-ratio="16/9">

      </v-responsive>
    </v-card>   
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'CanvasContainer',
  })
</script>

<style lang="scss" scoped>
    .canvas-container {
      background-color: #fff;
      width: 100%;
    }
</style>