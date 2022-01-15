<template>
  <header class="bg-primary text-center px-5 py-2 md:px-16">
    <h1 class="text-5xl font-light mb-5">二维码生成器</h1>
    <div
      class="p-1 flex justify-end"
    >
      <button
        class="text-white font-bold hover:underline"
        type="button"
        @click="onClickGenerate"
      >
        生成二维码
      </button>
      <button
        class="text-white font-bold hover:underline ml-5"
        type="button"
        @click="onClick"
      >
        解码
      </button>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  methods: {
    onClickGenerate() {
      this.$store.commit('setQrCodeContentIndex', 1);
    },
    onClick() {
      this.$store.commit('setQrCodeContentIndex', 2);
    }
  }
};
</script>
