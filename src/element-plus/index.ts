import { App } from 'vue'
import ElementPlus from 'element-plus'

export const setupElplus = (app: App<Element>) => {
    app.use(ElementPlus)
}