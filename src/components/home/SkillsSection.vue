<script lang="ts">
import { defineComponent } from 'vue';

type IconMap = {
  languages: string;
  fullstack: string;
  infrastructure: string;
  tools: string;
};

export default defineComponent({
  name: 'SkillsSection',
  props: {
    skills: {
      type: Object as () => ({
        languages: string[],
        fullstack: string[],
        infrastructure: string[],
        tools: string[]
      }),
      required: true,
      default: () => ({
        frontend: [],
        backend: [],
        infrastructure: [],
        tools: []
      })
    }
  },
  setup() {
    const icons: IconMap = {
        languages: "ai-ideas-repec",
        fullstack: "fa-code",
        infrastructure: "oi-codespaces",
        tools: "fa-tools"
    };
    return { icons };
  }
});
</script>

<template>
    <section class="skills-section">
      <div class="skills-header">
        <h2 class="section-title">Expertise</h2>
      </div>
  
        <div class="skills-container">
        <div 
          v-for="(categorySkills, categoryName) in skills" 
          :key="categoryName" 
          class="skill-category"
        >
          <h3 class="category-title"><v-icon :name="icons[categoryName]" scale="1.5" fill="#4b7ced"/> {{ categoryName }}</h3>
          <div class="skills-grid">
            <div 
              v-for="(skill, index) in categorySkills" 
              :key="index" 
              class="skill-item"
            >
              {{ skill }}
            </div>
          </div>
        </div>

      </div>
      
    </section>
  </template>
  
  <style scoped>
  .skills-section {
    padding-top:6rem;
    padding-bottom: 6rem;
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .skills-header {
    width: 100%;
  }
  
  .section-title {
  font-size: 2.5rem;
  text-align: center;
  position: relative;
  min-height: 0rem;
  max-height: 3.4rem;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 3em; /* Adjust width to match text */
  height: 3px;
  bottom: 0;
  background: linear-gradient(
    to right,
    var(--alainblue) 15%,
    transparent 15%,
    transparent 27%,
    var(--alainblue) 27%
  );
  border-radius: 2px;
}

  
  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:8em;
  }

  .skills-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-left: 1rem; /* Align with header text */
  }
  
  .skill-category {
    width: 100%;
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
  }
  
  .category-title {
    text-transform: capitalize;
    text-align: left;
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    color: var(--vt-c-black-soft);
    padding-bottom: 0.5rem;
    position: relative;
    display: block;
    width: 100%;
  }
  
  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .skill-item {
    background: var(--vt-c-white-soft);
    padding: 0.1rem 1.2rem;
    border-radius: 20px;
    font-weight: 500;
    color: var(--alainblue-dark-20);
    background: var(--alainblue-light-30);
    transition: all 0.3s ease;
    cursor: default;
    white-space: nowrap;
  }
  
  .skill-item:hover {
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    .content {
        visibility: hidden;
    }

    .skills-section {
      padding: 2rem 0;
      max-width: 95%;
    }
  
    .section-title {
      font-size: 2rem;
      padding-left: 0.5rem;
    }
  
    .skills-container {
      padding-left: 0.5rem;
    }
  
    .skill-category {
      padding: 1rem;
    }
  
    .skill-item {
      padding: 0.6rem 1rem;
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 480px) {
    .skills-grid {
      gap: 0.8rem;
    }
    
    .skill-item {
      flex: 1 0 calc(50% - 0.8rem);
      text-align: center;
    }
  }
  </style>