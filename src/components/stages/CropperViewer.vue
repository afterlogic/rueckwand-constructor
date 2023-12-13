<script>
import { mapState, mapActions } from 'pinia'
import { useMainStore } from '/src/stores/main.js'

import PanelItem from '@/components/panels/PanelItem.vue'

import { sourceImageData } from '@/imageData.js'
import { get2xImageData } from '@/utils/common.js'

const imageElement = document.createElement('img')
imageElement.src = sourceImageData

const image2xElement = document.createElement('img')
image2xElement.src = get2xImageData(imageElement)

export default {
  components: {
    PanelItem,
  },
  props: {
    active: { type: Boolean, required: true },
    pannelsGap: { type: Number, default: 4 },
    maxZoom: { type: Number, default: 2 },
  },
  data() {
    return {
      originalSize: false,
      overalWidth: 0,
      overalHeight: 0,
      areaHeight: 0,
    }
  },
  watch: {
    panels: {
      handler(newValue, oldValue) {
        let maxHeight = 0
        let minHeight = 0
        let overalWidth = 0

        // calculate bounding box for all panels
        this.panels.forEach(item => {
          maxHeight = maxHeight < item.height ? item.height : maxHeight
          minHeight = (minHeight === 0 || minHeight > item.height) ? item.height : minHeight
          
          overalWidth += parseInt(item.width) + parseInt(this.pannelsGap) * 2
        })
        
        // culculate offsets for each panels
        let offsetX = 0
        this.panels.forEach(item => {
          item.offsetX = offsetX
          offsetX += parseInt(item.width) // increase offset for next panel in list

          item.offsetY = maxHeight - parseInt(item.height)
        })

        this.overalWidth = overalWidth
        this.overalHeight = maxHeight + parseInt(this.pannelsGap) * 2
        this.areaHeight = this.$refs.viewerArea.offsetHeight
        // this.setMaxHeight(maxHeight)
        // this.setMinHeight(minHeight)

        // const viewerAreaRect = this.$refs.viewerArea.getBoundingClientRect()
        // const viewerAreaRectInner = this.$refs.viewerAreaInner.getBoundingClientRect()

        // // const zoomX = viewerAreaRect.width / overalWidth
        // const zoomX = this.$refs.viewerArea.offsetWidth / overalWidth
        // // const zoomY = viewerAreaRect.height / maxHeight
        // const zoomY = this.$refs.viewerArea.offsetHeight / maxHeight
        // this.zoom = this.originalSize ? 1 : Math.min(zoomX, zoomY, this.maxZoom)
      },
      // immediate: true,
      deep: true,
    }
  },
  computed: {
    ...mapState(useMainStore, ['panels']),
    imageElement() {
      return this.overalWidth <= imageElement.width ? imageElement : image2xElement
    },
    zoom() {
      const overalWidth = this.overalWidth // this must be read outside the condition below
      const overalHeight = this.overalHeight
      let zoom = 1

      if (this.$refs.viewerArea && this.$refs.viewerArea.offsetHeight) {
        const zoomX = this.$refs.viewerArea.offsetWidth / overalWidth
        const zoomY = this.$refs.viewerArea.offsetHeight / overalHeight
        zoom = this.originalSize ? zoomY : Math.min(zoomX, zoomY, this.maxZoom)
      }

      return zoom
    }
    // image2xData() {
    //   return get2xImageData(imageElement)
    // },
  },
  methods: {
    ...mapActions(useMainStore, [
      'setMaxHeight',
      'setMinHeight',
      'activatePanel',
    ]),
    toggleOriginalSize() {
      this.originalSize = !this.originalSize
    },
    clickPanel(panel) {
      if (!panel.active) {
        this.activatePanel(panel.id)
      }
    }
  }
}
</script>

<template>
  <div class="main__stage-content" :class="{ 'stage-content_active': active }" id="stage-content-1">
    <div class="cropper__buttons cropper__buttons_top cropper__buttons_h-center buttons-group">
      <span class="cropper__button cropper__expert-button cropper__expert-trigger">
        <i class="button__icon icon-r24-crop"></i> <span>Bildbereich ändern</span>
      </span>
      <span class="cropper__button cropper__expert-clear-button cropper__expert-clear-trigger">
        <i class="button__icon icon-r24-multiply"></i> <span>Zurücksetzen</span>
      </span>
      <span class="cropper__button cropper__zoom" @click="toggleOriginalSize">
        <i class="button__icon" :class="{'icon-r24-zoom': !originalSize, 'icon-r24-zoom-out': originalSize}"></i> <span>Zoom</span>
      </span> 
    </div>

    <div class="cropper__buttons cropper__buttons_top buttons-group">
      <a href="javascript: void(0);" class="cropper__button cropper__preview-button cropper__preview-trigger">
        <i class="button__icon icon-r24-fullscreen-new"></i> <span>Vollbild</span>
      </a>
    </div>

    
    <!-- <img ref="image" :src="image2xData" style="transform: scale(0.4); border: 1px solid #000;" /> -->
    <!-- style="min-height: var(--content-col-height);" -->
    
    <div class="cropper__gradient cropper__gradient_right"></div>
    <div class="cropper__gradient cropper__gradient_left"></div>

    <div class="panels_viewer_area" ref="viewerArea" :class="{'panels_viewer_area__scroll': originalSize}">
      <div class="panels_viewer_area__inner" ref="viewerAreaInner" :style="'transform: scale(' + zoom + ')'">
        <PanelItem v-for="(panel, index) in panels" :key="panel.id"
          :panel="panel"
          :index="index"
          :imageElement="imageElement"
          :style="'margin: ' + pannelsGap +'px;'"
          @click="clickPanel(panel)"
        />
      </div>
    </div>
    <!-- <div >
      <div style="background: #ccc;" :style="{width: panel.width * 2 + 'px', height: panel.height * 2 + 'px'}"></div>
    </div> -->
    <!-- <div class="cropper__area dragscroll area_zoom-active cropper__area_no-scroll"
      style="--area-height: 478.919px; --plate-accessories-active-plate: 420.00000000000006px;">
      <div class="cropper__track"
        style="--cropper-track-width: 750px; --cropper-track-height: 210.00000000000003px; padding-top: 47.5px; padding-bottom: 47.5px; height: 375px; --cropper-area-zoom: 0.552;">
        <div class="cropper__background background cropper__background-list" style="left: -282.197px;">
          <div data-html2canvas-ignore="true" class="cropper__background-overlay"></div>
          <div class="background__item" id="background-1" style="width: 1314px; height: 375px;">
            <a href="#" class="background__scale-button button button_weight_bold button_icon"
              style="display: none; opacity: 0;">
              <i class="button__icon icon-r24-reflect"></i>
              <span class="button__text">Mirroring</span>
            </a>
            <img
              src="https://rueckwand24.myshopify.com/cdn/shop/files/Kuechenrueckwand-Kuechenrueckwand-Blaeulicher-Marmor-KR-000259-HB.jpg"
              crossorigin="anonymous" class="background__image" id="canvas_background_id_1" width="1314" height="375"
              style="max-height: 375px;">
          </div>
        </div>
        <div class="cropper__plate-track plate-track" style="padding-top: 47.5px; padding-bottom: 47.5px;">
          <div class="plate plate_active plate_accessories-active" id="plate_id_1"
            style="background: transparent; width: 750px; --plate-zoom: 0.56; --plate-width: 750px; opacity: 1;">
            <canvas class="plate__canvas cropper-hidden"></canvas>
            <div class="cropper-container" touch-action="none" style="width: 750px; height: 375px;">
              <div class="cropper-wrap-box">
                <div class="cropper-canvas" style="width: 768px; height: 384px; transform: translateX(-284px);"><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAABGJJREFUeF7t1AEJAAAMAsHZv/RyPNwSyDncOQIECEQEFskpJgECBM5geQICBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAgQdWMQCX4yW9owAAAABJRU5ErkJggg=="
                    alt="The image to crop" class="" style="width: 768px; height: 384px; transform: scaleX(0) scaleY(0);">
                </div>
              </div>
              <div class="cropper-drag-box cropper-modal" data-cropper-action="none"></div>
              <div class="cropper-crop-box" style="width: 200px; height: 375px; transform: none; opacity: 1;"><span
                  class="cropper-view-box"><img
                    src=""
                    alt="The image to preview"
                    style="width: 750px; height: 375px; transform: translateX(-284px) scaleX(0) scaleY(0);" class=""
                    crossorigin="anonymous"></span><span class="cropper-dashed dashed-h cropper-hidden"></span><span
                  class="cropper-dashed dashed-v cropper-hidden"></span><span
                  class="cropper-center cropper-hidden"></span><span class="cropper-face cropper-move cropper-hidden"
                  data-cropper-action="all"></span><span class="cropper-line line-e cropper-hidden"
                  data-cropper-action="e"></span><span class="cropper-line line-n cropper-hidden"
                  data-cropper-action="n"></span><span class="cropper-line line-w cropper-hidden"
                  data-cropper-action="w"></span><span class="cropper-line line-s cropper-hidden"
                  data-cropper-action="s"></span><span class="cropper-point point-e cropper-hidden"
                  data-cropper-action="e"></span><span class="cropper-point point-n cropper-hidden"
                  data-cropper-action="n"></span><span class="cropper-point point-w cropper-hidden"
                  data-cropper-action="w"></span><span class="cropper-point point-s cropper-hidden"
                  data-cropper-action="s"></span><span class="cropper-point point-ne cropper-hidden"
                  data-cropper-action="ne"></span><span class="cropper-point point-nw cropper-hidden"
                  data-cropper-action="nw"></span><span class="cropper-point point-sw cropper-hidden"
                  data-cropper-action="sw"></span><span class="cropper-point point-se cropper-hidden"
                  data-cropper-action="se"></span>
                <div class="plate-line plate-line-top"></div>
                <div class="plate-line plate-line-left"></div>
                <div class="plate-line plate-line-right"></div>
              </div>
            </div>
            <div class="accessory-socket-wrapper">
              <div class="accessory-socket-container" id="accessory-socket-container_id_1"
                style="--sockets-space-between: 112.5px; width: 750px; height: 375px;"></div>
            </div>
            <div class="plate__lds-animation lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <span class="plate__sizes">20 x 10 cm</span>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.cropper__button {
  cursor: pointer;
}
.panels_viewer_area {
  width: 100%;
  height: 500px;
  position: relative;
  top: 60px;
  background: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &.panels_viewer_area__scroll {
    overflow-x: scroll;
    overflow-y: hidden;
    justify-content: left;
    //align-items: bottom;
    
    & .panels_viewer_area__inner {
      transform-origin: left;
    }
  }

  &__inner {
    display: flex;
    align-items: flex-end;
    // transform-origin: left center;
  }

}

.cropper__gradient {
  position: fixed;
  top: 0;
  bottom: 0;
  opacity: 0;

  .cropper__gradient_show {
    opacity: 1;
  }
  &.cropper__gradient_right {
    right: 0;
  }
  &.cropper__gradient_left {
    left: 0;
  }
} 
.panel {
  // display: inline-block;
  flex-shrink: 0;
  background: #ccc;
  // border-radius: 5px;
  margin: 1px;
  overflow: hidden;
  border: 1px solid #000;

  &__active {
    box-shadow: 0 0 20px rgba(0,0,0,0.6);
  }
}
</style>