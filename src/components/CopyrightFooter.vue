<template>
    <footer class="copyright-footer">
      &copy; {{ new Date().getFullYear() }} Alain Ballen. All rights reserved.
    </footer>
  </template>
  
  <style scoped>
  .copyright-footer {
    position: fixed;
    bottom: 0;
    left: 0rem;
    padding: 1rem 1rem 1rem 2rem;
    font-size: 0.9rem;
    color: var(--copywrite);
    background-color: rgba(255, 255, 255, 0.555);
    z-index: 999;
    width: 100%;
  }
  
  @media (max-width: 768px) {
    .copyright-footer {
      text-align: center;
      padding: 0.8rem;
      font-size: 0.8rem;
    }
  }
  
  @media (max-width: 480px) {
    .copyright-footer {
      padding: 0.6rem;
      font-size: 0.75rem;
    }
  }
  </style>