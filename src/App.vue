<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import CopyrightFooter from './components/CopyrightFooter.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <div class="content-container">
    <RouterView />
  </div>
  </main>
  <CopyrightFooter />
</template>

<style scoped>
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 1rem;
}

.content-container {
  padding-top: 8rem; 
  padding-bottom: 5rem;
  width: 100%;
  background-color: white;
}
</style>
