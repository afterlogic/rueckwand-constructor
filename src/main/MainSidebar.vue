<script>
import Icon3 from '@/ui/icons/Icon3.vue'
import Icon7 from '@/ui/icons/Icon7.vue'

import StageCropper from './sidebar/steps/Cropper.vue'
import StageMaterials from './sidebar/steps/Materials.vue'
import StageAccessories from './sidebar/steps/Accessories.vue'
import StageCheckout from './sidebar/steps/Checkout.vue'

import { mapActions } from 'pinia'
import { useMainStore } from '/src/stores/main.js'

export default {
  name: 'MainPanel',
  components: {
    Icon3,
    Icon7,
    StageCropper,
    StageMaterials,
    StageAccessories,
    StageCheckout,
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        // getting intersecting entries or one entru that has changed
        const activeEntries =
          entries.length === 1 ? entries : entries.filter((entry) => entry.isIntersecting)
        if (activeEntries.length === 1) {
          // we have only one entry it means that it gets into/out viewport
          const entry = activeEntries[0]
          const entryName = entry.target.getAttribute('vueComponent')

          // if entry gets into viewport
          if (entry.isIntersecting) {
            if (!this.currentStepName) {
              this.currentStepName = entryName
            } else if (entry.intersectionRect.top === entry.rootBounds.top) {
              // entry cames from top then just remember that it appears in viewport and can be used later
              this.nextStepName = entryName
            } else if (entry.intersectionRect.bottom === entry.rootBounds.bottom) {
              // entry cames from bottom then select it and remember current step as nextStepName
              this.nextStepName = this.currentStepName
              this.currentStepName = entryName
            }
          }
          // if entry gets out of viewport then use nextStepName
          if (!entry.isIntersecting && entryName === this.currentStepName) {
            this.currentStepName = this.nextStepName
            this.nextStepName = ''
          }
        } else if (activeEntries.length > 1) {
          //we have several intersecting viewports, so the last one is the current step, previous is prev step
          this.nextStepName =
            activeEntries[activeEntries.length - 2].target.getAttribute('vueComponent')
          this.currentStepName =
            activeEntries[activeEntries.length - 1].target.getAttribute('vueComponent')
        }
      },
      {
        root: null, // use the document's viewport as the root element
        rootMargin: `-${this.viewportOffsetTop} 0px -${this.viewportOffsetBottom} 0px`,
        threshold: 0,
      },
    )

    // get the target element from the ref
    const step1 = this.$refs.step1
    const step2 = this.$refs.step2
    const step3 = this.$refs.step3
    const step4 = this.$refs.step4

    // start observing the target element
    observer.observe(step1.$el)
    observer.observe(step2.$el)
    observer.observe(step3.$el)
    observer.observe(step4.$el)
  },
  props: {
    viewportOffsetTop: { type: String, default: '0px' }, // px or %
    viewportOffsetBottom: { type: String, default: '150px' }, // px or %
  },
  data() {
    return {
      entry: null,
      nextStepName: '',
      currentStepName: '',
    }
  },
  watch: {
    currentStepName(v) {
      this.setCurrentStepName(v)
    },
  },
  methods: {
    ...mapActions(useMainStore, ['setCurrentStepName']),
  },
}
</script>

<template>
  <div class="main__panel">
    <div class="stage__header-panel header-panel" style="top: 108.5px">
      <div class="header-panel__title-group">
        <div class="header-panel__title">Küchenrückwand</div>
        <div class="main__total-price header-panel__price">19,00 €</div>
      </div>
      <div class="header-panel__name">Bläulicher Marmor</div>
    </div>

    <div
      id="video_id_stage-panel-1"
      class="video undefined realtive video-panel video-folded"
      data-html2canvas-ignore="true"
    >
      <a
        class="video__preview video__play-trigger"
        data-te-toggle="modal"
        data-te-target="#modalNewCropperKonfigurator"
      >
        <img
          src="//rueckwand24.com/cdn/shop/t/332/assets/first-measure-image.png?v=71088614058310961791697184581"
          class="video__image"
          alt="video-preview-image"
        />
        <div class="button button-circle-hover video__play">
          <i class="icon-r24-play"></i>
        </div>
      </a>
      <div class="video__content">
        <span class="video__title"><strong>Wie funktioniert</strong> der Konfigurator?</span>
      </div>
      <a class="video__button video__button-toggle video__toggle-trigger">
        <Icon3 />
      </a>
    </div>

    <StageCropper
      ref="step1"
      :class="{ stage_active: currentStepName === 'Cropper' }"
    ></StageCropper>
    <StageMaterials
      ref="step2"
      :class="{ stage_active: currentStepName === 'Materials' }"
    ></StageMaterials>
    <StageAccessories
      ref="step3"
      :class="{ stage_active: currentStepName === 'Accessories' }"
    ></StageAccessories>
    <StageCheckout
      ref="step4"
      :class="{ stage_active: currentStepName === 'Checkout' }"
    ></StageCheckout>

    <div class="stage__list-index" style="opacity: 1; --stage-list-translate-y: 0">
      <div
        data-id="2"
        class="stage__index stage__index-next stage__index-next-active last__checkout-stage"
        style="opacity: 0"
      >
        2
        <span class="stage__index-name"><strong>Material.</strong> Auswählen.</span>
      </div>
      <div
        data-id="3"
        class="stage__index stage__index-next last__checkout-stage"
        style="opacity: 0"
      >
        3
        <span class="stage__index-name"><strong>Steckdosen.</strong> Setzen.</span>
      </div>
      <div
        data-id="4"
        class="stage__index stage__index-next last__checkout-stage"
        style="opacity: 0"
      >
        <Icon7 />
        <span class="stage__index-name">Bestellübersicht</span>
      </div>
    </div>

    <!-- DEBUG INFO -->
    <div style="position: fixed; z-index: 10000; top: 20px; left: 2px">
      <!-- Current: {{ currentStepName }} <br />
      Prev: {{ nextStepName }} <br /> -->

      <!-- <div>
        {{ entry?.target.getAttribute('vueComponent') }}
      </div> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.stage__index {
  pointer-events: none;
}
</style>
