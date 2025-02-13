<script setup lang="ts">
import { ref } from "vue";

const loading = ref<boolean>(true);

const onIframeLoad = () => { loading.value = false; };

console.log(loading.value)
</script>

<template>
  <div class="about">
    <div class="streamlit-container">
    <div v-if="loading" class="loading">Loading...</div>
    <div class="streamlit-container">
      <iframe
        src="https://alain-portfolio.streamlit.app/?embed=true"
        @load="onIframeLoad"
      ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .about {
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .streamlit-container {
  padding-top: 0.7%;
  width: 100%;
  height: 96vh;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
