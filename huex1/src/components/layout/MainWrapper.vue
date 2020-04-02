<template>
   <div class="main-wrapper">
       <PanelLeft/>
       <Canvas/>
       <PanelRight/>
   </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Canvas from '../Canvas.vue';
    import PanelLeft from './PanelLeft.vue';
    import PanelRight from './PanelRight.vue';

    export default Vue.extend({
    name: 'MainWrapper',

    components: {
        Canvas,
        PanelLeft,
        PanelRight
    }
    })
</script>

<style lang="scss">
    .main-wrapper {
        position: relative;
        margin: 0 auto;
        max-width: calc(100vw - 150px);
        width: 70vw;
    }
</style>