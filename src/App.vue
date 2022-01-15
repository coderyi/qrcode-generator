<template>
  <div id="app" class="font-display">
    <Header />

    <div class="px-5 py-5 md:px-16 md:py-10" v-show="generateQRCodeStatus">
      <div class="max-w-7xl my-0 mx-auto">
        <div class="md:flex md:-mx-10">
          <div class="flex flex-col md:flex-1 md:px-10 mb-10 md:mb-0">
            <Canvas />

            <div
              class="flex items-center justify-center p-3 mt-4 rounded border border-border"
            >
              <div
                aria-hidden="true"
                class="h-8 w-8 mr-3 flex flex-shrink-0 items-center justify-center text-2xl font-bold rounded-full bg-primary"
              >
                !
              </div>
              <span>可以扫描试一试是否可读！</span>
            </div>
          </div>

          <div class="md:flex-1 md:px-10">
            <Settings />
          </div>
        </div>
      </div>
    </div>
    <div>
      <DecodeQRCode v-show="decodeShowStatus"/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Canvas from '@/components/Canvas.vue';
import Settings from '@/components/Settings.vue';
import DecodeQRCode from '@/components/DecodeQRCode.vue';

export default {
  name: 'App',
  components: {
    Header,
    Canvas,
    Settings,
    DecodeQRCode
  },
  computed: {
    generateQRCodeStatus() {
      return this.$store.state.qrCodeContentIndex == 1;
    },
    decodeShowStatus() {
      return this.$store.state.qrCodeContentIndex == 2;
    }
  }
}
</script>

<style>

</style>
