<script>
import Icon7 from '@/components/icons/Icon7.vue'
import Icon8 from '@/components/icons/Icon8.vue'
import Icon9 from '@/components/icons/Icon9.vue'
import Icon10 from '@/components/icons/Icon10.vue'
import Icon11 from '@/components/icons/Icon11.vue'
import Icon12 from '@/components/icons/Icon12.vue'

import { mapState } from 'pinia'
import { useMainStore } from '/src/stores/main.js'

import materials from '/src/materialsData.js'

export default {
  name: "Checkout",
  components: {
    Icon7,
    Icon8,
    Icon9,
    Icon10,
    Icon11,
    Icon12,
  },
  mounted: function() {
    this.$el.setAttribute('vueComponent', this.$options.name)
  },
  computed: {
    ...mapState(useMainStore, ['panels', 'currentMaterialId']),
    selectedMaterial() {
      return materials.find(item => item.id === this.currentMaterialId )
    },
  },
  // methods: {
  //   ...mapActions(useMainStore, []),
  // },
}
</script>

<template>
  <section class="stage main__checkout checkout" id="stage-4">
    <div class="stage__container container container_align_start container_justify_between">

      <div class="col stage__panel">
        <div class="stage__panel-inner">

          <div class="stage__information stage__information-checkout">
            <span class="stage__index"><Icon7 /></span>
            <h2 class="stage__title title title_color_grey"><strong>Fertig️.</strong></h2>
          </div>

          <div class="stage__videos videos"></div>

          <div class="checkout-panel">
            <div class="checkout-panel__header">
              <div class="checkout-panel__title">Gesamtsumme</div>
              <div class="checkout-panel__price">
                <div class="main__total-price checkout-panel__title">19,00 €</div>
                <span class="checkout-panel__text">inkl. MwSt.</span>
              </div>
            </div>

            <div class="checkout-panel__block checkout-panel__plates">
              <span class="checkout-panel__block-title">Deine Rückwände:</span>

              <div class="checkout-panel__plates-list" v-for="(panel, index) in panels" :key="panel.id" style="--plates-list-height: 53px;">
                <div class="checkout-panel__plate">
                  <div class="checkout-panel__plate-index label">{{ index + 1 }}</div>
                  <div class="checkout-panel__text">{{ panel.width }} x {{ panel.height }} cm</div>
                </div>
              </div>
            </div>

            <div class="checkout-panel__block checkout-panel__material" v-if="selectedMaterial">
              <span class="checkout-panel__block-title">Dein Material:</span>

              <div class="checkout-panel__material-item material material_checkout">
                <img class="material__image" :src="selectedMaterial.thumbUrl">
                <div class="material__text-group">
                  <div class="material__title" :data-value="selectedMaterial.alias">
                    {{ selectedMaterial.title }}
                    <div class="material__label label whitespace-nowrap" v-for="label in selectedMaterial.labels" :key="label" style="color: black; background: #DBDBDB">{{ label }}</div>
                  </div>
                  <div class="material__content">
                    <div class="material__description">{{ selectedMaterial.description }}</div>
                    <span class="material__checkbox"></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="checkout-panel__block checkout-panel__accessories" style="display: none;">
              <span class="checkout-panel__block-title">Deine konfiguierten Steckdosen:</span>

              <div class="checkout-panel__accessories-list"></div>
            </div>

            <hr class="checkout-panel__hr">

            <a href="javascript:void(0);" class="checkout-panel__button button checkout-panel__order-trigger">In den Warenkorb</a>

            <div class="checkout-panel__feedback-block icon-text">
              <img src="//rueckwand24.com/cdn/shop/t/332/assets/people.png?v=16655297016150515611697114469">
              <span>Mehr als <strong>1.976 mal</strong> in den letzten 2 Monaten gekauft</span>
            </div>

            <div class="payments checkout-panel__payments">
              <Icon8 />
            </div>

            <ul class="checkout-panel__advantages-list list">
              <li class="checkout-panel__advantage icon-text">
                <Icon9 />
                <span>Kostenloser Versand (10-15 Werktage)</span>
              </li>
              <li class="checkout-panel__advantage icon-text">
                <Icon10 />
                <span>Express Versand (5-7 Werktage)</span>
              </li>
              <li class="checkout-panel__advantage icon-text">
                <Icon11 />
                <span>2 Jahre Garantie</span>
              </li>
              <li class="checkout-panel__advantage icon-text">
                <Icon12 />
                <span>Sichere Bezahlung</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>