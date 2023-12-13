<script>
import CropperViewer from '@/components/stages/CropperViewer.vue'
import MaterialsViewer from '@/components/stages/MaterialsViewer.vue'
import AccessoriesViewerTipp from '@/components/stages/AccessoriesViewerTipp.vue'

import { mapState, mapActions } from 'pinia'
import { useMainStore } from '/src/stores/main.js'

export default {
  name: "MainContent",
  components: {
    CropperViewer,
    MaterialsViewer,
    AccessoriesViewerTipp,
  },
  computed: {
    ...mapState(useMainStore, [
      'currentStepName',
      'accessoriesOn',
    ]),
  },
  methods: {
    ...mapActions(useMainStore, [
      'setAccessoriesOn'
    ]),
    toggleAccessories() {
      this.setAccessoriesOn(!this.accessoriesOn)
    }
  }
}
</script>

<template>
  <!-- 
  plate_col materials_col
  plate_col plate_socket_col
  plate_col checkout-cropper_col
  accessories_cropper-hidden 
  -->
  <div class="main__content plate_col" style="--panel-content-col-offset: 65px;">
    <div class="main__content-inner content-inner">
      <div class="main__tipp main__cropper-tipp tipp tipp_hidden">
        <img class="main__tipp-image main__cropper-tipp-image tipp__image"
            src="//rueckwand24.com/cdn/shop/t/332/assets/tipp.png?v=108909850290897683381697114476" width="46"
            height="46">
        <div class="main__tipp-content tipp__content">
            <div class="tipp__title main__cropper-tipp-title">Deine Änderungen wurden erfolgreich gespeichert!
            </div>
        </div>
        <img class="main__tipp-image main__cropper-tipp-image tipp__image"
            src="//rueckwand24.com/cdn/shop/t/332/assets/tipp.png?v=108909850290897683381697114476" width="46"
            height="46">
      </div>

      <CropperViewer :active="currentStepName === 'Cropper' || (currentStepName === 'Accessories' && accessoriesOn)"></CropperViewer>
      <MaterialsViewer :active="currentStepName === 'Materials'"></MaterialsViewer>
      <AccessoriesViewerTipp v-if="currentStepName === 'Accessories' && !accessoriesOn" style="display: flex;"></AccessoriesViewerTipp>
      <!-- <CheckoutViewer :active="currentStepName === 'Checkout'"></CheckoutViewer> -->

      <div class="main__stage-content " id="stage-content-4">
      </div>
    </div>
  </div>
</template>
