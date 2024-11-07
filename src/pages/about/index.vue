<template>
  <div class="bnanr">
    <div class="top">
      <div class="top_top">
        <img src="../../../public/images/bj.webp" alt="">
      </div>
      <div class="top_bottom">
        <img class="avatar" src="../../../public/images/小白猫.jpg" alt="">
        <div class="title">
          <p>小蔡</p>
          <p>我的第一个博客,面向全栈ai选手。</p>
        </div>
      </div>
    </div>
    <div class="content">
      <p>欢迎来到 {小蔡} 博客！</p>
      <p>我也没啥想说的就祝愿大家开开心心的，好好学习，赚大钱。写这个博客的目的
        就是为了巩固自己的前端基础也算全程独立完成的吧基本上所有常用的功能都写了有时间肯定是要完善的。
      </p>
      <p>
        这个博客是基于 Vue3 + TypeScript + Vite + Element Plus + Pinia + Vue Router
        搭建的，前端页面使用了 Element Plus 组件库，后端使用了 Node.js + Express 框架，数据库使用了 MySQL。(没有后端全是gpt说的)
      </p>
      <div class="mie">
        <h2>这里可以找到我:</h2>
        <p>github: <a style="color: #c23e8d;" href="https://github.com/1caihaoyuan">HaoyuanCai</a> </p>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup name=''>

</script>

<style scoped>
.bnanr {
  width: 99%;
  margin: auto;
  background-color: #fff;

  .top {
    .top_top {
      height: 300px;
      overflow: hidden;

      img {
        position: relative;
        width: 100%;
        height: 300px;
      }
    }

    .top_bottom {
      display: flex;
      margin-left: 20px;
      align-items: center;

      .avatar {
        position: absolute;
        width: 12%;
        margin-right: 30px;
        border-radius: 50%;
        border: 3px solid #fff;
      }

      .title {
        padding-left: 25%;

        p:nth-child(1) {
          font-size: 25px;
          font-weight: 900;
          padding: 5px 0;
        }

        p:nth-child(2) {
          color: #7f7f7f;
        }
      }
    }
  }

  .content {
    width: 100%;
    margin: 50px 20px;

    p {
      font-size: 16px;
      height: 100%;
      line-height: 28px;
      width: 95%;
    }

    .mie {
      margin-top: 20px;

      h2 {
        font-weight: 900;
        font-size: 23px;
        margin-bottom: 5px;
      }

      p a {
        text-decoration: none;
      }

      p {
        color: #7f7f7f;
        font-size: 16px;
        margin-top: 10px;

        a {
          color: #7f7f7f;
          text-decoration: none;
        }
      }
    }
  }
}
</style>