<script setup lang="ts">
import jsonData from '@/data/projects.json'
import ExperienceCard from '@/components/Projects/ExperienceCard.vue';

const items = jsonData;
</script>

<template>
    <main>
        <div class="content-container">
      <!-- <section id="work"></section> -->
      <ExperienceCard
        v-for="work in items"
        :key="work.company"
        :company="work.company"
        :product="work.product"
        :productDetails="work.productDetails"
        :imagePath="work.imagePath"
        :skillsIcon="work.skills"
        :path="work.path"
      />
    </div>
    </main>
</template>

<style scoped>
    .content-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;
}
</style>