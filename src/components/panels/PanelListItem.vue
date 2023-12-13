<script>
import Icon15 from '@/components/icons/Icon15.vue'
import PanelInput from '@/components/panels/PanelInput.vue'

export default {
  components: {
    Icon15,
    PanelInput,
  },
  props: {
    panel: { type: Object, required: true },
    index: { type: Number, required: true },
  },
  mounted() {
    this.width = 100
    this.height = 100
  },
  data() {
    return {
      width: 0,
      height: 0,
    }
  },
  watch: {
    width(v) {
      this.panel.width = v
    },
    height(v) {
      this.panel.height = v
    }
  },
  computed: {
    number() {
      return this.index + 1
    }
  },
  methods: {
    deletePanel(event) {
      event.stopPropagation()
      this.$emit('remove', this.panel.id)
    },
  }
}
</script>

<template>
  <div class="plate-panel" :class="{'plate-panel_active': panel.active}">
    <div class="plate-panel__warning icon-text">
      <i class="plate-panel__warning-icon icon">
        <Icon15 />
      </i>
      <span class="plate-panel__warning-text text">
        Die Mindestgröße muss <strong>min. 10 cm</strong> betragen
      </span>
    </div>
    <div class="plate-panel__index-label label">
      <span class="label__name">{{ number }}</span>
    </div>
    
    <PanelInput v-model="width" :limit="[10, 300]" label="Breite" />
    <div class="plate-panel__separator">
      <span>x</span>
    </div>
    <PanelInput v-model="height" :limit="[10, 150]" label="Höhe" />
    <span @click="deletePanel" class="button plate-panel__remove">
      <i class="icon-r24-minus plate-panel__remove-icon"></i>
    </span>
  </div>
</template>
