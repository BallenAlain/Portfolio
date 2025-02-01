<script setup lang="ts">
import jsonData from '@/data/about-links.json'
import AboutLink from '@/components/about/AboutLink.vue';
import PhotoCollage from '@/components/about/PhotoCollage.vue';

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
          <AboutLink v-for="item in items" :key="item.link" :text="item.text" :name="item.name" :link="item.link" />
        </div>

      </div>
    </div>

    <img class="image" src="/assets/myself.png" width="301" height="460">

  </div>
  <div class="personal">
          <div class="photo-collage">
            <PhotoCollage />
          </div>
          <div>
            <div class="personal-text">
              <h2>Beyond the lines of code, <span class="name">catch me: </span></h2>
            <ul>
              <li><v-icon name="bi-check-all" scale="1.3" fill="#4b7ced"/>&nbsp;In the gym 🏋️</li><br>
              <li><v-icon name="bi-check-all" scale="1.3" fill="#4b7ced"/>Going out for a paddle on an outrigger canoe 🛶</li><br>
              <li><v-icon name="bi-check-all" scale="1.3" fill="#4b7ced"/>Training hard on the water for dragon boat racing 🐲</li><br>
              <li><v-icon name="bi-check-all" scale="1.3" fill="#4b7ced"/>Trying out new food (brand ambassador @torontomunching) 🍣</li><br>
              <li><v-icon name="bi-check-all" scale="1.3" fill="#4b7ced"/>Exploring new places! ✈️</li><br>
            </ul>
            </div>
          </div>
        </div>
</template>

<style scoped>
.about {
  min-height: auto;
  display: flex;
  padding: 5em 10em 0 10em;
  align-items: flex-start;
  gap: 10vw;
  padding-bottom: 10em;
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

.about-link-container {
  display: flex;
  flex-wrap: wrap;
}

.personal {
  display: flex;
  align-items: flex-start;
  gap:20%;
}

.image {
  width: 300px;
  height: auto;
  border-radius: 10px;
}

.personal-text {
  padding-top: 3em;
}

.personal-text h2 {
  white-space: nowrap;
}

.personal-text ul {
  padding: 0;
  list-style-type: none;
}

@media (max-width: 1400px) {
  .about {
    padding: 5em 0 0 0;
  }
  .personal {
    padding-top:5em;
  }
  .personal-text h2 {
  white-space: wrap;
}
.personal {
  display: flex;
  align-items: flex-start;
  gap:8%;
}
}

@media (max-width: 720px) {
  .about {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .about-link-container {
    display: inline-block;
    flex-wrap: wrap;
    gap: 10vw;
  }

  .image {
    order: -1;
  }
  .personal {
    display:flex;
    flex-direction: column;
    max-width:90%;
  }

  .photo-collage {
    width: 100%;
    display: flex;
    justify-content: center; /* Add this */
    margin: 0 auto; /* Add this */
  }
}
</style>