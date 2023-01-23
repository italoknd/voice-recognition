<script setup>
import VueVoiceRecognition from './components/VueVoiceRecognition.vue'
import { ref } from 'vue'

const transcript = ref('')

const getTranscript = val => {
  transcript.value = val
}
</script>

<template>
  <VueVoiceRecognition @get-transcript="getTranscript"/>
  <textarea v-html="transcript" class="w-50" ></textarea>
</template>
