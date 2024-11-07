<template>
  <el-carousel :interval="5000" arrow="never" autoplay motion-blur="true" height="280px" pause-on-hover
    indicator-position="none">
    <el-carousel-item v-for="item in items" :key="item" class="CutImg">
      <img :src="item.img" alt="" class="w-full h-full">
      <p>{{ item.title }}</p>
    </el-carousel-item>
  </el-carousel>
</template>

<script lang='ts' setup name=''>
const items = [
  {
    img: '../../../public/images/CutImage/1.webp',
    title: '111',
    id: 1
  },
  {
    img: '../../../public/images/CutImage/2.webp',
    title: '222',
    id: 2
  },
  {
    img: '../../../public/images/CutImage/3.webp',
    title: '333',
    id: 3
  },
  {
    img: '../../../public/images/CutImage/4.webp',
    title: '444',
    id: 4
  }
]
</script>

<style scoped>
.el-carousel {}

.CutImg {
  img {
    width: 100%;
    position: absolute;
  }

  p {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 20px;
    padding-left: 20px;
    background-color: #3c3c3c;
    color: #fff;
    font-size: 14px;
    line-height: 20px;
    opacity: 0.5;
  }
}
</style>