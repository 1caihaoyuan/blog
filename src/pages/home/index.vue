<template>
  <Carousel_map />
  <Content_block />
</template>

<script lang='ts' setup name=''>
// 引入轮播图组件
import { ref, reactive, onMounted } from 'vue'
import Carousel_map from '../home/Carousel_map/index.vue'
import Content_block from '../../components/Content_block/index.vue'

</script>

<style scoped></style>