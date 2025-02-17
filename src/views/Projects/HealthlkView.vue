<script setup lang="ts">
import ProjectLearnMore from '@/components/Projects/ProjectLearnMore.vue';

const data = [
  {
    "header": "Project Overview",
    "body": 'Healthlk is a new and upcoming <span style="color: var(--alainblue)">mobile</span> and <span style="color: var(--alainblue)">web</span> platform designed for <em>patients</em>, <em>doctors</em>, and <em>medical laboratories</em>. The platform aims to provide the following features:<li>User Authentication</li><li>Patients can store records, book appointments, and communicate with healthcare providers</li><li>Doctors can manage patient records and schedule appointments</li><li>laboratories can manage and share test results with other healthcare providers</li><li>Pharmacists can process prescriptions</li><br>My team consists of frontend developers, backend developers, UI/UX designers, product owners, and scrum masters.'
  },
  {
    "header": "My Role",
    "body": 'As a software developer <span style="color: var(--alainblue)">leading</span> the backend development at Healthlk, I have played an important role in shaping the technical foundation of the platform. My responsibilities include decision-making, training new hires, and designing efficient workflows that ensure seamless collaboration among cross-functional teams.<br><br> My key contributions include:<li><span style="color: var(--alainblue)">Team Leadership & Collaboration:</span> Led a team of 5 backend developers in building a scalable mobile and web application using Flutter</li><li><span style="color: var(--alainblue)">Secure User Authentication:</span> Designed a robust user authentication and account creation flow using Firebase Authentication which includes OAuth providers</li><li><span style="color: var(--alainblue)">Efficient Data Handling:</span> Designed a secure document uploading pipeline with Google Cloud Functions to manage sensitive data. It incorporates encryption and strict access controls</li>'
  },
  {
    "header": "Challenges Faced",
    "body": '<span style="color:var(--alainblue)">Refactoring Legacy Code</span>: I was tasked with refactoring existing features to comply with changing requirements. I tackled this challenge by first testing in chunks to gain an understanding of the current behaviour. If the code is complex or tightly coupled, I create a map of the underlying architecture to understand how components interact with each other. I then proceed with incremental refactory, tackling small and manageable parts incrementally. Once the refactor is completed, I discuss with teammates (other developers and QA) my implementation through code reviews and demos to validate my changes. To ensure I do not break existing functionality, I ensure good version control practices by using a specified feature branch.<br><br><span style="color: var(--alainblue)">Ensuring Consistent Code Quality</span>: We are a team working in a remote environment with some working in different time zones. To ensure consistent code quality, I first discussed some of the pain points we are facing in regards to consistency. Some of the issues we brought up is inconsistent practices between team members, different automated formatting tools, and no formal way of providing feedback on other member\'s work. To solve this, I proposed and implemented a set of coding standards that involved widespread use of automated formatting tools (VS Code extensions, ESLint, Prettier) and advocated the use of pull requests/feature branches.'
  },
  {
    "header": "Lessons Learned",
    "body": "<li>Designing accessible and responsive UI</li><li>BLoC pattern for state management</li><li>Advantages of NoSQL databases</li><li>Benefits of a serverless backend with Firebase</li><li>Training and onboarding new backend developers</li>"
  },
  {
    "header": "Additional Notes",
    "body": 'Healthlk will soon be released on Apple\'s App Store for iOS devices and Google\'s Playstore for Android devices.'
  },
]
</script>

<template>
  <div class="container">
    <ProjectLearnMore :data="data" />
  </div>
</template>