<script>
export default {
  props: {
    active: { type: Boolean }, 
    material: { type: Object, required: true },
  },
}
</script>

<template>
  <div class="material" :class="{'material_active': active}">
    <img class="material__image" :src="material.thumbUrl" />
    <div class="material__text-group">
      <div class="material__title" :data-value="material.alias">
        {{ material.title }}
        <div v-for="label in material.labels" class="material__label label whitespace-nowrap">{{ label }}</div>
      </div>
      <div class="material__content">
        <div class="material__description">{{ material.description }}</div>
        <span class="material__checkbox"></span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.material.material_active {
  .material__label {
    color: black;
    background: #DBDBDB;
  }
}
</style>