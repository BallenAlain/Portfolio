<template>
  <nav class="navbar">
    <div class="nav-content">
      <router-link to="/" class="name">
        <span class="name-box">
          <img src="/assets/ab.png" alt="Logo" width="40" height="40" />
        </span>
        <span class="name">ALAIN BALLEN</span>
      </router-link>

      <div class="nav-links">
        <router-link to="/chat" class="nav-link"> Chat </router-link>
        <router-link to="/about" class="nav-link"> About </router-link>
        <router-link to="/projects" class="nav-link"> Projects </router-link>
      </div>
    </div>
  </nav>
</template>

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
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 500;
  padding-right: 1rem;
  transition: color 0.3s ease;
  font-size: 1rem;
}

.nav-link:hover, .nav-link:focus {
  color: var(--alainblue);
}

.last-name {
  color: #3498db;
}
</style>
