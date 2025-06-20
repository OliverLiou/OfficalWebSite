<template>
  <header class="header">
    <nav class="nav-container">
      <!-- Logo -->
      <NuxtLink to="/" class="logo-yellow-luxury">{{ companyName }}</NuxtLink>

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
const { toggleSidebar, setNavMenus, companyName } = useSystemStore;

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
  background: rgba(251, 251, 253, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid var(--separator);
  transition: var(--transition-smooth);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg) var(--spacing-3xl);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
}

.nav-links {
  display: flex;
  gap: var(--spacing-4xl);
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-links a {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 400;
  font-size: var(--font-size-body);
  letter-spacing: -0.022em;
  transition: var(--transition-smooth);
  position: relative;
  padding: var(--spacing-sm) 0;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--primary-color);
}

.nav-links a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width var(--transition-smooth);
  border-radius: var(--radius-xs);
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 100%;
}

/* Apple風格行動選單按鈕 */
.menu-button {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  background: none;
  border: none;
  padding: var(--spacing-sm);
  cursor: pointer;
  border-radius: var(--radius-md);
  transition: var(--transition-smooth);
}

.menu-button:hover {
  background-color: var(--background-hover);
}

.hamburger {
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  border-radius: var(--radius-xs);
  transition: var(--transition-smooth);
}

.menu-button:hover .hamburger {
  background: var(--primary-color);
}

/* 響應式設計 */
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
    padding: var(--spacing-lg) var(--spacing-xl);
    height: 44px;
  }
}
</style>
