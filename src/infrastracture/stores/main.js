// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import CPanel from '../models/panel'

export const useMainStore = defineStore('main', {
  state: () => ({
    currentStepName: '',

    panels: [],
    aligmentVerical: 'top', //'top' or 'bottom'
    maxWidth: 0,
    minWidth: 0,
    maxHeight: 0,
    minHeight: 0,

    currentMaterialId: null,

    accessoriesOn: false
  }),
  actions: {
    setCurrentStepName(value) {
      this.currentStepName = value
    },

    addPanel(data) {
      const panel = new CPanel()
      panel.populate(data)

      this.panels.push(panel)
    },
    removePanel(id) {
      const panel = this.panels.find((p) => p.id === id)
      this.panels.splice(this.panels.indexOf(panel), 1)
    },

    activatePanel(id) {
      this.panels.forEach((item) => {
        item.active = item.id === id ? true : false
      })
    },

    setAlignment(data) {
      this.aligmentVerical = data
    },
    setMaxHeight(value) {
      this.maxHeight = value
    },
    setMinHeight(value) {
      this.minHeight = value
    },

    setMaterialId(value) {
      this.currentMaterialId = value
    },

    setAccessoriesOn(value) {
      this.accessoriesOn = value
    }
  },
  getters: {}
})
