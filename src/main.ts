import { createApp } from 'vue'
import App from './App'
import { setupRouter } from './router'
const app = createApp(App)
const bootstrap = () => {
  // 挂载路由
  setupRouter(app)
  // 页面挂载
  app.mount('#app')
}

bootstrap()
