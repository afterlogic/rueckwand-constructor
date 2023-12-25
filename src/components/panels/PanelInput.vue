<script>
export default {
  props: {
    modelValue: { type: Number, default: 0 },
    label: { type: String, default: 'XXX' },
    limit: { type: Array, default: () => [0, 0] },
  },
  computed: {
    size_mm() {
      return this.modelValue * 10
    }
  },
  emits: ['update:modelValue'],
  methods: {
    inputHandler(event) {
      let value = event.target.value
      value = value > this.limit[1] ? this.limit[1] : value //max
      this.$refs.input.value = value;
      this.$emit('update:modelValue', value)
    }
  }
}
</script>

<template>
  <div class="plate-panel__control control-width">
    <label for="plate-panel_id_1_width">{{ label }}</label>
    <div class="plate-panel__limit icon-text">
      <span class="text">{{ limit[0] }} - {{ limit[1] }} cm</span>
    </div>
    <div class="plate-panel__input-body">
      <div class="plate-panel__input-text">
        <input ref="input" :value="modelValue" @input="inputHandler" type="number" class="input plate-panel__input width" />
          <!-- oninput="preventNonNumericalInput(event)"
          inputmode="decimal"
          pattern="[0-9]+(.,[0-9]+)?"
          min="10" max="300" value="20" -->
        <span class="text">cm</span>
      </div>
    </div>
    <div class="plate-panel__sizes-mm">
      <span class="text plate-panel__size-mm-width">{{ size_mm }} mm</span>
    </div>
  </div>
</template>