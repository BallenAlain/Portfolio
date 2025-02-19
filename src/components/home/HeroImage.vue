<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const heroImage = ref<HTMLImageElement | null>(null)
const isVisible = ref(false)

const handleMouseMove = (event: MouseEvent) => {
  if (!heroImage.value || !isVisible.value) return

  const { clientX, clientY } = event
  const rect = heroImage.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  const deltaX = clientX - centerX
  const deltaY = clientY - centerY
  const moveDistance = 20
  const translateX = (deltaX / rect.width) * moveDistance
  const translateY = (deltaY / rect.height) * moveDistance

  heroImage.value.style.transform = `translate(${translateX}px, ${translateY}px)`
}

const resetImagePosition = () => {
  if (heroImage.value) {
    heroImage.value.style.transform = 'translate(0, 0)'
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      isVisible.value = entry.isIntersecting
      if (!entry.isIntersecting) {
        resetImagePosition()
      }
    })
  },
  { threshold: 0.5 },
)

onMounted(() => {
  if (heroImage.value) {
    observer.observe(heroImage.value)
  }
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseleave', resetImagePosition)
})

onUnmounted(() => {
  if (heroImage.value) {
    observer.unobserve(heroImage.value)
  }
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseleave', resetImagePosition)
})
</script>

<template>
  <img ref="heroImage" src="/assets/animation-hero.gif" alt="Logo" class="hero-image" />
</template>

<style scoped>
.hero-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  transition: transform 0.3s ease;
}

@media (max-width: 1240px) {
  .hero-image {
    max-width: 400px;
  }
}

@media (max-width: 768px) {
  .hero-image {
    max-width: 400px;
    order: -1;
    margin: 0 auto;
  }
}
</style>
