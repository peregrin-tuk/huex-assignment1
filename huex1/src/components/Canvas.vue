<template>
  <canvas id="canvas" resize></canvas>
</template>

<script lang="ts">
  import paper from 'paper'
  import Vue from 'vue';
  // TODO type the tools
  // @ts-ignore
  import tools from '@/tools/tool/tools'
  import {DrawAction} from "@/tools/action";

  export default Vue.extend( {
    name: "Canvas",
    created() {
      paper.install(window.document)

      // Handle selecting the right tool when the state changes
      this.$store.watch(() => this.$store.getters.activeTool, tool => {
        if(tools[tool]) {
          console.log('found tool', tool, 'activating...')
          tools[tool].activate()
        } else {
          console.warn('could not find tool', tool, 'in currently registered tools.')
        }
      })

      // Redraw the canvas when the state changes (local / remote changes get synced to cloud and sent to client)
      // boardContent[0].args
      this.$store.watch(() => this.$store.getters.getBoardContent, boardContent => {
        const drawActions: DrawAction[] = boardContent.map((content: any) => new DrawAction({
          ...content._args
          }))
        // console.log(drawActions)
        drawActions.forEach(action => {
          action.exec()
        })
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