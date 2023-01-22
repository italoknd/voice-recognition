<script setup>
import { ref, onMounted, watch, defineEmits } from 'vue'
import Microphone from '../icons/Microphone.vue'

const transcript = ref('')
const is_recording = ref(false)
// const clean_command = ref(["limpar tudo", "limpar texto", "apagar texto"]);

const emit = defineEmits(['getTranscript'])

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
    is_recording.value = true
  }

  //stops the recording
  sr.onend = () => {
    is_recording.value = false
  }

  sr.onresult = event => {
    const text = Array.from(event.results)
      .map(res => res[0])
      .map(res => res.transcript)
      .join('')

    transcript.value = text
    emit('getTranscript', transcript.value)
  }
})

// watch(transcript, () =>
//   clean_command.value.map(item =>
//     transcript.value.includes(item) ? (transcript.value = "") : ""
//   )
// );

const toggle_mic = () => {
  if (is_recording.value) sr.stop()
  else sr.start()
}
</script>

<template>
  <div class="mic-container">
    <Microphone class="mic-icon" @click="toggle_mic()" />
  </div>
  <p v-text="transcript"></p>
</template>

<style scoped>
.mic-container {
  height: 4.5vh;
  width: 2.5vw;

  border-radius: 50%;
  border: 2px solid white;

  background: dodgerblue;
  cursor: pointer;
  transition: 0.5s;
  padding: 0.3em;
}

.mic-container:hover {
  background: rgb(29, 133, 236);
  border: 2px solid rgb(220, 220, 220);
}

.mic-icon {
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 100%;
}

.recording {
  background: rgb(223, 77, 77);
}
</style>
