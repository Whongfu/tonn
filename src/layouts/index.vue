<template>
    <el-config-provider>
        <el-container ref="container">
            <el-aside width="200px">aside</el-aside>
            <el-scrollbar>
                <el-header>Header</el-header>
                <el-main v-loading="load.loading">
                    <RouterView />
                </el-main>
                <el-footer>Footer</el-footer>
            </el-scrollbar>
        </el-container>
    </el-config-provider>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core'
import { onBeforeMount, onUnmounted, ref } from 'vue';
import { storeLoading } from '@/stores/loading'
const load = storeLoading();



const { width, height } = useWindowSize()

// console.log(1111, width, height)

const container = ref()

// 窗口大小
const onLayoutResize = () => {
    if(container.value) {
        console.log(container.value.style = { width: width.value, height: height.value })
    }
}

// 页面加载前
onBeforeMount(()=> {
    onLayoutResize()
    window.addEventListener('resize', onLayoutResize);
})

// 页面卸载时
onUnmounted(()=> {
    window.removeEventListener('resize', onLayoutResize);
})

</script>

<style lang="scss" scoped></style>