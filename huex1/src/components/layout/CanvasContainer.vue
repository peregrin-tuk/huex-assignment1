<template>
    <v-card class="canvas-container" elevation="10">
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

<style lang="scss">
    .canvas-container {
      background-color: #eee;
      width: 100%;
    }
</style>