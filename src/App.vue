<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import CopyrightFooter from './components/CopyrightFooter.vue'
import { Analytics } from "@vercel/analytics/vue"
import { SpeedInsights } from "@vercel/speed-insights/vue"
</script>

<template>
  <Analytics />
  <SpeedInsights />
  <header>
    <NavBar />
  </header>
  <main>
    <div class="content-container">
      <RouterView v-motion-fade duration="300" />
    </div>
  </main>
  <footer>
    <CopyrightFooter />
  </footer>
</template>

<style scoped>
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.content-container {
  min-height: calc(100vh - 55.03px);
  padding-top: 5rem;
  padding-bottom: 2rem;
  width: 100%;
  background-color: white;
}
</style>
