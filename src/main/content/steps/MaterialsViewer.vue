<script>
import Icon2 from '@/ui/icons/Icon2.vue'
import Icon3 from '@/ui/icons/Icon3.vue'
import Icon4 from '@/ui/icons/Icon4.vue'
import Icon5 from '@/ui/icons/Icon5.vue'
import Icon6 from '@/ui/icons/Icon6.vue'

export default {
  components: {
    Icon2,
    Icon3,
    Icon4,
    Icon5,
    Icon6
  },
  props: {
    active: { type: Boolean, required: true }
  }
}
</script>

<template>
  <div class="main__stage-content" :class="{ 'stage-content_active': active }" id="stage-content-2">
    <div class="flex flex-col gap-5 max-w-full">
      <div class="flex gap-5 justify-between">
        <div class="materials__main-image relative">
          <img
            src="https://cdn.shopify.com/s/files/1/0514/2511/6352/files/1._ALU_-_Classic_Matt_2265f71d-1571-4869-8744-31abc3912347.png?v=1692812265"
            class="image image_h-100"
            alt="material-image"
          />
          <div style="bottom: 16px; left: 16px" class="absolute tags-selector flex flex-col gap-2">
            <span
              class="px-2 py-1 font-bold rounded-md w-fit"
              style="background: black; color: white"
              >Made in Germany</span
            >
          </div>
        </div>
        <div class="materials__main-video relative cursor-pointer">
          <div
            id="video_id_materials-1"
            class="video video__no-content realtive"
            data-html2canvas-ignore="true"
          >
            <a
              class="video__preview video__play-trigger"
              undefined=""
              style="display: none !important"
            >
              <img
                src="//rueckwand24.com/cdn/shop/t/332/assets/video.png?v=26611189817451746521697114475"
                class="video__image"
                alt="video-preview-image"
              />
              <div style="top: 30%; right: 25%" class="absolute flex flex-col items-center gap-4">
                <h3 class="text-white font-bold text-2xl lg:text-4xl">Alle Vorteile</h3>
                <span class="flex gap-3 items-center py-2 px-3.5 rounded-xl bg-white w-fit">
                  Video ansehen
                  <span class="p-1 flex justify-center items-center bg-black rounded-full">
                    <Icon2 />
                  </span>
                </span>
              </div>
            </a>
            <video
              class="video__video video__video_active object-cover"
              autoplay=""
              muted=""
              playsinline=""
              controls="controls"
            >
              <source
                type="video/mp4"
                src="https://cdn.shopify.com/videos/c/o/v/94c9370c664a46b4a99bfd61df479d0a.mp4"
              />
            </video>
            <a
              class="video__button video__button-toggle video__toggle-trigger video__button_hidden"
            >
              <Icon3 />
            </a>
          </div>
        </div>
      </div>
      <div class="flex gap-4 justify-between materials__main-second-row">
        <div
          style="min-height: 268px"
          class="materials__main-second-col relative p-4 rounded-lg bg-white flex-1"
        >
          <p class="text-2xl font-bold">Qualitäts-Index</p>
          <p
            style="color: #a1a1aa; padding-top: 2.75rem"
            class="text-center text-2xl font-semibold text-gray-primary py-3"
          >
            <span class="index-selector text-8xl text-black">7</span>/10
          </p>
          <a
            class="cursor-pointer hover:border-box-shadow-parent absolute left-0 top-0 w-full h-full"
            data-te-toggle="modal"
            data-te-target="#modalQualityIndexDefault"
          >
            <i
              style="bottom: 0.5rem; right: 0.75rem"
              class="fixed md:absolute flex items-center justify-center h-6 w-6 lg:h-9 lg:w-9 bg-[#454645] rounded-full hover:border-box-shadow-child"
            >
              <Icon4 />
            </i>
          </a>
        </div>
        <div
          style="min-height: 268px"
          class="materials__main-second-col relative p-4 rounded-lg bg-white flex-1"
        >
          <p class="text-2xl font-bold">Besonderheiten</p>
          <div class="feature-list-selector flex flex-col gap-3 pt-6">
            <span
              class="flex gap-2 px-2.5 py-1.5 rounded-md w-fit overflow-hidden"
              style="background: rgb(240, 240, 240); color: black"
              ><img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjI2OF83OTgpIj4NCiAgICAgICAgPHBhdGggZD0iTTAuNzUgMTUuNTg2N0MyLjAzNjQxIDE2LjEyNyAzLjQyMzIxIDE2LjM4NzEgNC44MTggMTYuMzQ5NEM4Ljc0OTUgMTYuMzQ5NCA5LjkxMiAxNS4xMjM5IDEzLjg0MzUgMTUuMTIzOUMxNS4yMzggMTUuMDg2NCAxNi42MjQ2IDE1LjM0NjQgMTcuOTEwNyAxNS44ODY3TDE1LjYyMzIgMi4zMDc5MUMxNC41NDI5IDEuODgzMjcgMTMuMzk0IDEuNjYwMDkgMTIuMjMzMiAxLjY0OTQxQzkuMzQ3MjUgMS42NDk0MSA5LjMxNDI1IDIuODQ5NDEgNi40MjgyNSAyLjg0OTQxQzUuMjc3MjMgMi44NDMwNyA0LjEzMzk3IDIuNjYwNDYgMy4wMzgyNSAyLjMwNzkxTDAuNzUgMTUuNTg2N1pNNi40Mjc1IDMuNTk5NDFDNy41MjU2OCAzLjYyMTQ2IDguNjE0ODQgMy4zOTcyMiA5LjYxNSAyLjk0MzE2QzEwLjQzMzggMi41NjIxIDExLjMyOTcgMi4zNzU5OCAxMi4yMzI1IDIuMzk5NDFDMTMuMTU4NSAyLjQxMDUxIDE0LjA3NyAyLjU2NjEzIDE0Ljk1NSAyLjg2MDY2TDE2Ljk2MTIgMTQuNzY0N0MxNS45NDMyIDE0LjUwMDcgMTQuODk1MiAxNC4zNjk2IDEzLjg0MzUgMTQuMzc0N0MxMi4yNTk3IDE0LjM3ODcgMTAuNjgzNCAxNC41OTE2IDkuMTU1MjUgMTUuMDA3N0M3Ljc0MjEgMTUuMzk2MiA2LjI4MzU4IDE1LjU5NTIgNC44MTggMTUuNTk5NEMzLjcyMzkyIDE1LjYwOTMgMi42MzUyNiAxNS40NDQ4IDEuNTkzIDE1LjExMTlMMy42MzYgMy4yNTY2NkM0LjU1MDA5IDMuNDc4NjMgNS40ODY4NyAzLjU5MzY1IDYuNDI3NSAzLjU5OTQxWiIgZmlsbD0iYmxhY2siLz4NCiAgICA8L2c+DQogICAgPGRlZnM+DQogICAgICAgIDxjbGlwUGF0aCBpZD0iY2xpcDBfMjI2OF83OTgiPg0KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiBmaWxsPSJ3aGl0ZSIvPg0KICAgICAgICA8L2NsaXBQYXRoPg0KICAgIDwvZGVmcz4NCjwvc3ZnPg0K"
                alt="icon"
              />
              <p class="font-bold text-sm">Matte Oberfläche</p> </span
            ><span
              class="flex gap-2 px-2.5 py-1.5 rounded-md w-fit overflow-hidden"
              style="background: rgb(240, 240, 240); color: black"
            >
              <p class="font-bold text-sm">+11 Jahre Langlebigkeit</p>
            </span>
          </div>
          <a
            class="cursor-pointer hover:border-box-shadow-parent absolute left-0 top-0 w-full h-full"
            data-te-toggle="modal"
            data-te-target="#modalMaterialFeatures"
          >
            <i
              style="bottom: 0.5rem; right: 0.75rem"
              class="fixed md:absolute flex items-center justify-center h-6 w-6 lg:h-9 lg:w-9 bg-[#454645] rounded-full hover:border-box-shadow-child"
            >
              <Icon5 />
            </i>
          </a>
        </div>
        <div
          style="min-height: 268px"
          class="materials__main-second-col relative p-4 rounded-lg bg-black flex-1 overflow-hidden"
        >
          <p class="text-2xl font-bold text-white">Material Vergleich</p>
          <p style="color: #949494" class="relative z-10 text-lg font-semibold pt-6">
            Vergleiche und finde <span class="text-white">Dein <br />Wunschmaterial</span>
          </p>
          <img
            src="//rueckwand24.com/cdn/shop/t/332/assets/material-popup.png?v=58748211147366543291697114474"
            style="
              position: absolute;
              width: 285px;
              height: 171px;
              opacity: 0.4;
              left: -45px;
              bottom: 0;
            "
            alt="popup-image"
          />
          <div
            class="absolute bottom-0 left-0"
            style="
              background: url('//rueckwand24.com/cdn/shop/t/332/assets/material-popup.png?v=58748211147366543291697114474');
              width: 249px;
              height: 151px;
            "
          ></div>
          <a
            class="cursor-pointer hover:border-box-shadow-parent absolute left-0 top-0 w-full h-full z-10"
            data-te-toggle="modal"
            data-te-target="#modalCollectionMaterial"
          >
            <i
              style="bottom: 0.5rem; right: 0.75rem"
              class="fixed md:absolute flex items-center justify-center h-6 w-6 lg:h-9 lg:w-9 bg-[#454645] rounded-full hover:border-box-shadow-child"
            >
              <Icon6 />
            </i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
