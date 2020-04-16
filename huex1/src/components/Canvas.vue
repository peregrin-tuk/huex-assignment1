<template>
  <canvas id="canvas" resize></canvas>
</template>

<script lang="ts">
  import paper from 'paper'
  import Vue from 'vue';
  // TODO type the tools
  // @ts-ignore
  import tools from '@/tools/tool/tools'

  export default Vue.extend( {
    name: "Canvas",
    created() {
      paper.install(window.document)

      // Handle selecting the right tool when the state changes
      this.$store.watch(() => this.$store.getters.activeTool, tool => {
        if(tools[tool]) {
          console.log('found tool', tool, 'activating...')
          tools[tool].activate()
        }
      })
    },
    mounted() {
      paper.setup('canvas')
    },

  })
</script>

<style lang="scss" scoped>
#canvas {
  width: 100%;
  height: 100%;
  background-color: #fff
}
</style>