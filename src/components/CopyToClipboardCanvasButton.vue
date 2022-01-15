<template>
  <div class="relative">
    <CanvasButton :text="text" @click="copyToClipboard" />

    <transition name="notification">
      <div
        v-if="isNotificationActive"
        class="notification absolute px-3 py-1 left-1/2 transform -translate-x-1/2 text-center rounded bg-white whitespace-nowrap border border-border"
      >
        <span
          class="notification__before absolute left-1/2 bottom-full h-0 w-0 transform -translate-x-1/2 border-solid border-transparent border-8"
        ></span>
        <span
          class="notification__after absolute left-1/2 h-0 w-0 transform -translate-x-1/2 border-solid border-transparent border-8"
        ></span>
        {{ notificationText }}
      </div>
    </transition>
  </div>
</template>

<script>
import CanvasButton from '@/components/CanvasButton.vue';

export default {
  name: 'CopyToClipboardCanvasButton',

  data() {
    return {
      isNotificationActive: false,
    };
  },

  props: {
    text: {
      type: String,
      required: true,
    },

    value: {
      type: String,
      required: true,
    },
  },

  components: {
    CanvasButton,
  },

  methods: {
    copyToClipboard(event) {
      event.preventDefault();

      navigator.clipboard.writeText(this.value).then(
        () => {
          this.showNotification('Copied!');
        },
        () => {
          this.showNotification('Error! :(');
        },
      );
    },

    showNotification(text) {
      this.isNotificationActive = true;
      this.notificationText = text;

      setTimeout(() => {
        this.isNotificationActive = false;
        this.notificationText = '';
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
.notification-enter-active,
.notification-leave-active {
  transition: opacity 0.5s;
}
.notification-enter,
.notification-leave-to {
  opacity: 0;
}

.notification {
  top: calc(100% + 0.625rem);

  &__before {
    border-bottom-color: #ced4da !important;
  }

  &__after {
    bottom: calc(100% - 0.125rem);
    border-bottom-color: white !important;
  }
}
</style>
