<template>
  <!-- Backdrop -->
  <div
    v-if="sidebarOpen"
    class="sidebar-backdrop"
    @click="closeSidebar()"
  ></div>

  <!-- Sidebar -->
  <aside class="sidebar" :class="{ 'sidebar-open': sidebarOpen }">
    <div class="sidebar-header">
      <div class="logo-yellow-luxury">{{ companyName }}</div>
      <button
        class="close-button"
        @click="closeSidebar()"
        aria-label="關閉選單"
      >
        ×
      </button>
    </div>

    <nav class="sidebar-nav">
      <ul class="nav-list">
        <li v-for="nav in navs" :key="nav.path">
          <NuxtLink :to="nav.path" @click="closeSidebar()" class="nav-item">
            <span class="nav-icon">{{ nav.title }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
const useSystemStore = systemStore();
const { toggleSidebar, closeSidebar, navMenus, companyName } = useSystemStore;
const sidebarOpen = computed(() => useSystemStore.$state.sidebarOpen);

const navs = computed(() => useSystemStore.$state.navMenus);
</script>

<style scoped>
/* Apple風格背景遮罩 */
.sidebar-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1998;
  opacity: 0;
  animation: fadeIn var(--transition-smooth) ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Apple風格側邊欄 */
.sidebar {
  position: fixed;
  top: 0;
  left: -320px;
  width: 320px;
  height: 100%;
  background: rgba(251, 251, 253, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  z-index: 1999;
  transition: left var(--transition-smooth);
  border-right: 1px solid var(--separator);
  box-shadow: var(--shadow-xl);
}

.sidebar-open {
  left: 0;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-xl) var(--spacing-2xl);
  border-bottom: 1px solid var(--separator);
  height: 88px;
}

.logo {
  font-size: var(--font-size-title2);
  font-weight: 600;
  color: var(--primary-color);
  letter-spacing: -0.022em;
}

.close-button {
  background: none;
  border: none;
  font-size: var(--font-size-title1);
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  transition: var(--transition-smooth);
  font-weight: 300;
}

.close-button:hover {
  background: var(--background-hover);
  color: var(--text-primary);
}

.sidebar-nav {
  padding: var(--spacing-lg) 0;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg) var(--spacing-2xl);
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 400;
  font-size: var(--font-size-body);
  letter-spacing: -0.022em;
  transition: var(--transition-smooth);
  border-left: 3px solid transparent;
  min-height: 44px;
}

.nav-item:hover,
.nav-item.router-link-active {
  background: rgba(245, 158, 11, 0.08);
  color: var(--primary-color);
  border-left-color: var(--primary-color);
}

.nav-icon {
  font-size: var(--font-size-title3);
}

/* Only show on mobile */
@media (min-width: 769px) {
  .sidebar,
  .sidebar-backdrop {
    display: none;
  }
}
</style>
