<script setup lang="ts">
import TypeWriterEffect from '../components/TypeWriterEffect.vue';
</script>

<template>
  <main>
    <div class="hero-container">
      <div class="text-container">
        <h1 class="hero">
          Hi there! <span class="name">I'm Alain</span>
        </h1>
        <h2>
          <TypeWriterEffect :text="`A software engineer looking to create impactful software.`"></TypeWriterEffect>
        </h2>
      </div>
      <img src="../assets/animation-hero.gif" alt="Logo" class="hero-image" />
    </div>
  </main>
</template>

<style>
.hero-container {
  display: flex;
  max-width: 100%;
  align-items: center; /* Vertically center all items */
  justify-content: space-between; /* Space out text and image */
  gap: 5%; /* Use percentage for gap to make it responsive */
  padding: 5% 10%; /* Use percentage for padding */
}

.text-container {
  flex: 1; /* Allow text container to grow and shrink */
  text-align: left;
}

.name {
  color: #4b7ced;
}

.hero {
  line-height: 1.2;
  font-size: clamp(2rem, 5vw, 3.5rem); /* Responsive font size */
  margin: 0 0 1rem 0; /* Add margin below h1 to prevent h2 from pushing it up */
}

h2 {
  font-size: clamp(1rem, 2.5vw, 1.5rem); /* Responsive font size */
  margin: 0;
  min-height: 4em; /* Ensure consistent height for h2 */
}

.hero-image {
  width: 100%;
  max-width: 500px; /* Set a max-width for the image */
  height: auto;
}

/* Responsive adjustments */
@media (max-width: 1240px) {
  .hero-container {
    gap: 3%; /* Reduce gap for medium screens */
    padding: 5% 5%; /* Reduce padding for medium screens */
  }

  .hero-image {
    max-width: 350px; /* Smaller image for medium screens */
  }
}

@media (max-width: 768px) {
  .hero-container {
    flex-direction: column; /* Stack vertically on smaller screens */
    text-align: center; /* Center text on smaller screens */
    justify-content: center; /* Center items horizontally */
    gap: 2rem; /* Adjust gap for smaller screens */
    padding: 2rem; /* Reduce padding for smaller screens */
  }

  .hero-image {
    max-width: 200px; /* Smaller image for mobile */
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
</style>