<template>
  <div class="app-container">
    <!-- Header -->
    <AppHeader @toggle-sidebar="toggleSidebar" />

    <!-- Sidebar (mobile only) -->
    <AppSidebar />
    
    <!-- Main Content -->
    <main class="main-content">
      <div v-if="currentRoute.path !== '/'" class="pageContent">
        {{ currentRoute.meta.title }}
      </div>
      <NuxtPage />
    </main>

    <AppFooter />

    <!-- Dynamic Background -->
    <div class="bg-animation">
      
      <!-- 浮動元素 -->
      <div class="floating-circle circle-1 anim-pulse"></div>
      <div class="floating-circle circle-2 anim-wave"></div>
      <div class="floating-circle circle-3 anim-orbit"></div>
      <div class="floating-circle circle-4 anim-bounce"></div>
      
      <!-- 額外裝飾元素 -->
      <div class="floating-circle circle-5 anim-spiral"></div>
      <div class="floating-circle circle-6 anim-float"></div>
      
    </div>
  </div>
</template>

<script setup>
const { sidebarOpen, toggleSidebar, closeSidebar } = systemStore();
const { currentRoute } = useRouter();
// Close sidebar when clicking outside on mobile
onMounted(() => {
  document.addEventListener("click", (e) => {
    if (
      sidebarOpen &&
      !e.target.closest(".sidebar") &&
      !e.target.closest(".menu-button")
    ) {
      closeSidebar();
    }
  });
});
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  position: relative;
  background-color: var(--background-primary);
}

.main-content {
  padding-top: 52px; /* Apple風格Header高度 */
  min-height: 100vh;
  transition: padding-top var(--transition-smooth);
}

/* Apple風格動態背景 */
.bg-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  opacity: 1;
  pointer-events: none;
  overflow: hidden;
}

/* 浮動圓圈 */
.floating-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.6;
  filter: blur(1px);
  box-shadow: 0 0 15px rgba(245, 158, 11, 0.1);
}

/* 動畫效果選項 */
.anim-pulse {
  animation: pulseFloat 3s infinite ease-in-out;
}

.anim-wave {
  animation: wave 6s infinite ease-in-out;
}

.anim-orbit {
  animation: orbit 8s infinite linear;
}

.anim-bounce {
  animation: bounce 3.5s infinite ease-in-out;
}

.anim-spiral {
  animation: spiral 5s infinite ease-in-out;
}

.anim-float {
  animation: float 12s infinite ease-in-out;
}

.circle-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, rgba(245, 158, 11, 0.1) 40%, rgba(245, 158, 11, 0.03) 70%, transparent 85%);
  top: 5%;
  left: 5%;
}

.circle-2 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(251, 191, 36, 0.18) 0%, rgba(251, 191, 36, 0.09) 50%, rgba(251, 191, 36, 0.03) 70%, transparent 85%);
  top: 40%;
  right: 15%;
}

.circle-3 {
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, rgba(217, 119, 6, 0.08) 40%, rgba(217, 119, 6, 0.03) 70%, transparent 85%);
  bottom: 15%;
  left: 25%;
}

.circle-4 {
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, rgba(245, 158, 11, 0.09) 50%, rgba(245, 158, 11, 0.03) 70%, transparent 85%);
  top: 25%;
  left: 55%;
}

.circle-5 {
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, rgba(251, 191, 36, 0.1) 40%, rgba(251, 191, 36, 0.03) 70%, transparent 85%);
  top: 70%;
  right: 10%;
}

.circle-6 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(217, 119, 6, 0.12) 0%, rgba(217, 119, 6, 0.06) 50%, rgba(217, 119, 6, 0.02) 75%, transparent 90%);
  top: 15%;
  right: 35%;
}

/* 網格覆蓋層 */
.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.06;
  background-image: 
    linear-gradient(rgba(245, 158, 11, 0.2) 1px, transparent 1px),
    linear-gradient(90deg, rgba(245, 158, 11, 0.2) 1px, transparent 1px);
  background-size: 80px 80px;
  animation: gridMove 40s linear infinite;
}

/* 光線效果 */
.light-beam {
  position: absolute;
  opacity: 0.08;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(245, 158, 11, 0.4) 50%, 
    transparent 100%);
  animation: lightSweep 20s ease-in-out infinite;
}

.beam-1 {
  width: 3px;
  height: 100%;
  left: 15%;
  animation-delay: 0s;
  filter: blur(1px);
}

.beam-2 {
  width: 2px;
  height: 100%;
  right: 25%;
  animation-delay: -10s;
  animation-duration: 25s;
  filter: blur(0.5px);
}

/* 動畫定義 */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
  }
  25% {
    transform: translateY(-30px) translateX(20px) rotate(90deg) scale(1.05);
  }
  50% {
    transform: translateY(-15px) translateX(-25px) rotate(180deg) scale(0.95);
  }
  75% {
    transform: translateY(20px) translateX(15px) rotate(270deg) scale(1.02);
  }
}

@keyframes pulseFloat {
  0%, 100% {
    transform: scale(1) translateY(0px);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.15) translateY(-8px);
    opacity: 0.7;
  }
}

@keyframes wave {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
  }
  25% {
    transform: translateY(-15px) translateX(12px) rotate(45deg) scale(1.08);
  }
  50% {
    transform: translateY(-8px) translateX(-18px) rotate(90deg) scale(0.95);
  }
  75% {
    transform: translateY(12px) translateX(8px) rotate(135deg) scale(1.05);
  }
}

@keyframes orbit {
  0% {
    transform: rotate(0deg) translateX(35px) rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(90deg) translateX(35px) rotate(-90deg) scale(1.1);
  }
  50% {
    transform: rotate(180deg) translateX(35px) rotate(-180deg) scale(0.9);
  }
  75% {
    transform: rotate(270deg) translateX(35px) rotate(-270deg) scale(1.05);
  }
  100% {
    transform: rotate(360deg) translateX(35px) rotate(-360deg) scale(1);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0px) scale(1);
    animation-timing-function: ease-out;
    opacity: 0.5;
  }
  25% {
    transform: translateY(-25px) scale(1.12);
    animation-timing-function: ease-in;
    opacity: 0.7;
  }
  50% {
    transform: translateY(-12px) scale(0.9);
    animation-timing-function: ease-out;
    opacity: 0.6;
  }
  75% {
    transform: translateY(-6px) scale(1.06);
    opacity: 0.65;
  }
}

@keyframes spiral {
  0% {
    transform: rotate(0deg) translateX(0px) translateY(0px) scale(1);
  }
  25% {
    transform: rotate(90deg) translateX(15px) translateY(-15px) scale(1.08);
  }
  50% {
    transform: rotate(180deg) translateX(0px) translateY(-30px) scale(0.92);
  }
  75% {
    transform: rotate(270deg) translateX(-15px) translateY(-15px) scale(1.05);
  }
  100% {
    transform: rotate(360deg) translateX(0px) translateY(0px) scale(1);
  }
}

@keyframes gradientShift {
  0%, 100% {
    transform: translateX(-15%) translateY(-15%) rotate(0deg);
  }
  25% {
    transform: translateX(5%) translateY(-5%) rotate(45deg);
  }
  50% {
    transform: translateX(15%) translateY(15%) rotate(180deg);
  }
  75% {
    transform: translateX(-5%) translateY(5%) rotate(270deg);
  }
}

@keyframes pulseGradient {
  0%, 100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.15;
  }
  50% {
    transform: scale(1.3) rotate(180deg);
    opacity: 0.08;
  }
}

@keyframes gridMove {
  0% {
    transform: translateX(0) translateY(0);
  }
  100% {
    transform: translateX(80px) translateY(80px);
  }
}

@keyframes lightSweep {
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  10% {
    opacity: 0.08;
  }
  90% {
    opacity: 0.08;
  }
  100% {
    transform: translateX(calc(100vw + 200px));
    opacity: 0;
  }
}

/* 響應式優化 */
@media (max-width: 768px) {
  .bg-animation {
    opacity: 0.8;
  }
  
  .floating-circle {
    filter: blur(2px);
  }
  
  .grid-overlay {
    opacity: 0.04;
    background-size: 60px 60px;
  }
  
  .light-beam {
    opacity: 0.05;
  }
}
</style>
