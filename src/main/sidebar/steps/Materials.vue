<script>
import Icon3 from '@/ui/icons/Icon2.vue'
import MaterialsList from './materials/List.vue'

export default {
  name: 'Materials',
  components: {
    Icon3,
    MaterialsList,
  },
  props: {
    active: { type: Boolean, default: false },
  },
  mounted: function () {
    this.$el.setAttribute('vueComponent', this.$options.name)
  },
  watch: {
    active() {
      // if (
    },
  },
}
</script>

<template>
  <section class="stage main__materials materials" id="stage-2">
    <div class="stage__container container container_align_start container_justify_between">
      <div class="col stage__panel">
        <div class="stage__panel-inner">
          <div class="stage__information">
            <span class="stage__index">2</span>
            <h2 class="stage__title title title_color_grey">
              <strong>Material.</strong> Auswählen.
            </h2>
          </div>

          <div class="stage__videos videos">
            <div
              id="video_id_stage-2-1"
              class="video undefined realtive"
              data-html2canvas-ignore="true"
            >
              <a
                class="video__preview video__play-trigger"
                data-te-toggle="modal"
                data-te-target="#modalCollectionMaterial"
                style=""
              >
                <img
                  src="//rueckwand24.com/cdn/shop/t/332/assets/preview-video-2.jpg?v=170194055053318534481697114475"
                  class="video__image"
                  alt="video-preview-image"
                />
                <div class="button button-circle-hover video__play">
                  <i class="icon-r24-play"></i>
                </div>
              </a>
              <div class="video__content">
                <span class="video__title"
                  ><strong>Welches Material</strong> ist das richtige für Dich?</span
                >
              </div>
              <a
                class="video__button video__button-toggle video__toggle-trigger video__button_hidden"
              >
                <Icon3 />
              </a>
            </div>
          </div>

          <MaterialsList></MaterialsList>
        </div>
      </div>
    </div>
  </section>
</template>
