<template>
   <div class="header-wrapper">
      <div class="header-content">
        <!-- Title and Toolbar --> 
        <TopBar></TopBar>
      </div>
   </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import TopBar from '../menus/TopBar.vue'

  export default Vue.extend({
    name: 'HeaderWrapper',
    components: {
      TopBar,
    }
  })
</script>

<style lang="scss" scoped>
    .header-wrapper {
        height: styles.$layout-header-bg-height;
        margin-bottom: - styles.$layout-header-bg-overlap;
        background-color: var(--v-primary-base);
    }

    .header-content {
        margin: 0 auto;
        max-width: calc(100vw - 2*#{styles.$layout-side-panel-width});
        width: styles.$layout-content-width;
        height: calc(30vh - 7.5rem);
        padding-bottom: .6rem;
        display: flex;
        align-items: flex-end;
    }
</style>