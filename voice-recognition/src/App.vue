<script setup>
import { ref, onMounted, watch } from "vue";
import Mic from "./Mic.vue";

const transcript = ref("");
const is_recording = ref(false);
const clean_command = ref(["limpar tudo", "limpar texto", "apagar texto"]);

const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition; //browsers methods that recognizes human speechs
const sr = new Recognition();

onMounted(() => {
  sr.continuous = true;
  //this command tell us that the component will be listening us till we stop it
  //it's like a watcher, will be there waiting for some voice to come on
  sr.interimResults = true;
  //this one will take the results of the speech (but this is not the final result)

  //starts the recording
  sr.onstart = () => {
    is_recording.value = true;
  };

  //stops the recording
  sr.onend = () => {
    is_recording.value = false;
  };

  sr.onresult = event => {
    const text = Array.from(event.results)
      .map(res => res[0])
      .map(res => res.transcript)
      .join("");

    transcript.value = text;
  };
});

watch(transcript, () =>
  clean_command.value.map(item =>
    transcript.value.includes(item) ? (transcript.value = "") : ""
  )
);

const toggle_mic = () => {
  if (is_recording.value) sr.stop();
  else sr.start();
};
</script>

<template>
  <div class="app">
    <div v-text="transcript"></div>
    <Mic @click="toggle_mic()" />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body {
  background: dodgerblue;
  color: white;
}
</style>
