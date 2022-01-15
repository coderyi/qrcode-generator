<template>
  <div class="border border-border rounded flex-grow flex flex-col">
    <div
      v-show="qrValue"
      class="p-3 flex justify-end bg-white border-b border-border"
    >
      <CanvasButton text="下载" @click="downloadImage" />

      <CopyToClipboardCanvasButton
        class="ml-5"
        text="复制"
        :value="dataUrl"
      />
    </div>

    <div
      class="flex justify-center items-center flex-grow text-center relative overflow-hidden p-5 md:p-0"
    >
      <canvas v-show="qrValue" ref="canvas" class="mx-auto"></canvas>

      <p v-show="!qrValue">此处预览二维码</p>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode';
import CanvasButton from '@/components/CanvasButton.vue';
import CopyToClipboardCanvasButton from '@/components/CopyToClipboardCanvasButton.vue';

export default {
  name: 'Canvas',

  components: {
    CanvasButton,
    CopyToClipboardCanvasButton,
  },

  data() {
    return {
      dataUrl: '',
    };
  },

  mounted() {
    this.generateQRCode();
    this.setDataUrl();
  },

  computed: {
    qrValue() {
      return this.$store.state.qrValue;
    },

    fileType() {
      return this.$store.state.fileType;
    },

    lightColor() {
      return this.$store.state.qrLightColor;
    },

    darkColor() {
      return this.$store.state.qrDarkColor;
    },

    propertiesToWatchForQRUpdate() {
      return `${this.qrValue} ${this.lightColor} ${this.darkColor}`;
    },
  },

  watch: {
    propertiesToWatchForQRUpdate() {
      this.generateQRCode();
      this.setDataUrl();
    },
  },

  methods: {
    generateQRCode() {
      if (!this.qrValue) return;

      QRCode.toCanvas(
        this.$refs.canvas,
        this.qrValue,
        {
          color: { light: this.lightColor, dark: this.darkColor },
          margin: 0,
        },
        (error) => {
          if (error) {
            console.log(error);
          }
        },
      );
    },

    setDataUrl() {
      this.dataUrl = this.$refs.canvas.toDataURL();
    },

    downloadImage() {
      const MIME_TYPE = `image/${this.fileType}`;
      const url = this.$refs.canvas.toDataURL(MIME_TYPE);
      const dlLink = document.createElement('a');

      dlLink.download = 'qrcode';
      dlLink.href = url;
      dlLink.dataset.downloadurl = `${MIME_TYPE}:${dlLink.download}:${dlLink.href}`;

      dlLink.click();
    },
  },
};
</script>
