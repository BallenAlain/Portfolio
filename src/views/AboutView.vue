<script setup lang="ts">
import jsonData from '@/data/about-links.json'
import AboutLink from '@/components/about/AboutLink.vue';
import PhotoCollage from '@/components/about/PhotoCollage.vue';

const items = jsonData
</script>

<template>
  <div class="about">
    <div>
      
      <div class="about-content">
        <h1>Hi, I'm <span class="name">Alain</span></h1>
        <p>A recent Software Engineering graduate from York University, eager to start a career in software
          development.</p><br>
          <p>
          With a strong foundation in backend development, I am passionate about creating secure and
          scalable software leveraging LLM tools.
          I thrive on simplifying common workflows and delivering solutions that make an impact.</p><br>
        <p>While I excel in backend development, I am also eager about exploring full-stack development and
          expanding my expertise.
          </p><br>
        <br>
        <h1 class="connect">Lets connect!</h1>
        <div class="about-link-container">
          <AboutLink v-for="item in items" :key="item.link" :text="item.text" :name="item.name" :link="item.link" /><br><br>
          
        </div>
        (scroll down<v-icon name="fa-angle-double-down" />)
      </div>
    </div>

    <img class="image" src="/assets/myself.png" >

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
  flex-direction: row;
  padding: 5em 20em 10em 20em;
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
  padding-top: 3em;
}

.personal-text h2 {
  white-space: nowrap;
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