# Vue Voice Recognition

With this component you can simply start talking while the component sends you your voice transcripted to you use wherever you want! (Simple like that)

## Installation:

```js
yarn add vue-voice-recognition
```

or

```js
npm i vue-voice-recognition
```

- both commands will download the latest version of the module

## Import:

```js
//first of all, import the component on your main.js
import VueVoiceRecognition from "vue-voice-recognition";

//then expose it globally to be available on your project
createApp(App).mount("#app").use(VueVoiceRecognition); // (you only this part)
```

## Use:

### Basic usage:

```js
<VueVoiceRecognition @getTranscript="callback"/>
```

### With all it's power:

```js
//nothing yet
```

## Props:

|    Option     |  Type:   | Default: |                                                                                                                                                  Description:                                                                                                                                                  |
| :-----------: | :------: | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| stopRecording |  String  |   null   |                                                                                  Here you can pass a word or phrase that when it's detected by the component will end the voice capturing immediately. (**Upcoming update**)                                                                                   |
| getTranscript | function | callback | This function returns the transcripted string for you, so you need to create a function on your component and get the value that is being emmited by **getTranscripted**. Note that you need to use **[v-html](https://vuejs.org/api/built-in-directives.html#v-html)** to render the value that you've obtained. |
