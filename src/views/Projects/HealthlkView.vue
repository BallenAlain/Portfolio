<script setup lang="ts">
import ProjectLearnMore from '@/components/Projects/ProjectLearnMore.vue';

const data = [
  {
    "header": "Project Overview & Background",
    "body": "text"
  },
  {
    "header": "My Role",
    "body": "text"
  },
  {
    "header": "Challenges Faced",
    "body": "text"
  },
  {
    "header": "Results & Impact",
    "body": "text"
  },
  {
    "header": "Lessons Learned",
    "body": "text"
  },
  {
    "header": "What's Next?",
    "body": "text"
  },
]
</script>

<template>
  <div class="container">
    <ProjectLearnMore :data="data" />
  </div>
</template>