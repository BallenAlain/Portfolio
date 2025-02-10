<script lang="ts">
import { defineComponent } from 'vue'

interface skills {
  id: number
  link: string
  delay: number
}

document.addEventListener('scroll', () => {
  const pageTop: number = window.scrollY
  const pageBottom: number = pageTop + window.innerHeight
  const tags: NodeListOf<HTMLElement> = document.querySelectorAll('.tag')

  tags.forEach((tag) => {
    if (tag.getBoundingClientRect().top + pageTop < pageBottom) {
      tag.classList.add('visible')
    } else {
      tag.classList.remove('visible')
    }
  })
})

export default defineComponent({
  name: 'ExperienceCard',
  props: {
    company: {
      type: String,
      required: true,
      default: 'n/a',
    },
    product: {
      type: String,
      required: true,
      default: 'n/a',
    },
    productDetails: {
      type: String,
      required: true,
      default: 'n/a',
    },
    imagePath: {
      type: String,
      required: true,
      default: 'n/a',
    },
    skillsIcon: {
      type: Array<skills>,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
})
</script>

<template>
  <div class="card" v-motion-fade-visible>
    <div class="card-content" v-motion-slide-visible-top :duration="500" :delay="100">
      <h3 class="product">{{ product }}</h3>
      <h1 class="company">{{ company }}</h1>
      <p class="details">{{ productDetails }}</p>
      <br />
      <!-- see https://devicon.dev/ for icons -->
      <span v-for="skill in skillsIcon" :key="skill.id">
        <img :src="skill.link" height="30" width="30" v-motion-slide-visible-once-left :duration="500"
          :delay="skill.delay" />
        &nbsp;
      </span>
      <br />
      <br />
      <span class="learn-more">
        <span class="translate-link"><router-link :to="path" class="link"> Learn more <v-icon
              name="hi-external-link" /></router-link>
        </span>
      </span>

    </div>
    <div class="image-container" v-motion-slide-visible-left :duration="500" :delay="200">
      <router-link :to="path">
      <img class="image" :src="imagePath" />
    </router-link>
    </div>
  </div>
</template>

<style scoped>
.product {
  font-size: 120em;
}

.details {
  color: var(--text-dark-soft);
}

.company {
  color: var(--alainblue);
  white-space: nowrap;
}

.card {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 2rem;
  padding: 10rem 5%;
  max-height: none;
  opacity: 0;
  transform: translate(0, 10vh);
  transition: all 1s;
  max-width:95vw
}

.card.visible {
  opacity: 1;
  transform: translate(0, 0);
}

.card:last-child {
  padding: 8rem 5%;
}

.card-content {
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  text-align: left;

}

.card-content h1 {
  font-size: clamp(1.0rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
}

.card-content h3 {
  font-size: clamp(0.4rem, 3vw, 1.6rem);
}

.card-content p {
  font-size: clamp(0.3rem, 2vw, 1rem);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.learn-more {
  display: inline-block;
  text-decoration: none;
}

.link {
  color: var(--vt-c-black-soft);
  position: relative;
  text-decoration: none;
  transition: transform 0.3s ease;
  padding-bottom: 3px;
  font-size: clamp(0.6rem, 2vw, 1.3rem);
  background-image: linear-gradient(to right, var(--text-dark-soft) 0%, var(--text-dark-soft) 100%);
  background-size: 0% 2px;
  background-position: left bottom;
  background-repeat: no-repeat;
  transition: background-size 0.3s ease-in-out, padding-left 0.5s ease;
}

.link:hover {
  background-size: 100% 2px;
  padding-left: 10px;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
}

.image-container {
  max-width: 600px;
  height: auto;
  padding: 1rem;
  cursor: pointer;
}

.image {
  min-width: 600px;
  max-height: 400px;
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.image:hover {
  transform: scale(1.02);
}

@media (max-width: 1250px) {
  .card {
    flex: 1 1 50%;
    max-width: 80%;
    padding: 8rem 5%;
    padding-bottom: 15rem;
    flex-wrap: nowrap;
  }

  .card-content {
    padding: 1rem;
  }

  .image {
    flex: 1 1 45%;
    min-width: 350px;
    min-height: 300px;
  }

  .learn-more {
    font-size: 1rem;
  }

  .company {
    color: var(--alainblue);
    white-space: wrap;
  }
}

@media (max-width: 825px) {
  .card {
    flex-direction: column;
    align-items: center;
    padding: 5rem 5%;
    gap: 1rem;
  }

  .card-content {
    text-align: center;
    padding: 1rem;
  }

  .image-container {
    order: -1;
  }

  .skills-container {
    justify-content: center;
  }

  .image {
    min-height: 200px;
    object-fit: contain;
  }
}

@media (max-width: 480px) {
  .card {
    padding: 3rem 5%;
  }

  .card-content h1 {
    font-size: 1.8rem;
  }

  .card-content h3 {
    font-size: 1.3rem;
  }

  .learn-more {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }

  .image {
    min-width:200px;
  }
}

@media (min-height: 960px) {
  .card:last-child {
    padding-bottom: 30vh;
  }
}
</style>
