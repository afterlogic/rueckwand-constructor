<script>
const canvas = document.createElement("canvas")
const ctx = canvas.getContext("2d")

export default {
  props: {
    panel: { type: Object, required: true},
    imageElement: { type: Object, required: true},
  },
  computed: {
    imageData() {
      let croppedImage = '';
      // if (this.imageLoaded) {
      croppedImage = this.cropImage(this.imageElement);
      // }
      return croppedImage
    },
  },
  methods: {
    cropImage(image) {
      // calculate the width and height of the cropped area
      const width = this.panel.width
      const height = this.panel.height
      // set the canvas size to the cropped area size
      canvas.width = width
      canvas.height = height
      // draw the image on the canvas, cropping the desired area
      ctx.drawImage(image, this.panel.offsetX, this.panel.offsetY, width, height, 0, 0, width, height)
      return canvas.toDataURL()
    },
  }
}
</script>

<template>
  <div class="panel" :class="{'panel__active': panel.active}" 
    :style="{
      width: panel.width + 'px',
      height: panel.height + 'px',
      background: 'url(' + imageData + ')'
    }">
  </div>
</template>
