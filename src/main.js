import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VueVoiceRecognition from "./components/VueVoiceRecognition.vue";

const app = createApp(App)

app.use(VueVoiceRecognition);
app.mount("#app")
