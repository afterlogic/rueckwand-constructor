<script>
import Icon3 from '@/ui/icons/Icon2.vue'
import Icon17 from '@/ui/icons/Icon17.vue'

import { mapState, mapActions } from 'pinia'
import { useMainStore } from '@/infrastracture/stores/main.js'

export default {
  name: 'Accessories',
  components: {
    Icon3,
    Icon17
  },
  mounted: function () {
    this.$el.setAttribute('vueComponent', this.$options.name)
  },
  computed: {
    ...mapState(useMainStore, ['accessoriesOn'])
  },
  methods: {
    ...mapActions(useMainStore, ['setAccessoriesOn']),
    toggleAccessories() {
      this.setAccessoriesOn(!this.accessoriesOn)
    }
  }
}
</script>

<template>
  <section class="stage main__accessories accessories" id="stage-3">
    <div class="stage__container container container_align_start container_justify_between">
      <div class="col stage__panel">
        <div class="stage__panel-inner">
          <div class="stage__information">
            <span class="stage__index">3</span>
            <h2 class="stage__title title title_color_grey">
              <strong>Steckdosen.</strong> Setzen.
            </h2>
          </div>

          <div class="card-checkbox" :class="{ 'card-checkbox_active': accessoriesOn }">
            <div class="card-checkbox__content">
              <div class="card-checkbox__title">Ausschnitte für Steckdosen angeben?</div>
              <div class="inline-flex items-center">
                <div
                  class="card-checkbox__turn-button turn-button"
                  :data-turn="accessoriesOn"
                  @click="toggleAccessories"
                >
                  <span class="card-checkbox__turn-circle"></span>
                </div>
                <span class="card-checkbox__socket-price">ab 30€</span>
              </div>
            </div>
            <img
              src="//rueckwand24.com/cdn/shop/t/332/assets/socket.svg?v=163782654609713192881697114467"
              class="card-checkbox__image"
            />
          </div>

          <div class="stage__videos videos" :style="{ display: accessoriesOn ? 'block' : 'none' }">
            <div
              id="video_id_stage-3-1"
              class="video undefined realtive"
              data-html2canvas-ignore="true"
            >
              <a
                class="video__preview video__play-trigger"
                data-te-toggle="modal"
                data-te-target="#modalNewCropperSteckdosen"
              >
                <img
                  src="//rueckwand24.com/cdn/shop/t/332/assets/preview-video-3.jpg?v=87694546714977689501697114473"
                  class="video__image"
                  alt="video-preview-image"
                />
                <div class="button button-circle-hover video__play">
                  <i class="icon-r24-play"></i>
                </div>
              </a>
              <div class="video__content">
                <span class="video__title"
                  ><strong>Steckdosen Ausschnitte</strong> wie finde ich die richtigen Maße?</span
                >
              </div>
              <a
                class="video__button video__button-toggle video__toggle-trigger video__button_hidden"
              >
                <Icon3 />
              </a>
            </div>
          </div>

          <div
            class="accessories__list-place"
            :style="{ display: accessoriesOn ? 'block' : 'none' }"
          >
            <div class="accessory__header accessories-header-title" style="display: none">
              <div class="accessory__header-title">
                <Icon17 />
                Deine konfiguierten Steckdosen
              </div>
            </div>
            <div class="accessories-list"></div>
          </div>
          <div
            class="accessories__button-place"
            :style="{ display: accessoriesOn ? 'block' : 'none' }"
          >
            <span
              class="button button_width_auto button_color_green button_border-1_green accessory-add customizer__button accessories__add-button"
              >Steckdose hinzufügen +</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
