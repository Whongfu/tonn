<template>
    <div>
        首页
    </div>
</template>

<script setup>
import NextLoading from '@/utils/loading'
NextLoading.start()
setTimeout(() => {
    NextLoading.done()
}, 500);
</script>

<style lang="scss" scoped>

</style>