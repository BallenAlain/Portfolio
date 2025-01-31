<script setup lang="ts">
import jsonData from '@/data/about-links.json'
import AboutLink from '@/components/about/AboutLink.vue';

const items = jsonData
</script>

<template>
  <div class="about">
    <div>
      <h1>Meet <span class="name">Alain</span></h1>
      <div class="about-content">
        <p>I am a recent Software Engineering graduate from York University, eager to start a career in software
          development.
          With a strong foundation in backend development, I honed my skills through hands-on experience in
          building mobile applications,
          interactive dashboards, and tools leveraging Large Language Models (LLMs). Passionate about creating secure,
          scalable, and impactful software,
          I thrive on simplifying common workflows and delivering solutions that make an impact.</p><br>
        <p>While I excel in backend development, I am also eager about exploring full-stack development and
          expanding my expertise. Additionally,
          I am passionate by the world of AI, particularly the applications of LLMs and their potential to transform
          industries.</p><br>
        <p>Driven by curiosity and a commitment to continuous learning, I actively seek new graduate roles
          where I can contribute to
          innovative projects, grow as a developer, and make a meaningful impact in the tech industry.</p>
        <br>
        <br>
        <p class="connect">Lets connect!</p>
        <div class="about-link-container">
          <AboutLink v-for="item in items"
          :key="item.link"
          :text="item.text" 
          :name="item.name" 
          :link="item.link" />
        </div>
        <br><br><hr><br>
        <p>Beyond the lines of code, <span class="name">catch me: </span>
        <ul>
          <li>In the gym 🏋️</li>
          <li>Going out for a paddle on an outrigger canoe 🛶</li>
          <li>Training hard on the water for dragon boat racing 🐲</li>
          <li>Trying out new food (brand ambassador @torontomunching) 🍣</li>
          <li>Exploring new places! ✈️</li>
        </ul>
        </p>
      </div>
    </div>

    <img class="image" src="../assets/myself.png" width="301" height="460">

  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  padding: 5em 0 0 2em;
  align-items: flex-start;
  gap: 20vw;
}

.about h1 {
  white-space: nowrap;
  font-size: 3rem;
}

.connect {
  font-weight: bold;
  font-size: 30px;
}

.about-content {
  white-space: wrap;
}

.about-content a {
  text-decoration: none;
}

.about-link-container{
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 720px) {
  .about {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .about-link-container{
  display: inline-block;
  flex-wrap: wrap;
  gap:10vw;
}
.image{
  order:-1;
  
}
}


</style>