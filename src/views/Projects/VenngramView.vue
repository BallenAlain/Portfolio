<script setup lang="ts">
import ProjectLearnMore from '@/components/Projects/ProjectLearnMore.vue';

const data = [
  {
    "header":"Project Overview & Background",
    "body" : "text"
  },
  {
    "header":"How We Built It",
    "body" : "text"
  },
  {
    "header":"Challenges Faced",
    "body" : "text"
  },
  {
    "header":"Lessons Learned",
    "body" : "text"
  },
  {
    "header":"What's Next?",
    "body" : "text"
  },
  {
    "header":"Link",
    "body" : 'See the <a href="https://github.com/BallenAlain/Venngram/" style="text-decoration: none;">GitHub repository</a>'
  },
]
</script>

<template>
  <div class="container">
    <ProjectLearnMore :data="data" />
  </div>
</template>
