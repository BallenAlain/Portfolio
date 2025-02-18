<script setup lang="ts">
import ProjectLearnMore from '@/components/Projects/ProjectLearnMore.vue';

const data = [
  {
    "header":"Project Overview",
    "body":'<em>WIP</em>'
  },
  {
    "header":"How We Built It",
    "body" : '<em>WIP</em>'
  },
  {
    "header":"Challenges Faced",
    "body" : '<em>WIP</em>'
  },
  {
    "header":"Lessons Learned",
    "body" : '<em>WIP</em>'
  },
  {
    "header":"What's Next?",
    "body" : '<em>WIP</em>'
  },
  {
    "header":"Link",
    "body" : 'See the <a href="https://github.com/BallenAlain/Venngram/" target="_blank" style="text-decoration: none;">GitHub repository</a>'
  },
]
</script>

<template>
  <div class="container">
    <ProjectLearnMore :data="data" />
  </div>
</template>
