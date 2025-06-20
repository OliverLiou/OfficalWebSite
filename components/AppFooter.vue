<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Footer Top -->
      <!-- <div class="footer-top">
          <div class="footer-section">
            <div class="footer-logo">
              <h3>Claude 4</h3>
              <p>AI 的未來已來</p>
            </div>
            <p class="footer-description">
              體驗前所未有的混合推理模型，結合即時回應與深度思考能力。
            </p>
            <div class="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div>
  
          <div class="footer-section">
            <h4>產品</h4>
            <ul class="footer-links">
              <li><NuxtLink to="/features">功能特色</NuxtLink></li>
              <li><NuxtLink to="/pricing">價格方案</NuxtLink></li>
              <li><NuxtLink to="/api">API 文檔</NuxtLink></li>
              <li><NuxtLink to="/integrations">整合服務</NuxtLink></li>
            </ul>
          </div>
  
          <div class="footer-section">
            <h4>支援</h4>
            <ul class="footer-links">
              <li><NuxtLink to="/docs">使用說明</NuxtLink></li>
              <li><NuxtLink to="/help">幫助中心</NuxtLink></li>
              <li><NuxtLink to="/contact">聯繫我們</NuxtLink></li>
              <li><NuxtLink to="/status">服務狀態</NuxtLink></li>
            </ul>
          </div>
  
          <div class="footer-section">
            <h4>公司</h4>
            <ul class="footer-links">
              <li><NuxtLink to="/about">關於我們</NuxtLink></li>
              <li><NuxtLink to="/careers">職業機會</NuxtLink></li>
              <li><NuxtLink to="/blog">部落格</NuxtLink></li>
              <li><NuxtLink to="/news">新聞動態</NuxtLink></li>
            </ul>
          </div>
  
          <div class="footer-section">
            <h4>法律</h4>
            <ul class="footer-links">
              <li><NuxtLink to="/privacy">隱私政策</NuxtLink></li>
              <li><NuxtLink to="/terms">服務條款</NuxtLink></li>
              <li><NuxtLink to="/cookies">Cookie 政策</NuxtLink></li>
              <li><NuxtLink to="/security">安全政策</NuxtLink></li>
            </ul>
          </div>
        </div> -->

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p>&copy; 2025 {{ companyName }} 版權所有</p>
          <div class="footer-bottom-links">
            <span>台灣 🇹🇼</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { companyName } = systemStore();
</script>

<style scoped>
.footer {
  background-color: var(--background-secondary);
  border-top: 1px solid var(--separator);
  margin-top: var(--spacing-6xl);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-3xl);
}

.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: var(--spacing-5xl);
  padding: var(--spacing-6xl) 0;
}

.footer-section h3,
.footer-section h4 {
  color: var(--text-primary);
  margin-bottom: var(--spacing-xl);
  font-weight: 600;
  letter-spacing: -0.022em;
}

.footer-section h3 {
  font-size: var(--font-size-title2);
  color: var(--primary-color);
}

.footer-section h4 {
  font-size: var(--font-size-title3);
}

.footer-logo p {
  color: var(--text-secondary);
  font-size: var(--font-size-footnote);
  margin-bottom: var(--spacing-xl);
}

.footer-description {
  color: var(--text-secondary);
  line-height: 1.47059;
  margin-bottom: var(--spacing-3xl);
  max-width: 280px;
  font-size: var(--font-size-subheadline);
}

.social-links {
  display: flex;
  gap: var(--spacing-lg);
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: var(--background-elevated);
  border-radius: var(--radius-xl);
  text-decoration: none;
  font-size: var(--font-size-title3);
  transition: var(--transition-smooth);
  border: 1px solid var(--separator);
}

.social-links a:hover {
  background-color: var(--primary-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-color);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: var(--spacing-md);
}

.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: var(--font-size-subheadline);
  transition: var(--transition-smooth);
  letter-spacing: -0.022em;
}

.footer-links a:hover,
.footer-links a.router-link-active {
  color: var(--primary-color);
}

.footer-bottom {
  border-top: 1px solid var(--separator);
  padding: var(--spacing-3xl) 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-xl);
}

.footer-bottom-content p {
  color: var(--text-secondary);
  font-size: var(--font-size-footnote);
  margin: 0;
  letter-spacing: -0.022em;
}

.footer-bottom-links {
  display: flex;
  align-items: center;
  gap: var(--spacing-2xl);
  font-size: var(--font-size-footnote);
}

.footer-bottom-links span {
  color: var(--text-secondary);
}

.language-selector {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition-smooth);
  letter-spacing: -0.022em;
}

.language-selector:hover {
  color: var(--primary-color);
}

/* Apple風格響應式設計 */
@media (max-width: 1024px) {
  .footer-top {
    grid-template-columns: 2fr 1fr 1fr;
    gap: var(--spacing-4xl);
  }

  .footer-section:nth-child(4),
  .footer-section:nth-child(5) {
    grid-column: 2 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-4xl);
  }
}

@media (max-width: 768px) {
  .footer-container {
    padding: 0 var(--spacing-xl);
  }

  .footer-top {
    grid-template-columns: 1fr;
    gap: var(--spacing-4xl);
    padding: var(--spacing-5xl) 0;
  }

  .footer-section:nth-child(4),
  .footer-section:nth-child(5) {
    grid-column: 1;
    display: block;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-xl);
  }

  .social-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-top {
    padding: var(--spacing-4xl) 0;
  }

  .social-links a {
    width: 40px;
    height: 40px;
    font-size: var(--font-size-body);
  }
}
</style>
