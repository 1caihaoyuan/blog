<template>
    <!-- 上部分搜索区域 -->
    <search />
    <!-- 下部分分栏区域 -->
    <div class="right-bottom">
        <black class="classify">
            <classify />
        </black>
    </div>
</template>

<script lang='ts' setup name=''>
import { ref, reactive, onMounted } from 'vue'
import search from './search/index.vue'
import classify from './classify/index.vue'
</script>

<style scoped>
.right-bottom {
    .classify {
        width: 100%;
    }
}
</style>