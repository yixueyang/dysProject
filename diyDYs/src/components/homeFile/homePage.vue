<template>
<div id="homePageClass">
  <div class="topMenu">
      <div class="cardClass topToDown">DYS历史</div>
      <div class="cardClass upToTop">DYS家谱</div>
      <div class="cardClass topToDown">DYS视频</div>
      <div class="cardClass upToTop">关于我们</div>
  </div>
<!--  <div class="topSearch">-->
<!--    <div style="display: flex;justify-content: center">-->
<!--      <input type="text" class="inputClass">-->
<!--      <input type="submit" class="pickClass" value="点我">-->
<!--    </div>-->
<!--  </div>-->
<!--  <div class="fallStyle">-->
<!--    <waterFall ></waterFall>-->
<!--  </div>-->
<!--  <div class="ownInformation"></div>-->
  </div>
</template>

<script>
  import waterFall from './waterFall'
    export default {
        name: "homePage.vue",
        components:{
        waterFall
      }
    }
</script>

<style lang="less" scoped>
#homePageClass{
  width: 100%;
  height: 100%;
  background-color: #F5F5F5;
  
  .topMenu{
    width:90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
      .cardClass{
        width: 100%;
        height: 70%;
        background-color: white;
      }
      .topToDown{
      }
  }
  .topSearch{
    width: 100%;
    height: 110px;
    background-color: white;
    margin-bottom: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    .inputClass{
      width: 400px;
      height: 34px;
      border:2px solid #bb4446;
      border-radius: 10px 0 0 10px;
      font-size: 16px;
    }
    .pickClass{
      width: 50px;
      height: 40px;
      font-size: 15px;
      color: #bb4446;
      border-right:2px solid #bb4446;
      border-top:2px solid #bb4446;
      border-bottom:2px solid #bb4446;
      border-radius: 0 10px 10px 0;
    }
  }
  .fallStyle{
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    margin-bottom: 3px;
  }
}
</style>
