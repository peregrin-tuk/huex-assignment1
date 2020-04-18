<template>
  <canvas resize id="canvas"></canvas>
</template>

<script lang="ts">
  import paper from 'paper'
  import Vue from 'vue';
  import tools from '@/tools/tool/tools'

  export default Vue.extend( {
    name: "Canvas",
    created() {
      paper.install(window.document)

      // Handle selecting the right tool when the state changes
      this.$store.watch(() => this.$store.getters.activeTool, tool => {
        if(tools[tool]) {
          tools[tool].activate()
        } else {
          console.warn('could not find tool', tool, 'in currently registered tools.')
        }
      })

      // Redraw the canvas when the state changes (local / remote changes get synced to cloud and sent to client)
      // TODO prevent active stroke / drawing action from being removed (or not reapplied) when new data comes in
      this.$store.watch(() => this.$store.getters.getBoardContent, boardContent => {
        paper.project.clear()
        boardContent.forEach((jsonLayer: string) => paper.project.importJSON(jsonLayer))
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