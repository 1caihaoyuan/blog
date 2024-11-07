<template>
  <div>
    <img class="POC" :src="imgUrl" alt="" />
    <div class="Tips">感谢您暂无内容</div>
  </div>
</template>

<script lang='ts' setup name=''>
import { ref, reactive, onMounted } from 'vue'
// 引入API
import { getRandomImg } from '../../api/feed/index'
// 创建随机照片的url
let imgUrl = ref<string>('')
onMounted(async () => {
  imgUrl.value = (await getRandomImg()).data.url
})
</script>

<style scoped>
.POC {
  margin-left: 3.5px;
  width: 99%;
  loading: lazy;
}

  .Tips{
    font-size: 30px;
    color: #fff;
    text-align: center;
    margin-top: 20px;
  }


</style>