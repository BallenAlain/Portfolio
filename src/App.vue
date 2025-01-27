<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import CopyrightFooter from './components/CopyrightFooter.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>

  <footer>
    <CopyrightFooter />
  </footer>
  <RouterView />
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

</style>
