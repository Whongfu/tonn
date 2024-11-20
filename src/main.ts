import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'element-plus/dist/index.css'
import { setupElplus } from './element-plus'
import { setupRouter } from './router'

const setupApp = () => {
    const app = createApp(App)

    // 注入 element-plus
    setupElplus(app)
    
    // 注入 router
    setupRouter(app)

    app.mount('#app')
}

setupApp()
