<script setup lang="ts">
import ProjectLearnMore from '@/components/Projects/ProjectLearnMore.vue';

const data = [
  {
    "header":"Project Overview",
    "body" : 'As part of a 24-hour hackathon, me and my team wanted to ease the hassle for those that take prescription drugs. On average, people use 5 or more prescription drugs, everyday. Pillminder keeps track of your prescription medication all within a single platform. It will send you reminders via text, SMS, or email when to take your medication. A simple picture of the prescription medication is all thats needed. The platform will parse the necessary data.'
  },
  {
    "header":"How We Built It",
    "body" : 'The basic flow of the app is as follows: <br><br><em><span style="color:var(--alainblue); display:block; text-align:center;"> <b style="font-weight:bold !important;">Client:</b> send image via http -> <b style="font-weight:bold !important;">Server:</b> parse data -> <b style="font-weight:bold !important;">Client:</b> store data -> <b style="font-weight:bold !important;">Client:</b> display data </span></em><br><ol><li>The user takes a picture of their prescription medication using React Webcam. The image is then uploaded to Firebase and a GCS URL is generated</li><li>Send an HTTP POST request to the server containing the GCS image url</li><li>The server accepts the request and parses the necessary information from the image using the Google Cloud Vision API. A response is generated containing the data as a JSON</li><li>The client retrieves the JSON data from the server and stores the data in Firebase</li><li>The corresponding data is then renderd on the UI and used in conjunction with Twilio API to send the correct reminders</li></ol>'


  },
  {
    "header":"Challenges Faced",
    "body" : '<span style="color:var(--alainblue);">Integrating the Google Cloud Vision API with Firebase</span>: <br><li>I verified that the API is enabled on the Google Cloud console and proper credentials are set</li><li>I then verified that the Firebase Storage security rules are created to ensure correct access</li><li>I added logging and error handling features for proper debugging</li><li>In the end, we\'ve successfully created a resusable module for sending images to the server to be processed by the Google Cloud Vision API using a GCS url to the image</li><span style="color:var(--alainblue);"><br>Implementing SMS services</span>: <br><li>Doing research, we found Twilio API to be the most appriopriate service for their free plan, SMS and email features, and good security features</li><li>We\'ve built a minimal protytype to understand and test the API in a sandbox-like environment</li><li>We incrementally added on to the feature until we fully integrate it successfully</li>'
  },
  {
    "header":"Lessons Learned",
    "body" : '<li>Developing a working prototype within a short period of time</li><li>Collaborate with new people in a remote setting</li><li>Delegating responsibilities to ensure smooth collaboration</li><li>How to integrate Firebase and Google APIs in our projects</li><li>Develop in incremental steps, adding on small changes to already working code</li><li>Applying what I learned in fullstack development and making and creating something impactful for the first time</li>'
  },
  {
    "header":"What's Next?",
    "body" : '<li>Pair with smart home devices (Alexa, Google Home) to send notifications</li><li>Develop a mobile version to be deployed on Google\'s Play Store and Apple\'s App Store'
  },
  {
    "header":"Link",
    "body" : 'See the <a href="https://github.com/CUNY-Hackathon-2021/Pillminder" target="_blank" style="text-decoration: none;">GitHub repository</a>'
  },
]
</script>

<template>
  <div class="container">
    <ProjectLearnMore :data="data" />
  </div>
</template>
