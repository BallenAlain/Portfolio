<script setup lang="ts">
import ProjectLearnMore from '@/components/Projects/ProjectLearnMore.vue';

const data = [
  {
    "header": "Project Overview & Background",
    "body": '<em>WIP</em>'
  },
  {
    "header": "My Role",
    "body": '<em>WIP</em>'
  },
  {
    "header": "Challenges Faced",
    "body": '<em>WIP</em>'
  },
  {
    "header": "Results & Impact",
    "body": '<em>WIP</em>'
  },
  {
    "header": "Lessons Learned",
    "body": '<em>WIP</em>'
  },
  {
    "header": "What's Next?",
    "body": '<em>WIP</em>'
  },
]
</script>

<template>
  <div class="container">
    <ProjectLearnMore :data="data" />
  </div>
</template>