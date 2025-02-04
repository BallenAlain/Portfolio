<template>
  <div class="work-experience">
    <h1 class="page-title">Work Experience</h1>
    <div class="tabs-container">
      <div v-for="(experience, index) in experiences" :key="index" class="tab" :class="{ active: activeTab === index }"
        @click="toggleTab(index)">
        <div class="tab-header">
          <span class="left-side"><span class="role">{{ experience.role }} </span> @ {{ experience.company }}</span>
          <span class="date">{{ experience.date }} &nbsp; <span class="plus">{{ activeTab === index ? '━' : '+'
              }}</span></span>

        </div>
        <div class="tab-content">
          <div>
            <p class="description">{{ experience.description }}</p>
            <ul v-if="experience.responsibilities" class="responsibilities">
              <li v-for="(responsibility, i) in experience.responsibilities" :key="i">
                {{ responsibility }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import professionalExperience from '@/data/professionalExperience.json'

export default defineComponent({
  name: 'WorkExperience',
  setup() {
    const activeTab = ref<number | null>(null);

    const experiences = professionalExperience;

    const toggleTab = (index: number) => {
      activeTab.value = activeTab.value === index ? null : index;
    };

    return {
      experiences,
      activeTab,
      toggleTab,
    };
  },
});
</script>

<style scoped>
.work-experience {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-title {
  font-size: 2.5rem;
  color: var(--vt-c-black-soft);
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
}

.page-title::after {
  content: '';
  position: absolute;
  left: 50%;
  width: 6em;
  height: 3px;
  bottom: 10px;
  transform: translateX(-44%);
  background: linear-gradient(to right,
      var(--alainblue) 40%,
      transparent 40%,
      transparent 47%,
      var(--alainblue) 47%);
  border-radius: 2px;
}

.tabs-container {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  gap: 0.5rem;
}

.tab {
  background-color: var(--vt-c-white-soft);
  border-radius: 15px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.tab-header {
  padding: 1.5rem 2rem;
  background-color: var(--alainblue-light-40);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 72px;
}

.tab-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.tab.active .tab-content {
  grid-template-rows: 1fr;
}

.tab-content>div {
  overflow: hidden;
}

.tab:hover {
  transform: translateX(-3px);
}

.description {
  color: var(--text-dark);
  margin: 1rem 2rem;
  line-height: 1.6;
}

.responsibilities {
  padding: 0 2rem 2rem;
  margin: 0;
  list-style: none;
}

.responsibilities li {
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1.5rem;
}

.responsibilities li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--alainblue);
  font-weight: bold;
}

.left-side {
  font-weight: bold;
}

.role {
  font-weight: bold;
  color: var(--alainblue-dark-20);
}

.plus {
  font-weight: bold;
}

@media (max-width: 768px) {
  .tab-header {
    padding: 1rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .left-side {
    font-size: 1.1rem;
  }

  .description,
  .responsibilities {
    padding: 0 1.5rem 1.5rem;
  }
}
</style>