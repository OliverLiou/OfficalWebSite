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
}
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  /* background: var(--cream); */
}

.hero-content {
  max-width: 800px;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.8rem);
  font-weight: 400;
  color: #6b7280;
  margin: 2.5rem 0;
  letter-spacing: 2px;
  word-spacing: 8px;
  line-height: 1.8;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-accent);
  margin-bottom: 3rem;
  line-height: 1.8;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.features {
  padding: 3rem 2rem;
  margin: 0 auto;
}

/* Feature Card 樣式 */
.feature-card {
  background: var(--card-gradient);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-light);
  transition: var(--transition-normal);
  border: 1px solid var(--warm-beige);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--primary-gradient);
  border-radius: var(--radius-sm);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-md);
  border-color: var(--border-medium);
}

.feature-cardHeader {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-lg);
}

.feature-icon {
  font-size: var(--font-size-3xl);
  margin-right: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--light-orange);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-light);
}

.feature-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
}

.feature-description {
  color: var(--text-medium);
  line-height: 1.7;
  margin: 0;
}

.section-title {
  text-align: center;
  font-size: clamp(2rem, 4vw, 4rem);
  font-weight: 800;
  margin-bottom: 3rem;
  background: var(--text-secondary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.stats {
  padding: var(--spacing-3xl) 0;
  position: relative;
}

.stats .container-food {
  position: relative;
  z-index: 1;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--spacing-sm);
  max-width: 1000px;
  margin: 0 auto;
}

.stat-item {
  background: var(--white);
  padding: var(--spacing-2xl) var(--spacing-lg);
  border-radius: var(--radius-2xl);
  text-align: center;
  position: relative;
  transition: var(--transition-normal);
  border: 1px solid rgba(217, 119, 6, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06);
}

.stat-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06);
}

.stat-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 40px;
  height: 3px;
  background: var(--primary-color);
  transform: translateX(-50%);
  border-radius: 0 0 var(--radius-sm) var(--radius-sm);
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 700;
  display: block;
  margin-bottom: var(--spacing-sm);
  color: var(--primary-color);
  letter-spacing: -0.02em;
  line-height: 1;
}

.stat-label {
  font-size: var(--font-size-base);
  color: var(--text-medium);
  font-weight: bolder;
  letter-spacing: 0.3px;
  margin-top: 15px;
}

@media (max-width: 768px) {
  .hero {
    min-height: 70vh;
    padding: 1rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 300px;
  }

  .features {
    padding: 4rem 1rem;
  }
}
</style>
