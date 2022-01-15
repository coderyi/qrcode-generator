<template>
  <div>
    <label class="block mb-5 text-2xl" for="value">内容</label>
    <input
      v-model="value"
      type="text"
      name="value"
      id="value"
      :placeholder="defaultValue"
      class="h-12 border border-border p-3 rounded outline-none focus:border-primary w-full"
      @input="onValueInput"
    />
  </div>
</template>

<script>
import { DEFAULT_VALUE } from '@/constants';

export default {
  name: 'Value',

  data() {
    return {
      value: '',
      defaultValue: DEFAULT_VALUE,
    };
  },

  mounted() {
    this.value = this.$store.state.qrValue;
  },

  methods: {
    onValueInput() {
      this.$store.commit('setQrValue', this.value);
    },
  },
};
</script>

<style></style>
