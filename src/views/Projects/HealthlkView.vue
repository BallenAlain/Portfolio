<script setup lang="ts">
import ProjectLearnMore from '@/components/Projects/ProjectLearnMore.vue';

const data = [
  {
    "header": "Project Overview",
    "body": 'Healthlk is a new and upcoming <span style="color: var(--alainblue)">mobile</span> and <span style="color: var(--alainblue)">web</span> platform designed for <em>patients</em>, <em>doctors</em>, and <em>medical laboratories</em>. The platform aims to provide the following features:<li>User Authentication</li><li>Patients can store records, book appointments, and communicate with healthcare providers</li><li>Doctors can manage patient records and schedule appointments</li><li>laboratories can manage and share test results with other healthcare providers</li><li>Pharmacists can process prescriptions</li><br>My team consists of frontend developers, backend developers, UI/UX designers, product owners, and scrum masters.'
  },
  {
    "header": "My Role",
    "body": '<em></em>'
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
]
</script>

<template>
  <div class="container">
    <ProjectLearnMore :data="data" />
  </div>
</template>