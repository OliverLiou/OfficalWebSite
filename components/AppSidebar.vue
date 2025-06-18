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
/* Backdrop */
.sidebar-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1998;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: -300px;
  width: 300px;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  z-index: 1999;
  transition: left 0.3s ease;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 5px 0 20px rgba(0, 0, 0, 0.1);
}

.sidebar-open {
  left: 0;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.close-button {
  background: none;
  border: none;
  font-size: 2rem;
  color: #475569;
  cursor: pointer;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.close-button:hover {
  background: rgba(0, 0, 0, 0.1);
  color: #1e293b;
}

.sidebar-nav {
  padding: 1rem 0;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  color: #475569;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.nav-item:hover,
.nav-item.router-link-active {
  background: rgba(102, 126, 234, 0.1);
  color: #1e293b;
  border-left-color: #667eea;
}

.nav-icon {
  font-size: 1.2rem;
}

/* Only show on mobile */
@media (min-width: 769px) {
  .sidebar,
  .sidebar-backdrop {
    display: none;
  }
}
</style>
