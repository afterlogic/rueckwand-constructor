<script>
import Icon1 from './icons/Icon1.vue'
// import Icon13 from './icons/Icon13.vue'
// import Icon14 from './icons/Icon14.vue'

import MainSidebar from './MainSidebar.vue'
import MainContent from './MainContent.vue'

export default {
  name: 'Main',
  components: {
    Icon1,
    // Icon13,
    // Icon14,
    MainSidebar,
    MainContent,
  },
}
</script>

<template>
  <div class="main">
    <button
      type="button"
      class="cropper__close-button box-content w-8 h-8 text-white border-none rounded-none focus:shadow-none focus:outline-none focus:opacity-100 hover:opacity-75 hover:no-underline"
    >
      <Icon1 />
    </button>

    <MainContent></MainContent>
    <MainSidebar></MainSidebar>

    <!-- <div class="main__mobile-bottom-bar bottom-bar">
        <div class="main__mobile-bottom-bar-inner bottom-bar__inner">
            <div class="bottom-bar__button bottom-bar__button-back">
                <Icon13 />
                Zurück
            </div>
            <div class="bottom-bar__button bottom-bar__button-next">
                Weiter
                <Icon14 />
            </div>
        </div>
    </div> -->
  </div>
</template>
