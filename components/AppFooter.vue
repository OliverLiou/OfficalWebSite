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
  border-top: 1px solid var(--border-light);
  margin-top: 4rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 3rem;
  padding: 4rem 0;
}

.footer-section h3,
.footer-section h4 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: 600;
}

.footer-section h3 {
  font-size: 1.5rem;
  color: var(--primary-color);
}

.footer-section h4 {
  font-size: 1.1rem;
}

.footer-logo p {
  color: var(--text-accent);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.footer-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 280px;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--background-card);
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: 1px solid var(--border-light);
}

.social-links a:hover {
  background-color: var(--primary-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.footer-links a:hover,
.footer-links a.router-link-active {
  color: var(--primary-color);
}

.footer-bottom {
  border-top: 1px solid var(--border-light);
  padding: 2rem 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom-content p {
  color: var(--text-accent);
  font-size: 0.9rem;
  margin: 0;
}

.footer-bottom-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.9rem;
}

.footer-bottom-links span {
  color: var(--text-accent);
}

.language-selector {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.language-selector:hover {
  color: var(--primary-color);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-top {
    grid-template-columns: 2fr 1fr 1fr;
    gap: 2rem;
  }

  .footer-section:nth-child(4),
  .footer-section:nth-child(5) {
    grid-column: 2 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .footer-container {
    padding: 0 1rem;
  }

  .footer-top {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 0;
  }

  .footer-section:nth-child(4),
  .footer-section:nth-child(5) {
    grid-column: 1;
    display: block;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .social-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-top {
    padding: 2rem 0;
  }

  .social-links a {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
}
</style>
