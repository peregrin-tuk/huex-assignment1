<template>
   <div class="main-wrapper">
       <PanelLeft/>
       <CanvasContainer/>
       <PanelRight/>
   </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import CanvasContainer from './CanvasContainer.vue';
    import PanelLeft from './PanelLeft.vue';
    import PanelRight from './PanelRight.vue';

    export default Vue.extend({
    name: 'MainWrapper',

    components: {
        CanvasContainer,
        PanelLeft,
        PanelRight
    }
    })
</script>

<style lang="scss">
    .main-wrapper {
        position: relative;
        margin: 0 auto;
        max-width: calc(100vw - 2*$side-panel-width);
        width: styles.$layout-content-width;
    }
</style>