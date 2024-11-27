<template>
    <div>
        首页
    </div>
</template>

<script setup>
import globvar from '@/utils/globvar'
import NextLoading from '@/utils/loading'
NextLoading.start()
setTimeout(() => {
    NextLoading.done()
}, 500);

console.log(111, globvar.VITE_NAME)
</script>

<style lang="scss" scoped>

</style>