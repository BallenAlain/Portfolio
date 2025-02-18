<script setup lang="ts">
import ProjectLearnMore from '@/components/Projects/ProjectLearnMore.vue';

const data = [
  {
    "header":"Project Overview",
    "body" : 'A class project focused on incorporating design patterns and testing methodology. This standalone desktop application is designed for <span style="color: var(--alainblue);">parking lot managers</span> and <span style="color: var(--alainblue);">parking lot clients</span> to be used in a university setting. Some examples of clients include students, faculty, and visitors. <br><br>This application offers several features: <li>Clients can pay a fee to temporarily register their car for a parking lot</li><li>A parking lot manager can perform managerial tasks such as view every booking, approve registrations, and cancel a booking'
  },
  {
    "header":"How We Built It",
    "body" : '<p>The whole application was written in Java. We placed a heavy emphasis on testing and incorporated two automated testing tools&mdash;Randoop for automatic unit test generation and EvoSuite for automatic test suite generation. The overall architecture uses a monolithic approach for fast development speed and simplicity.<br><br>The codebase is organized into the following components:</p><ul><li><span style="color: var(--alainblue);">GUI</span>: built using the Java Swing toolkit</li><li><span style="color: var(--alainblue);">System</span>: handles the system\'s logic</li><li><span style="color: var(--alainblue);">Users</span>: models of the users represented as classes with their corresponding methods</li><li><span style="color: var(--alainblue);">Database</span>: reading/writing to the csv databases</li><li><span style="color: var(--alainblue);">Test</span>: Unit tests for the system</li></ul><p><br>This project was developed in order for our team to learn design patterns. Therefore, the following design patterns have been incorporated in the system:</p><ul><li><span style="color: var(--alainblue);">Singleton</span>: used for admin access<ul><li>Ensures only one admin is created</li></ul></li><li><span style="color: var(--alainblue);">State Method</span>: Listen for changes in parking lot states (occupied/free) and react accordingly<ul><li>Ensures each state is responsible for its own behaviour following the Single Responsibility Principle (SRP)</li></ul></li><li><span style="color: var(--alainblue);">Observer</span>: Used in conjunction with states, observing parking lot states and reacting accordingly promoting event-driven architecture <ul><li>Observers are notified automatically when subject (parking lot) changes state without manual polling</li></ul></li><li><span style="color: var(--alainblue);">Factory</span>: Used for creating client classes<ul><li>Suitable for different types of clients (Student, Faculty, Visitor)</li><li>Allows for new types of clients to be added or modify existing types without affecting underlying functionality -- Open Closed Principle (OCP)</li><li>Avoids tightly coupled code</li></ul></li></ul>'
  },
  {
    "header":"Challenges Faced",
    "body" : 'Ensuring smooth interaction between GUI elements and system logic is essential. To achieve this, we tackled both the GUI and system logic seperately ensuring we communicate our implementations effectively. We used activity diagrams to map out relationships between classes and how it would interact with the UI elements.<br><br>Test duplication from using randoop and EvoSuite. To overcome this challenge, we used manual oversight to determine which of the tests we should keep and which tool we should be using. We decided to use EvoSuite for its test quality and code coverage which was measured using the JaCoCo library.'
  },
  {
    "header":"Lessons Learned",
    "body" : '<ul><li>Incorporating design patterns in our project</li><li>Diagramming the system, documenting relationships between classes</li><li>Automated testing: we found EvoSuite to be more effective than randoop<ul><li>The code coverage is much higher resulting in better quality tests at the cost of slow generation time</li><li> We chose higher quality tests over quick and simple tests</li></ul></ul>'
  },
  {
    "header":"What's Next?",
    "body" : '<li>Create a mobile application to be used on mobile phones and tablets</li><li>Integrate 3rd party payment APIs</li><li>Add support for multiple parking lots</li><li>Integrate a DBMS such as PostgreSQL to be ran on a server</li><li>Follow a client server architecture</li>'
  },
  {
    "header":"Link",
    "body" : 'See the <a href="https://github.com/BallenAlain/Parking-System-Project" target="_blank" style="text-decoration: none;">GitHub repository</a>'
  },
]
</script>

<template>
  <div class="container">
    <ProjectLearnMore :data="data" />
  </div>
</template>
