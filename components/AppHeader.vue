<template>
  <header class="header">
    <nav class="nav-container">
      <!-- Logo -->
      <NuxtLink to="/" class="logo">眾饕</NuxtLink>

      <!-- Desktop Navigation -->
      <ul class="nav-links desktop-only">
        <li v-for="nav in navs" :key="nav.path">
          <NuxtLink :to="nav.path">
            {{ nav.title }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        class="menu-button mobile-only"
        @click="toggleSidebar()"
        aria-label="切換選單"
      >
        <span class="hamburger"></span>
        <span class="hamburger"></span>
        <span class="hamburger"></span>
      </button>
    </nav>
  </header>
</template>

<script setup>
const useSystemStore = systemStore();
const { toggleSidebar, setNavMenus } = useSystemStore;

// Add scroll effect
const navs = computed(() => useSystemStore.$state.navMenus);
onMounted(() => {
  setNavMenus();
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.95)";
      header.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.background = "rgba(255, 255, 255, 0.9)";
      header.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";
    }
  });
});
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #475569;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #1e293b;
}

.nav-links a::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 100%;
}

/* Mobile Menu Button */
.menu-button {
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
}

.hamburger {
  width: 24px;
  height: 3px;
  background: #475569;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.menu-button:hover .hamburger {
  background: #1e293b;
}

/* Responsive */
.desktop-only {
  display: flex;
}

.mobile-only {
  display: none;
}

@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: flex;
  }

  .nav-container {
    padding: 1rem;
  }
}
</style>
