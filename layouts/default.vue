<template>
    <div class="app-container">
      <!-- Header -->
      <AppHeader @toggle-sidebar="toggleSidebar" />
      
      <!-- Sidebar (mobile only) -->
      <AppSidebar />
      
      <!-- Main Content -->
      <main class="main-content">
        <NuxtPage />
      </main>
      <AppFooter />
      <!-- Background Animation -->
      <div class="bg-animation">
        <div class="floating-circle circle-1"></div>
        <div class="floating-circle circle-2"></div>
        <div class="floating-circle circle-3"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  const { sidebarOpen, toggleSidebar, closeSidebar } = systemStore();
  
  // Close sidebar when clicking outside on mobile
  onMounted(() => {
    document.addEventListener('click', (e) => {
      if (sidebarOpen && !e.target.closest('.sidebar') && !e.target.closest('.menu-button')) {
        closeSidebar()
      }
    })
  })
  </script>
  
  <style scoped>
  .app-container {
    min-height: 100vh;
    position: relative;
  }
  
  .main-content {
    padding-top: 80px; /* Header height */
    min-height: 100vh;
  }
  
  /* Background Animation */
  .bg-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.3;
  }
  
  .floating-circle {
    position: absolute;
    border-radius: 50%;
    animation: float 20s infinite linear;
    opacity: 0.15;
  }
  
  .circle-1 {
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    top: 10%;
    left: 10%;
    animation-duration: 25s;
  }
  
  .circle-2 {
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
    top: 60%;
    right: 20%;
    animation-duration: 30s;
    animation-direction: reverse;
  }
  
  .circle-3 {
    width: 150px;
    height: 150px;
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
    bottom: 20%;
    left: 30%;
    animation-duration: 35s;
  }
  
  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-30px) rotate(120deg); }
    66% { transform: translateY(20px) rotate(240deg); }
    100% { transform: translateY(0px) rotate(360deg); }
  }
  </style>