<template>
    <div class="typewriter">
      <span class="text">{{ displayedText }}</span>
      <span class="cursor" :class="{ blinking: isTypingComplete }">|</span>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  
  export default defineComponent({
    name: 'TypewriterEffect',
    props: {
      text: {
        type: String,
        required: true,
      },
      speed: {
        type: Number,
        default: 50, 
      },
      delay: {
        type: Number,
        default: 800,
      },
    },
    setup(props) {
      const displayedText = ref<string>('');
      const isTypingComplete = ref<boolean>(false);
  
      const startTypewriter = () => {
        setTimeout(() => {
          typeText(0);
        }, props.delay);
      };
  
      const typeText = (index: number) => {
        if (index < props.text.length) {
          displayedText.value += props.text.charAt(index);
          setTimeout(() => {
            typeText(index + 1);
          }, props.speed);
        } else {
          isTypingComplete.value = true;
        }
      };
  
      onMounted(() => {
        startTypewriter();
      });
  
      return {
        displayedText,
        isTypingComplete,
      };
    },
  });
  </script>
  
  <style scoped>
  .typewriter {
    display: inline-block;
    color: #4b7ced;
    min-width: 30vw;
    max-width: 80vw;
    font-size: 1.2em;
    line-height: 1.2;
    white-space: pre-wrap;
    overflow: hidden;
  }
  
  .cursor {
    opacity: 1;
    animation: blink 0.7s infinite;
  }
  
  .cursor.blinking {
    animation: blink 1s infinite;
  }
  
  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }
  
  @media (max-width: 1100px) {
    .typewriter {
      min-width: 40vw;
      max-width: 90vw;
      font-size: 1.1em; 
    }
  }
  
  @media (max-width: 768px) {
    .typewriter {
      min-width: 60vw; 
      max-width: 100vw; 
      font-size: 1em; 
    }
  }
  </style>