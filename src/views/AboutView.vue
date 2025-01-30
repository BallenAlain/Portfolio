<template>
  <div class="about">
    <div>
      <h1>Meet <span class="name">Alain</span></h1>
      <div class="about-content">
        <p>coding shizz</p>
        <p>check out my resume!</p>
      <br>
      <p>Beyond the lines of code, <span class="name">catch me: </span>
        <ul>
          <li>In the gym 🏋️</li>
          <li>Going out for a paddle on an outrigger canoe 🛶</li>
          <li>Training hard on the water for dragon boat racing 🐲</li>
          <li>Trying out new food (brand ambassador for @torontomunching) 🍣</li>
          <li>Exploring new places! ✈️</li>
        </ul>
        </p>
      </div>
    </div>
    
    <img src="../assets/myself.png" width="601" height="967">
    
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  padding: 5em 0 0 2em;
  align-items: flex-start;
  gap: 20vw;
}

.about h1 {
  white-space: nowrap;
  font-size: 3rem;
}

.about-content {
  white-space: wrap;
}
</style>