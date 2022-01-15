<template>
  <div>
    <h3 class="mb-3 text-2xl">下载文件格式</h3>

    <SettingsWarning>
      <span class="font-bold">提示:</span> 如果浏览器不支持选择的文件类型，会默认使用PNG
    </SettingsWarning>

    <div class="flex">
      <label
        class="relative border border-l-0 first:border-l first:rounded-tl-md first:rounded-bl-md border-border px-3 py-1 cursor-pointer last:rounded-tr-md last:rounded-br-md focus-within:bg-primary uppercase"
        :class="{ 'bg-primary': fileType === selectedFileType }"
        v-for="fileType in availableFileTypes"
        :key="fileType"
      >
        <input
          v-model="selectedFileType"
          :value="fileType"
          :id="`file-type-${fileType}`"
          type="radio"
          :name="`file-type-${fileType}`"
          class="absolute left-0 opacity-0 top-0"
          @change="onFileTypeChange"
        />
        <span>{{ fileType }}</span>
      </label>
    </div>
  </div>
</template>

<script>
import SettingsWarning from '@/components/SettingsWarning.vue';

export default {
  name: 'FileTypes',

  components: {
    SettingsWarning,
  },

  data() {
    return {
      selectedFileType: '',
      availableFileTypes: ['png', 'jpeg', 'webp'],
    };
  },

  mounted() {
    this.selectedFileType = this.$store.state.fileType;
  },

  methods: {
    onFileTypeChange() {
      this.$store.commit('setFileType', this.selectedFileType);
    },
  },
};
</script>
