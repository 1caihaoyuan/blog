<template>
  <black>
    <div class="title">分类</div>
    <black class="classify">
      <div class="heading">前端</div>
      <div class="content">
        <ul>
          <li>js</li>
          <li>html/css</li>
        </ul>
      </div>
    </black>
    <black class="classify">
      <div class="heading">后端</div>
      <div class="content">
        <ul>
          <li>node.js</li>
          <li>rust</li>
        </ul>
      </div>
    </black>
    <black class="classify">
      <div class="heading">web3</div>
      <div class="content">
        <ul>
          <li>btc</li>
          <li>山寨</li>
          <li>合约</li>
        </ul>
      </div>
    </black>
    <black class="classify">
      <div class="heading">二次猿</div>
      <div class="content">
        <ul>
          <li>动漫</li>
          <li>h🐰</li>
        </ul>
      </div>
    </black>
  </black>
  <black>
    <div class="title">标签</div>
    <black class="tags">
      <el-check-tag class="tag" :checked="checked5" type="danger">
        动画
      </el-check-tag>
      <el-check-tag class="tag" :checked="checked5" type="danger">
        爱吃大香蕉
      </el-check-tag>
      <el-check-tag class="tag" :checked="checked5" type="danger">
        小孩
      </el-check-tag>
      <el-check-tag class="tag" :checked="checked5" type="danger">
        如果重新来过
      </el-check-tag>
      <el-check-tag class="tag" :checked="checked5" type="danger">
        我要吃肉肉
      </el-check-tag>
      <el-check-tag class="tag" :checked="checked5" type="danger">
        小孩
      </el-check-tag>
    </black>
  </black>
  <black>
    <div class="title">热门文章</div>
    <black>
      /暂无
    </black>
  </black>
  <black>
    <div class="title">精选</div>
    <black>
      /暂无
    </black>
  </black>
</template>

<script lang='ts' setup name=''>
import { ref } from 'vue'
const checked5 = ref(true)
</script>

<style scoped>
.title {
  width: 90%;
  height: 35px;
  font-size: 22px;
  font-weight: 500;
  margin-left: 10px;
  border-bottom: 1px solid #e5e5e5;
}

.classify {
  color: #7f7f7f;

  .heading {
    margin-left: 15px;
    width: 90%;
    cursor: pointer;
  }

  li {
    margin-left: 25px;
    font-size: 13px;
    width: 85%;
    cursor: pointer;
  }

  .heading,
  li {
    height: 25px;
    border: 1px solid #fff;
    line-height: 25px;
    padding-left: 10px;
    transition-duration: 0.2s;
    border-radius: 5px;
  }

  .heading:hover,
  li:hover {
    border: 1px solid #FFB6C1;
    color: #FFB6C1;
    padding-left: 15px;
  }
}

.tags {
  margin: 10px auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  .tag {
    margin-bottom: 10px;
  }
}
</style>