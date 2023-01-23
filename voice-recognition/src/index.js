import VueVoiceRecognition from "./components/VueVoiceRecognition.vue";

module.exports = {
  install: (app, options) => {
    app.component("VueVoiceRecognition", VueVoiceRecognition);
  }
};