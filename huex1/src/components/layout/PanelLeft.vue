<template>
   <div class="panel-left">
     <!-- The following UL is just a placeholder for the file menu component -->
     <ul>
          <li> .</li>
          <li> .</li>
          <li> .</li>
      </ul>
   </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'PanelLeft',
  })
</script>

<style lang="scss">
  .panel-left {
    position: absolute;
    right: 100%;
    width: styles.$layout-side-panel-width;
    text-align: right;
    padding-right: 1rem;
  }
</style>