<script setup>
import { ref, onMounted } from 'vue'

const transcript = ref('')
const is_recording = ref(false)

const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition //browsers methods that recognizes human speechs
const sr = new Recognition()

onMounted(() => {
  sr.continuous = true
  //this command tell us that the component will be listening us till we stop it
  //it's like a watcher, will be there waiting for some voice to come on
  sr.interimResults = true
  //this one will take the results of the speech (but this is not the final result)

  //starts the recording
  sr.onstart = () => {
    console.log('VR started')
    is_recording.value = true
  }

  //stops the recording
  sr.onend = () => {
    console.log('VR stopped')
    is_recording.value = false
  }

  sr.onresult = event => {
    const text = Array.from(event.results)
      .map(res => res[0])
      .map(res => res.transcript)
      .join('')

    transcript.value = text
    console.log(transcript);
  }
})

const toggle_mic = () => {
  console.log('entered here')
  if (is_recording.value) sr.stop()
  else sr.start()
}
</script>

<template>
  <div class="app">
    <button @click="toggle_mic()">Record</button>
    <div v-text="transcript"></div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
  background: dodgerblue;
  color: white;
}
</style>
