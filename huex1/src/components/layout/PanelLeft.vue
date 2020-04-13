<template>
   <div class="panel-left">
      <LabeledButton 
        label="NEW" 
        icon="mdi-plus-circle-outline"
      ></LabeledButton>
      <LabeledButtonWithDialog 
        label="OPEN" 
        icon="mdi-folder-open-outline"
      >
        <OpenDialog />
      </LabeledButtonWithDialog>
      <LabeledButtonWithDialog 
        label="SHARE" 
        icon="mdi-share-variant"
      >
        <ShareDialog />
      </LabeledButtonWithDialog>
   </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import LabeledButton from '../buttons/LabeledButton.vue'
  import LabeledButtonWithDialog from '../buttons/LabeledButtonWithDialog.vue'
  import OpenDialog from "../dialogs/OpenDialog.vue"
  import ShareDialog from "../dialogs/ShareDialog.vue"

  export default Vue.extend({
    name: 'PanelLeft',
    components: {
      LabeledButton,
      LabeledButtonWithDialog,
      OpenDialog,
      ShareDialog
    }
  })
</script>

<style lang="scss" scoped>
  .panel-left {
    position: absolute;
    height: styles.$layout-header-bg-overlap;
    right: 100%;
    width: styles.$layout-side-panel-width;
    text-align: right;
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
  }
</style>