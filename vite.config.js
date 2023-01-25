import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

//define what happens when vite builds

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "vue-voice-recognition",
      fileName: format => `${format}.js`
    },
    rollup: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  plugins: [vue()]
});
