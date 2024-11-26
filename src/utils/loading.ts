import { storeLoading } from '@/stores/loading'
const load = storeLoading();
/**
 * 页面全局 Loading
 * @method start 创建 loading
 * @method done 移除 loading
 */
export default {
    // 创建 loading
	start: () => {
        load.setLoading(true)
	},
	// 移除 loading
	done: () => {
		load.setLoading(false)
	},
}