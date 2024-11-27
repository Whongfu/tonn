<template>
    <el-config-provider>
        <el-container class="layout-container" :style="{ height: `${height}px` }">
            <el-aside class="layout-aside">aside</el-aside>
            <el-scrollbar class="layout-scrollbar">
                <el-header ref="headerRef" class="layout-header">Header</el-header>
                <el-main class="layout-main" :style="{ '--height': (height - 120) + 'px' }" v-loading="load.loading">
                    <RouterView />
                </el-main>
                <el-footer class="layout-footer">Footer</el-footer>
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

const headerRef = ref()

const headerDom = useWindowSize(headerRef.value)

console.log(headerDom.height, headerDom.width, width)

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

<style lang="scss" scoped>
.layout-container {

    .layout-aside {
        width: 210px;
        background-color: cadetblue;
    }

    .layout-scrollbar {
        width: 100%;
    }

    .layout-header {
        background-color: burlywood;
    }

    .layout-main {
        height: var(--height);
    }

    .layout-footer {
        background-color: darkolivegreen;
    }
} 

</style>