<script>
import Icon15 from '@/components/icons/Icon15.vue'
import Icon16 from '@/components/icons/Icon16.vue'
import PanelListItem from '@/components/panels/PanelListItem.vue'

import { mapState, mapActions } from 'pinia'
import { useMainStore } from '/src/stores/main.js'

export default {
  components: {
    Icon15,
    Icon16,
    PanelListItem,
  },
  mounted() {
    this.addPanel({w: 30, h: 40})
  },
  computed: {
    ...mapState(useMainStore, ['panels']),
  },
  methods: {
    ...mapActions(useMainStore, [
      'addPanel',
      'removePanel',
      'activatePanel',
    ]),
    createPanel() {
      this.addPanel({w: 30, h: 40})
    },
    deletePanel(id) {
      this.removePanel(id)
    },
    clickPanel(panel) {
      if (!panel.active) {
        this.activatePanel(panel.id)
      }
    }
  },
}
</script>

<template>
<div class="cropper__customizer customizer">
  <div class="plate-panels-container">
    <div class="panels-scroll-gradient panels-scroll-gradient_top"></div>
      <div class="panels-scroll-gradient panels-scroll-gradient_bottom"></div>
      <div class="plate-panels">
        <PanelListItem v-for="(panel, index) in panels" :key="panel.id" :panel="panel" :index="index"
          @remove="deletePanel"
          @click="clickPanel(panel)"
        />
      </div>
    </div>

    <div class="plate-panel__warning-limit plate-panel__warning icon-text">
      <i class="plate-panel__warning-icon icon">
        <Icon15 />
      </i>
      <span class="plate-panel__warning-text text">
        Oh, maximal <strong>20 Rückwände! :)</strong>
      </span>
    </div>

    <span class="button button_width_auto button_color_green button_border-1_green panel-add customizer__button"
      @click="createPanel">Rückwand hinzufügen<span class="customizer__button-icon">+</span>
      <span class="customizer__loading-spinner">
        <Icon16 />
      </span>
    </span>
    <a href="#" class="button panel-replace" style="display: none;">Replace image</a>
</div>
</template>
