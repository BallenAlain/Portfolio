<script setup lang="ts">
import TypeWriterEffect from '@/components/home/TypeWriterEffect.vue'
import HeroImage from '@/components/home/HeroImage.vue'
import ScrollArrow from '@/components/home/ScrollArrow.vue'
import ExperienceCard from '@/components/home/ExperienceCard.vue'
import jsonData from '@/data/work.json'

const items = jsonData
</script>

<template>
  <main>
    <div class="hero-container">
      <div class="text-image">
        <div class="text-container">
          <h1 class="hero">Hi there! <span class="name">I'm Alain</span></h1>
          <h2>
            <TypeWriterEffect
              :text="`A Software Engineer building tomorrow’s solutions - simplifying the complex.`"
            ></TypeWriterEffect>
          </h2>
          <br />
          <br />
          <h2>
            <a href="https://github.com/BallenAlain" target="_blank"
              ><img class="socials" src="@/assets/github.png" width="30" height="30" /></a
            >&nbsp; &nbsp; &nbsp; &nbsp;
            <a href="https://www.linkedin.com/in/alain-ballen/" target="_blank"
              ><img class="socials" src="@/assets/linkedin.png" width="30" height="30"
            /></a>
          </h2>
        </div>
        <HeroImage />
      </div>
      <a href="#work"><ScrollArrow /></a>
    </div>
    <div class="content-container">
      <section id="work"></section>
      <ExperienceCard
        v-for="work in items"
        :key="work.company"
        :company="work.company"
        :product="work.product"
        :productDetails="work.productDetails"
        :imagePath="work.imagePath"
        :skillsIcon="work.skills"
        :path="work.path"
      />
    </div>
  </main>
</template>

<style>
.hero-container {
  text-align: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 5%;
}

.text-image {
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: center;
 
}

.text-container {
  flex: 1;
  text-align: left;
}

.name {
  color: var(--alainblue);
}

.hero {
  line-height: 1.2;
  min-width: 10em;
  color: var(--text-dark);
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin: 0 0 1rem 0;
}

h2 {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin: 0;
  min-height: 4em;
}

@media (max-width: 1240px) {
  .text-image {
    gap: 3%;
    padding: 0% 5%;
  }

  .hero-container {
    padding-top:20%;
  }

  .hero {
    min-width: 5em;
  }
}

@media (max-width: 868px) {
  .text-image {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
  }

  .hero-image {
    max-width: 400px;
    order: -1;
    margin: 0 auto;
  }

  .text-container {
    text-align: center;
    max-width: 100%;
  }

  h2 {
    min-height: auto;
  }
}

.content-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;
}

html {
  scroll-behavior: smooth;
}
</style>
