import vue from '@vitejs/plugin-vue'

const banner = `/*!
 * Vue Voice Recognition
 * https://github.com/italoknd/voice-recognition
 * @license MIT
 */`

export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/voice-recognition.esm.js',
    format: 'es',
    banner
  }, {
    file: 'dist/voice-recognition.common.js',
    format: 'cjs',
    banner
  }, {
    file: 'dist/voice-recognition.js',
    format: 'umd',
    name: 'VoiceRecognition',
    banner
  }],
  plugins: [vue()]
}