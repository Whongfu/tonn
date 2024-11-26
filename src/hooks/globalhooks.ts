import { useLoading } from '@/stores/loading'

// loading开关
function useGlobLoading() {
    const load = useLoading();
    // 开
    const openLoading = () => {
        load.setLoading(true)
    }
    // 关
    const closeLoading = () => {
        load.setLoading(false)
    }

    return {
        openLoading,
        closeLoading
    }
}

export default {
    install(app) {
      const ghooks = useGlobLoading();
   
      // 添加全局属性
      app.config.globalProperties.$ghooks = ghooks;
    }
}