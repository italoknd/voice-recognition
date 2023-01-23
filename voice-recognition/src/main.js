import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VueVoiceRecognition from "./components/VueVoiceRecognition.vue";

createApp(App).mount("#app").use(VueVoiceRecognition);
