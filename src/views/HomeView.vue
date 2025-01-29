<script setup lang="ts">
import TypeWriterEffect from '@/components/TypeWriterEffect.vue';
import HeroImage from '@/components/HeroImage.vue';
import ScrollArrow from '@/components/ScrollArrow.vue';
import ExperienceCard from '@/components/ExperienceCard.vue';
import jsonData from '@/data/work.json';

const items = jsonData;
</script>

<template>
  <main>
    <div class="hero-container">
      <div class="text-image">
      <div class="text-container">
        <h1 class="hero">
          Hi there! <span class="name">I'm Alain</span>
        </h1>
        <h2>
          <TypeWriterEffect :text="`A Software Engineer building tomorrow’s solutions - simplifying the complex.`"></TypeWriterEffect>
        </h2>
        <br>
        <br>
        <h2>
          <a href="https://github.com/BallenAlain" target="_blank"
        ><img
          class="socials"
          src="@/assets/github.png"
          width="30"
          height="30"
      /></a>&nbsp; &nbsp; &nbsp; &nbsp;
      <a href="https://www.linkedin.com/in/alain-ballen/" target="_blank"
        ><img
          class="socials"
          src="@/assets/linkedin.png"
          width="30"
          height="30"
      /></a>
        </h2>
      </div>
      <HeroImage />
    </div>
      <a href="#work"><ScrollArrow /></a>
    </div>
    <div class="content-container">
      <section id="work"></section>
      <br><br><br>
      <ExperienceCard v-for="work in items" 
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
  text-align:center;
  align-items: center;
  min-height: 100vh;
  padding-top:5%;
}

.text-image {
  display: flex;
  max-width: 100%;
  align-items: center; /* Vertically center all items */
  justify-content: space-between; /* Space out text and image */
  gap: 5%; /* Use percentage for gap to make it responsive */
  padding: 0% 5% 0% 10%; /* Use percentage for padding */
}

.text-container {
  flex: 1; /* Allow text container to grow and shrink */
  text-align: left;
}

.name {
  color: var(--alainblue);
}

.hero {
  line-height: 1.2;
  min-width: 10em;
  color:var(--text-dark);
  font-size: clamp(2rem, 5vw, 3.5rem); /* Responsive font size */
  margin: 0 0 1rem 0; /* Add margin below h1 to prevent h2 from pushing it up */
}

h2 {
  font-size: clamp(1rem, 2.5vw, 1.5rem); /* Responsive font size */
  margin: 0;
  min-height: 4em; /* Ensure consistent height for h2 */
}


/* Responsive adjustments */
@media (max-width: 1240px) {
  .text-image {
    gap: 3%; /* Reduce gap for medium screens */
    padding: 0% 5%; /* Reduce padding for medium screens */
  }

  .hero {
    min-width: 5em;
  }

}

@media (max-width: 768px) {
  .text-image {
    flex-direction: column; /* Stack vertically on smaller screens */
    text-align: center; /* Center text on smaller screens */
    justify-content: center; /* Center items horizontally */
    gap: 2rem; /* Adjust gap for smaller screens */
    padding: 2rem; /* Reduce padding for smaller screens */
  }

  .hero-image {
    max-width: 400px; /* Smaller image for mobile */
    order: -1; /* Move image to the top */
    margin: 0 auto; /* Center image horizontally */
  }

  .text-container {
    text-align: center; /* Center text on smaller screens */
  }


  h2 {
    min-height: auto; /* Allow h2 to shrink on smaller screens */
  }
}

.content-container {
  width: 100%;
  min-height:100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;
}

html {
  scroll-behavior: smooth;
}
</style>