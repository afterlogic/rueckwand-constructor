<script>
import ListItem from './ListItem.vue'

import { mapState, mapActions } from 'pinia'
import { useMainStore } from '@/infrastracture/stores/main'
import materials from '@/infrastracture/materialsData.js'

export default {
  components: {
    ListItem
  },
  data() {
    return {
      materials: materials
    }
  },
  mounted() {
    if (this.currentMaterialId === null) {
      const defaultMaterial = this.materials.find((item) => !!item?.default)
      this.setMaterialId(defaultMaterial.id)
    }
  },
  computed: {
    ...mapState(useMainStore, ['currentMaterialId'])
  },
  methods: {
    ...mapActions(useMainStore, ['setMaterialId']),
    selectMaterial(materialId) {
      this.setMaterialId(materialId)
    }
  }
}
</script>

<template>
  <div class="materials-list">
    <ListItem
      v-for="material in materials"
      :key="material.id"
      :material="material"
      :active="currentMaterialId === material.id"
      @click="selectMaterial(material.id)"
    />
  </div>
</template>
