<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title logo-yellow-luxury">{{ companyName }}</h1>
        <p class="hero-subtitle">
          <span> 新鮮製造 安心享用 信賴首選 用心製作 </span>
        </p>
        <div class="cta-buttons">
          <NuxtLink to="/news" class="button btn-secondary">最新消息</NuxtLink>
          <NuxtLink to="/products" class="button btn-secondary">產品介紹</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <h4 class="section-title">專業成果</h4>
      <div class="container-food">
        <div class="stats-grid">
          <div v-for="achievement in achievements" class="stat-item animate-bounce-in">
            <span class="stat-number">{{ achievement.statNumber }}</span>
            <p class="stat-label">{{ achievement.statLabel }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2 class="section-title">核心特色</h2>
      <div class="features-grid">
        <div v-for="feature in coreFeatures" :key="feature.title" class="feature-card">
          <div class="feature-cardHeader">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3 class="feature-title">{{ feature.title }}</h3>
          </div>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  title: "首頁",
  ["order"]: 1,
});
const { companyName } = systemStore();
const coreFeatures = [
  {
    title: "食品安全",
    description:
      "從原料採購到包裝出貨每個環節都嚴格把關，嚴格把關每一道製程，確保食品安全無虞",
    icon: "🔰",
  },
  {
    title: "品質承諾",
    description: "堅持選用經過嚴格篩選的優質原料，堅持傳統工藝與現代技術結合",
    icon: "⭐",
  },
  {
    title: "服務專業",
    description:
      "核心團隊由經驗豐富的食品技師、營養師、品管專員組成，平均擁有超過10年食品行業經驗，持續接受專業培訓掌握最新食品科技與營養知識。",
    icon: "🤝",
  },
  {
    title: "健康美味",
    description:
      "營養師設計每道餐點的營養配比，確保營均衡攝取，同時運用專業烹調技術保留食物原始美味，讓健康與美味完美結合",
    icon: "🥗",
  },
  {
    title: "專業團隊",
    description:
      "深度了解客戶獨特需求，提供彈性的客製化服務，特殊飲食需求或口味偏好調整，研發團隊都能靈活調整配方滿足需求",
    icon: "👨‍🍳",
  },
  {
    title: "客製服務",
    description:
      "深度了解客戶需求，提供彈性的客製化服務，無論特殊飲食需求或口味偏好調整，研發團隊都能靈活調整與製程規格滿足需求。",
    icon: "📝",
  },
];
//統計數據
const achievements = [
  {
    statLabel: "年專業經驗",
    statNumber: "20+",
  },
  {
    statLabel: "合作企業",
    statNumber: "500+",
  },
  {
    statLabel: "客戶滿意度",
    statNumber: "98%",
  },
  {
    statLabel: "食安認證",
    statNumber: "100%",
  },
];
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background-color: var(--background-primary);
}

.hero {
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--spacing-3xl) var(--spacing-xl);
}

.hero-content {
  max-width: 800px;
  animation: fadeInUp var(--spring-duration) var(--spring-easing);
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 700;
  margin-bottom: var(--spacing-2xl);
  letter-spacing: -0.025em;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: 400;
  color: var(--text-secondary);
  margin: var(--spacing-4xl) 0;
  letter-spacing: 0.025em;
  word-spacing: 0.25em;
  line-height: 1.5;
}

.hero-description {
  font-size: var(--font-size-body);
  color: var(--text-accent);
  margin-bottom: var(--spacing-5xl);
  line-height: 1.47059;
  letter-spacing: -0.022em;
}

.cta-buttons {
  display: flex;
  gap: var(--spacing-2xl);
  justify-content: center;
  flex-wrap: wrap;
}

.features {
  padding: var(--spacing-6xl) var(--spacing-3xl);
  margin: 0 auto;
  max-width: 1200px;
}

/* Apple風格功能卡片 */
.feature-card {
  background: var(--background-elevated);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-3xl);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-smooth);
  border: 1px solid var(--separator);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--primary-gradient);
  border-radius: var(--radius-sm);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-color);
}

.feature-cardHeader {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-2xl);
}

.feature-icon {
  font-size: var(--font-size-large-title);
  margin-right: var(--spacing-xl);
  padding: var(--spacing-lg);
  background: rgba(245, 158, 11, 0.1);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-sm);
}

.feature-title {
  font-size: var(--font-size-title2);
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  letter-spacing: -0.022em;
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.47059;
  margin: 0;
  font-size: var(--font-size-subheadline);
  letter-spacing: -0.022em;
}

.section-title {
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: var(--spacing-5xl);
  color: var(--text-primary);
  letter-spacing: -0.025em;
  line-height: 1.1;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-3xl);
  margin-top: var(--spacing-5xl);
}

.stats {
  padding: var(--spacing-6xl) var(--spacing-3xl);
  position: relative;
  background-color: var(--background-secondary);
  margin: var(--spacing-6xl) 0;
}

.stats .container-food {
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--spacing-xl);
  margin: 0 auto;
}

.stat-item {
  background: var(--background-elevated);
  padding: var(--spacing-3xl) var(--spacing-xl);
  border-radius: var(--radius-2xl);
  text-align: center;
  position: relative;
  transition: var(--transition-smooth);
  border: 1px solid var(--separator);
  box-shadow: var(--shadow-sm);
}

.stat-item:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-color);
}

.stat-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 30px;
  height: 3px;
  background: var(--primary-color);
  transform: translateX(-50%);
  border-radius: 0 0 var(--radius-sm) var(--radius-sm);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  display: block;
  margin-bottom: var(--spacing-lg);
  color: var(--primary-color);
  letter-spacing: -0.025em;
  line-height: 1;
}

.stat-label {
  font-size: var(--font-size-callout);
  color: var(--text-secondary);
  font-weight: 500;
  letter-spacing: -0.022em;
  margin: 0;
}

/* Apple風格響應式設計 */
@media (max-width: 768px) {
  .hero {
    min-height: 75vh;
    padding: var(--spacing-3xl) var(--spacing-lg);
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-lg);
  }

  .button {
    width: 100%;
    max-width: 280px;
  }

  .features {
    padding: var(--spacing-5xl) var(--spacing-lg);
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }

  .stats {
    padding: var(--spacing-5xl) var(--spacing-lg);
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-lg);
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
