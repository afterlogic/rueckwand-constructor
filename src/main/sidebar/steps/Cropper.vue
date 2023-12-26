<script>
import Icon3 from '@/ui/icons/Icon2.vue'
import PanelList from './cropper/PanelList.vue'

export default {
  name: 'Cropper',
  components: {
    Icon3,
    PanelList,
  },
  mounted: function () {
    this.$el.setAttribute('vueComponent', this.$options.name)
  },
}
</script>

<template>
  <section class="stage main__cropper cropper" id="stage-1">
    <div class="stage__container container container_align_start container_justify_between">
      <div class="col stage__panel">
        <div class="stage__panel-inner">
          <div class="stage__information">
            <span class="stage__index">1</span>
            <h2 class="stage__title title title_color_grey"><strong>Maße.</strong> Eingeben.</h2>
          </div>

          <div class="stage__videos videos">
            <div
              id="video_id_stage-1-1"
              class="video undefined realtive"
              data-html2canvas-ignore="true"
            >
              <a
                class="video__preview video__play-trigger"
                data-te-toggle="modal"
                data-te-target="#modalCropperMeasures"
                style=""
              >
                <img
                  src="//rueckwand24.com/cdn/shop/t/332/assets/preview-video.jpg?v=78590337760322157941697114488"
                  class="video__image"
                  alt="video-preview-image"
                />
                <div class="button button-circle-hover video__play">
                  <i class="icon-r24-play"></i>
                </div>
              </a>
              <div class="video__content">
                <span class="video__title">Wie finde ich <strong>die richtigen Maße?</strong></span>
              </div>
              <a
                class="video__button video__button-toggle video__toggle-trigger video__button_hidden"
              >
                <Icon3 />
              </a>
            </div>
          </div>

          <PanelList></PanelList>
        </div>
      </div>
    </div>
  </section>
</template>
