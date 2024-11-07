<template>
  <h2 style="padding: 10px; font-weight: 900; font-size: 25px;">友链🔗</h2>
  <div class="bgc">
    <div v-for="i in 20" class="box">
      <div class="left">
        <img src="../../../public/images/小白猫.jpg" alt="">
      </div>
      <div class="right">
        <p>小白猫</p>
        <p>世上无难事，只怕人太狠</p>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup name=''>

</script>

<style scoped>
.bgc,
h2 {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  width: 99.4%;
  margin: auto;

  .box {
    display: flex;
    margin: 10px;
    width: 330px;
    height: 90px;
    border-radius: 20px;
    border: 1px solid #ccc;
    background-color: #fff;
    transition-duration: 0.2s;

    .left {
      margin: 4px;
      margin-right: 20px;
      width: 23%;

      img {
        width: 100%;
        border-radius: 50%;
      }
    }

    .right {
      margin-top: 20px;

      p:nth-child(1) {
        font-weight: 900;
        font-size: 20px;
      }

      p:nth-child(2) {
        font-size: 15px;
        margin-top: 3px;
      }
    }
  }

  .box:hover {
    background-color: #e77894;
    color: #fff;
  }
}
</style>