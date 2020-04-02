<template>
   <div class="panel-left">
     <!-- The following UL is just a placeholder for a component -->
     <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
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
    width: 200px;
    text-align: right;
    padding-right: 15px;
  }
</style>