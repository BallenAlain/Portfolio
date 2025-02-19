<script setup lang="ts">
import ProjectLearnMore from '@/components/Projects/ProjectLearnMore.vue';

const data = [
  {
    "header":"Project Overview",
    "body":'An interactive visualization for venn diagram made as part of a software development projects course. We have developed a simplified user interface that allows users to drag and drop pieces of data into a venn diagram. The diagrams are fully customizable allowing users to change colour, size, and number of venn diagram circles. Users can also save their work and export their work as an image or pdf document. A readily runnable JAR file is provided for quick and easy access to the application.'
  },
  {
    "header":"How We Built It",
    "body" : 'The application follows an <span style="color:var(--alainblue);">MVC (Model View Controller)</span> architecutre: <li><span style="color:var(--alainblue);">Model</span>: the data elements (text, styling, and sets)</li><li><span style="color:var(--alainblue);">View</span>: manages the UI elements of the application</li><li><span style="color:var(--alainblue);">Controller</span>: underlying business logic and manages user interactions</li><br>The UI was developed using the JavaFX library. The application was tested using JUnit tests and the application has a code coverage of 90%. The application uses Gradle for build automation and CircleCI for our continuous integration process.'
  },
  {
    "header":"Challenges Faced",
    "body" : 'Early on, we faced the issue of dealing with code conflicts. We, therefore, learned how to use the git merge and git rebase to resolve conflicts and established a feedback system. This system ensures we keep track of code changes and sequentially add code to the system by notifying each other when we make changes. <br><br>We faced issues incorporating CircleCI and gradle into our CI/CD pipeline. We managed to overcome this obstacle by making small incremental changes ensuring each change we implement is fully functional before we add another change. We found that this method of building our CI/CD pipeline helped us debug any issues and ensured the qualiy of our implementation as it allows for team members to provide their feedback at each step.'
  },
  {
    "header":"Lessons Learned",
    "body" : '<li>Creating standalone desktop application with an aesthetic GUI</li><li>Creating our custom file system</li><li>How to work with a team in a large code base using Git Version Control</li><li>How to write clear and maintainable code that allows for additional features to be implemented in the future</li>'
  },
  {
    "header":"What's Next?",
    "body" : '<li>Create a mobile version of the application and host it on Google\'s Play Store and Apple\'s App Store</li><li>Support more export file formats</li><li>Filter specific types of data</li><li>Allow images to be dragged and dropped inside the diagram</li><li>Implement set operations</li>'
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
