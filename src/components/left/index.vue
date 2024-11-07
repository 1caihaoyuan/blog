<template>
  <!-- 顶部 -->
  <div class="top">
    <!-- 顶部的上班部分 -->
    <div class="top_top">
      <img src="../../../public/images/96821722447836_.pic.jpg" alt="">
      <p>蔡太就是大帅！时不时分享web3交易和代码学习成果！</p>
    </div>
    <!-- 顶部的下半部分 -->
    <div class="top_button">
    </div>
  </div>
  <!-- 导航栏 -->
  <div class="seek">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu default-active="1" class="el-menu-vertical-demo">
          <el-menu-item index="1" @click="$router.push('/')">

            <span class="title">首页</span>
          </el-menu-item>
          <el-menu-item index="2" @click="$router.push('/execise')">
            <span>活动</span>
          </el-menu-item>
          <el-menu-item index="3" @click="$router.push('/link')">
            <span>友链</span>
          </el-menu-item>
          <el-menu-item index="4" @click="$router.push('/study')">
            <span>代码学习</span>
          </el-menu-item>
          <el-menu-item index="5" @click="$router.push('/web3')">
            <span>wbe3</span>
          </el-menu-item>
          <el-menu-item index="6" @click="goQQ()">
            <span>加群</span>
            <TopRight style="margin-left: 2%; width: 15%;" />
          </el-menu-item>
          <el-menu-item index="7" @click="$router.push('./feed')">
            <span>投喂</span>
          </el-menu-item>
          <el-menu-item index="8" @click="$router.push('/about')">
            <span>关于</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
  <!-- 底部 -->
  <div class="button">
    <img src="../../../public/images/小白猫.jpg" alt="">
  </div>
</template>

<script lang='ts' setup name=''>
// 引入图标
import { TopRight } from '@element-plus/icons-vue'
// 创建goQQ方法
const goQQ = () => {
  window.open('https://jq.qq.com/?_wv=1027&k=5XQ4X3kx')
}
</script>

<style scoped lang="scss">
.top {
  width: 100%;
  height: 150px;
  padding: 5px 20px;
  border-radius: 30px 0 0 0;
  border-bottom: 1px solid #ccc;
  background-color: rgba(255, 105, 180, 0.5);

  .top_top {
    display: flex;
    margin-top: 20px;

    img {
      margin-top: 20px;
      width: 25%;
      height: 25%;
      border-radius: 50%;
    }

    p {
      font-size: 20px;
      padding: 10px 0 0 20px;
      line-height: 30px;
    }
  }
}

.seek {
  overflow: auto;
  width: 100%;
  height: 400px;

  .tac {
    .el-menu-item {
      width: 90%;
      margin: 0 auto;
      border-radius: 50px;
      border: 2px solid #fff;
    }

    .el-menu-item:hover {
      color: #FFB6C1;
      background-color: #fff;
      border-color: #FFB6C1;
    }

    .el-menu-item.is-active {
      background-color: #FFB6C1;
      color: #fff;
    }

    span {
      font-size: 20px;
      padding-left: 20px;
    }
  }
}

.button {
  background-color: #fff;

  img {
    margin: 20px 80px;
    width: 50%;
    height: 50%;
  }
}
</style>