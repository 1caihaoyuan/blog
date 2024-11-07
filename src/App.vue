<template>
  <div class="bgi">
    <el-row class="banr">
      <!-- 左侧导航栏 -->
      <el-col :span="6" class="left">
        <div class="grid-content ep-bg-purple" />
        <Left></Left>
      </el-col>
      <!-- 中间展示组件区域 -->
      <el-col :span="14" class="min">
        <div class="grid-content ep-bg-purple-light" />
        <router-view></router-view>
      </el-col>
      <!-- 右侧搜索 -->
      <el-col class="right" :span="4">
        <div class="grid-content ep-bg-purple" />
        <Right/>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">

</script>


<style scoped lang="scss">
.bgi {
  .banr {
    margin: 20px 150px;
    
    .right {
    width: 400px;
    height: 100%;
    background-color: #fff;
    border-radius: 0 40px 0 0;
    }
  }
}
</style>
