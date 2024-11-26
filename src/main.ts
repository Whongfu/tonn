import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import '@/theme/index.scss' // 主题样式
import { setupElplus } from './element-plus'
import { setupRouter } from './router'
import { setupPinia } from './stores'

const setupApp = () => {
    const app = createApp(App)

    // 注入 element-plus
    setupElplus(app)

    // 注入 router
    setupRouter(app)

    // 注入 pinia
    setupPinia(app)

    app.mount('#app')
}

setupApp()
