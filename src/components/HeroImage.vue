<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const heroImage = ref<HTMLImageElement | null>(null);

const handleMouseMove = (event: MouseEvent) => {
  if (!heroImage.value) return;

  // Get the cursor's position relative to the viewport
  const { clientX, clientY } = event;

  // Get the image's bounding box
  const rect = heroImage.value.getBoundingClientRect();

  // Calculate the center of the image
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Calculate the distance between the cursor and the center of the image
  const deltaX = clientX - centerX;
  const deltaY = clientY - centerY;

  // Move the image slightly towards the cursor
  const moveDistance = 10; // Adjust this value to control the strength of the effect
  const translateX = (deltaX / rect.width) * moveDistance;
  const translateY = (deltaY / rect.height) * moveDistance;

  // Apply the transformation
  heroImage.value.style.transform = `translate(${translateX}px, ${translateY}px)`;
};

const resetImagePosition = () => {
  if (heroImage.value) {
    heroImage.value.style.transform = 'translate(0, 0)';
  }
};

// Add event listeners
onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseleave', resetImagePosition); // Reset when the cursor leaves the screen
});

// Clean up event listeners
onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mouseleave', resetImagePosition);
});
</script>

<template>
    <img ref="heroImage" src="../assets/animation-hero.gif" alt="Logo" class="hero-image" />
</template>

<style scoped>
.hero-image {
  width: 100%;
  max-width: 500px; /* Set a max-width for the image */
  height: auto;
  transition: transform 0.3s ease; /* Smooth transition for the nudge effect */
}

@media (max-width: 1240px) {
    .hero-image {
    max-width: 400px; /* Smaller image for medium screens */
    height: auto;
  }
}

@media (max-width: 768px) {
    .hero-image {
    max-width: 400px; /* Smaller image for mobile */
    order: -1; /* Move image to the top */
    margin: 0 auto; /* Center image horizontally */
  }
}
</style>