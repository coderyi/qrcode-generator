<template>
  <div>
    <h3 class="text-2xl">颜色</h3>

    <SettingsWarning>
      <span class="font-bold">提示:</span> 改变颜色可能会导致二维码不可读
    </SettingsWarning>

    <div class="flex">
      <ColorPicker
        label="Light"
        default-value="#ffffff"
        @input="onLightColorInput"
      />
      <ColorPicker
        label="Dark"
        default-value="#000000"
        @input="onDarkColorInput"
      />
    </div>
  </div>
</template>

<script>
import ColorPicker from '@/components/ColorPicker.vue';
import SettingsWarning from '@/components/SettingsWarning.vue';

export default {
  name: 'Colors',

  components: {
    ColorPicker,
    SettingsWarning,
  },

  methods: {
    onLightColorInput(value) {
      this.$store.commit('setQrLightColor', value);
    },

    onDarkColorInput(value) {
      this.$store.commit('setQrDarkColor', value);
    },
  },
};
</script>
