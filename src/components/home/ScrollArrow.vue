<template>
  <div class="container">
    <i class="arrow down"></i>
  </div>
</template>
<style scoped>
.container {
  transition: transform 0.3s ease;
  display: inline-block; 
  line-height: 0;
  padding: 0;
  margin: 0;
}
.container:hover {
  transform: translateY(10px);
}
.arrow {
  border: solid var(--alainblue);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 20px;
  cursor: pointer;
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>
