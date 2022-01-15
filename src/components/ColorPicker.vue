<template>
  <div
    class="color-picker align-middle border flex mr-5 rounded focus-within:border-primary overflow-hidden border-border"
  >
    <label :for="`${label}-color`" class="px-3 py-1">{{ label }}</label>
    <input
      v-model="value"
      :id="`${label}-color`"
      type="color"
      :name="label"
      class="border-l border-border w-8 h-8 outline-none"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  name: 'ColorPicker',

  props: {
    label: {
      type: String,
      required: true,
    },

    defaultValue: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      value: '',
    };
  },

  mounted() {
    this.value = this.defaultValue;
  },
  emits: ['input'],
  methods: {
    onInput() {
      this.$emit('input', this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch {
    border: none;
  }
}
</style>
