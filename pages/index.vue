<template>
    <div class="home-page">
      <!-- Hero Section -->
      <!-- <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Claude 4</h1>
          <p class="hero-subtitle">AI 的未來已來</p>
          <p class="hero-description">
            體驗前所未有的混合推理模型，結合即時回應與深度思考能力。
          </p>
          <div class="cta-buttons">
            <NuxtLink to="/features" class="btn btn-secondary">探索功能</NuxtLink>
            <NuxtLink to="/docs" class="btn btn-secondary">查看文檔</NuxtLink>
          </div>
        </div>
      </section> -->
      
      <!-- Features Section -->
      <!-- <section class="features">
        <h2 class="section-title">核心特色</h2>
        <div class="features-grid">
          <div class="glass-card">
            <h3>混合推理</h3>
            <p>智能切換即時與深度思考模式</p>
          </div>
          <div class="glass-card">
            <h3>頂級編程</h3>
            <p>世界最佳的 AI 編程助手</p>
          </div>
          <div class="glass-card">
            <h3>工具整合</h3>
            <p>並行使用多種外部工具</p>
          </div>
        </div>
      </section> -->
    </div>
  </template>

  <script setup>
  definePageMeta({
    title: "首頁",
    ["order"]: 1,
  })
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
  }
  
  .hero-content {
    max-width: 800px;
  }
  
  .hero-title {
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 800;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #1e293b 0%, #667eea 50%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .hero-subtitle {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    color: var(--text-secondary);
    margin-bottom: 2rem;
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
    padding: 6rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .section-title {
    text-align: center;
    font-size: clamp(2.5rem, 5vw, 4rem);
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