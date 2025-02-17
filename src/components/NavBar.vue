<template>
  <nav class="navbar" :class="{'no-border': isMenuOpen}">
    <div class="nav-content">
      <router-link to="/" class="name">
        <span class="name-box">
          <img src="/assets/ab.png" alt="Logo" width="40" height="40" />
        </span>
        <h1 class="name">ALAIN BALLEN</h1>
      </router-link>

      <!-- Hamburger Menu Button (Mobile) -->
      <button 
        class="hamburger" 
        @click="toggleMenu"
        aria-label="Toggle navigation menu"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <!-- Navigation Links -->
      <div 
        class="nav-links" 
        :class="{ 'active': isMenuOpen }"
        @click="closeMenu"
      >
        <router-link to="/chat" class="nav-link"> <h3>Chat</h3> </router-link>
        <router-link to="/about" class="nav-link"> <h3>About</h3>  </router-link>
        <router-link to="/projects" class="nav-link"> <h3>Projects</h3>  </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: var(--vt-c-white);
  padding: 1rem 0;
  border-bottom: 2px solid #4b7bed7b;
}

.name-box {
  display: inline-block;
  padding-right: 1rem;
  padding-left: 0.5rem;
  margin: 0.5rem 0.2rem 0.1rem 0;
}

.nav-content {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.name {
  display: inline-flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  color: var(--alainblue);
  z-index: 2;
}

.nav-links {
  display: flex;
  gap: 2rem;
  transition: all 0.3s ease;
}

.nav-link {
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 500;
  padding: 0.5rem;
  transition: color 0.3s ease;
  font-size: 1rem;
}

.nav-link:hover, 
.nav-link:focus {
  color: var(--alainblue);
}

/* Mobile Styles */
.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 2;
}

.hamburger-line {
  display: block;
  width: 25px;
  height: 2px;
  background: var(--alainblue);
  margin: 5px 0;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .navbar.no-border {
    border-bottom: none !important;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--vt-c-white);
    border-bottom: 2px solid #4b7bed7b;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: all 0.1s ease;
  }

  .nav-links.active {
    max-height: 500px;
    opacity: 1;
    padding: 1rem;
  }

  .name {
    font-size: 1.2rem;
  }

  .name-box {
    padding-right: 0.5rem;
  }

  .nav-link {
    padding: 0.8rem;
    text-align: center;
    width: 100%;
    
  }
}

@media (max-width: 480px) {
  .name {
    font-size: 1rem;
  }

  .name-box img {
    width: 30px;
    height: 30px;
  }

  .nav-content {
    padding: 0 0.5rem;
  }
}
</style>