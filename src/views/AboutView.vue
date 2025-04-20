<script setup lang="ts">
import jsonData from '@/data/about-links.json'
import AboutLink from '@/components/about/AboutLink.vue';

const items = jsonData
</script>

<template>
  <div class="about">
      
      <div class="about-content">
        <h1>Hi, I'm <span class="name">Alain</span></h1>
        <p>A recent Software Engineering graduate from York University, eager to start a career in software
          development.</p><br>
          <p>
          With a strong foundation in backend development, I am passionate about creating secure and
          scalable software leveraging LLM tools.
          I thrive on simplifying common workflows and delivering solutions that make an impact.</p><br>
          <p class="current-work">
            Currently working at <a href="https://mpacspark.ca/"><span class="name">MPAC</span></a> as a Junior Systems Developer
          </p><br>
        <div class="personal-text">
              <p>Beyond the lines of code, <span class="name">catch me: </span></p>
            <ul>
              <li><v-icon name="bi-check-all" scale="1.3" fill="#4b7ced"/>&nbsp;In the gym 🏋️</li>
              <li><v-icon name="bi-check-all" scale="1.3" fill="#4b7ced"/>Going out for a paddle on an outrigger canoe 🛶</li>
              <li><v-icon name="bi-check-all" scale="1.3" fill="#4b7ced"/>Training hard on the water for dragon boat racing 🐲</li>
              <li><v-icon name="bi-check-all" scale="1.3" fill="#4b7ced"/>Trying out new food (brand ambassador @torontomunching) 🍣</li>
              <li><v-icon name="bi-check-all" scale="1.3" fill="#4b7ced"/>Exploring new places! ✈️</li><br>
            </ul>
            </div>
        <h1 class="connect">Lets connect!</h1>
        <div class="about-link-container">
          <AboutLink v-for="item in items" :key="item.link" :text="item.text" :name="item.name" :link="item.link" /><br><br>
          
        </div>
      </div>

    <img class="image" src="/assets/myself.png">

  </div>
</template>

<style scoped>
.about {
  min-height: auto;
  display: flex;
  flex-direction: row;
  padding: 5em 15em 0 15em;
  align-items: flex-start;
  gap:20%;
}

.about h1 {
  white-space: nowrap;
  font-size: 3rem;
}

.about-content {
  white-space: wrap;
}

.about-content a {
  text-decoration: none;
  color: inherit;
}

.about-link-container {
  display: flex;
  flex-wrap: wrap;
}

.personal {
  padding: 0 20em;
  display: flex;
  align-items: flex-start;
}

.image {
  width: 400px;
  height: auto;
  border-radius: 20px;
}

.personal-text {
  font-size: clamp(1rem, 3vw, 18px);
}

.personal-text ul {
  padding: 0;
  list-style-type: none;
}

p {
  font-size: 18px;
}

h1{
  font-size: 26px;
}

.current-work {
  font-style: italic;
}

@media (max-width: 1000px) {
  .image {
    order: -1;
  }

  .about {
    flex-direction: column;
    align-items: center;
    padding: 3em 5em;
    text-align: center;
  }

  .personal {
    padding: 3em 5em;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 720px) {
  .about {
    flex-direction: column;
    gap: 1.5em;
    padding: 2em 1em;
    text-align: center;
  }

  .about h1 {
    font-size: 2rem;
  }

  .image {
    width: 90%;
    max-width: 300px;
  }

  .about-link-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .personal {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em 1em;
    text-align: center;
  }

  .personal-text h2 {
    font-size: 1.5rem;
  }

  .personal-text ul {
    text-align: left;
    padding-left: 1em;
  }

  .personal-text ul li {
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>