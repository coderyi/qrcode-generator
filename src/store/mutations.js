const mutations = {
  setQrValue(state, value) {
    state.qrValue = value;
  },

  setFileType(state, value) {
    if (typeof value !== 'string') {
      return
    }
    state.fileType = value;
  },

  setQrLightColor(state, value) {
    if (typeof value !== 'string') {
      return
    }
    state.qrLightColor = value;
  },

  setQrDarkColor(state, value) {
    if (typeof value !== 'string') {
      return
    }
    state.qrDarkColor = value;
  },

  setQrCodeContentIndex(state, value) {
    state.qrCodeContentIndex = value
  }
};

export default mutations;
