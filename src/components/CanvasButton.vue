<template>
  <button
    class="text-primary font-bold hover:underline"
    type="button"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'CanvasButton',

  props: {
    text: {
      type: String,
      required: true,
    }
  },
  emits: ['click'],
  methods: {
    onClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
