const VueVoiceRecognition = require("./components/VueVoiceRecognition");

module.exports = {
  install: (app, options) => {
    app.component("VueVoiceRecognition", VueVoiceRecognition);
  }
};
