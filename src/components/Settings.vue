<template>
  <div>
    <div class="mb-8">
      <Value />
    </div>

    <div class="mb-8">
      <Colors />
    </div>

    <div>
      <FileTypes />
    </div>
  </div>
</template>

<script>
import Value from '@/components/Value.vue';
import Colors from '@/components/Colors.vue';
import FileTypes from '@/components/FileTypes.vue';

export default {
  name: 'Settings',

  components: {
    Value,
    Colors,
    FileTypes,
  },
};
</script>
