<script setup lang="ts">
import { ref } from "vue";

const loading = ref<boolean>(true);

const onIframeLoad = () => { loading.value = false; };
</script>

<template>
  <div class="about">
    <div class="streamlit-container">
      <div v-if="loading" class="loading">Loading...</div>
      <div class="streamlit-container">
        <iframe src="https://alain-portfolio.streamlit.app/?embed=true&embed_options=light_theme" @load="onIframeLoad">
        </iframe>
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

.loading {
  padding-top: 2em;
  font-size: 16px;
  text-align: center;
}
</style>
