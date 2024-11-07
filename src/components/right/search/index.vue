<template>
  <div class="search">
    <el-autocomplete
    placeholder="请输入关键词"
    hide-loading="true"
    class="searchInput"
    />
    <el-button class="btn" :icon="Search" round></el-button>
  </div>
</template>

<script lang='ts' setup name=''>
import { ref, reactive, onMounted } from 'vue'
import {
  Search,
} from '@element-plus/icons-vue'
</script>

<style scoped>
.search {
  display: flex;
  margin: 20px;
  width: 200px;

  .searchInput{
    position: absolute;
    width: 200px;
  }

  .btn {
    position: relative;
    right: 30px;
  }
}
</style>