<template>
    <el-config-provider>
        <el-container>
            <el-aside width="200px">aside</el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main><RouterView /></el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-config-provider>
</template>

<script setup></script>

<style lang="scss" scoped></style>