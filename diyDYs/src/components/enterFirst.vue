<template>
  <div id="enterFirst">
    <div class="backageImg" :style="{bottom:clientHeight+'px'}">
      <span class="bottomBtn" v-if="this.keyNum == 5" @click="jumpNext">点我DIY你的爱豆
         <i class="iconfont icon-Group"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'enterFirst',
  data () {
    return {
      topSize:'',
      clientHeight:'',
      timer:null,
      keyNum:2
    }
  },
  watch:{
    keyNum(val){
      if(val == 5){
        this.clientHeight = 0;
        clearInterval(this.timer)
      }
    }
  },
  mounted() {
      this.$nextTick(()=>{
         this.clientHeight = document.documentElement.clientHeight;
         let speed = 9;
        this.timer = setInterval(()=>{
            speed += 2;
         this.clientHeight=this.clientHeight-speed;
        if(this.clientHeight<=0){
          this.keyNum ++;
          this.clientHeight = 100-this.keyNum;
          console.log("回弹参数2",this.clientHeight,this.keyNum)
        }
          console.log("回弹参数1",this.clientHeight,speed)
         },50);


      })
    },
  methods:{
    jumpNext(){
      this.$router.push("/selectPropsPage/totalVIdeo")
    }
  }
}
</script>

<style>

</style>
<style lang="less">
  #enterFirst{
    height:100%;
    width:100%;
    position: relative;
    .backageImg{
      height:100%;
      width:100%;
      position: absolute;
      overflow: hidden;
      background-image: url("../assets/enterImg/backageImg4.jpg") ;
      background-repeat:no-repeat;
      background-size: 100% 100%;
    }
    .bottomBtn{
      width: 100%;
      display: inline-block;
      text-align: center;
      position: absolute;
      bottom: 40px;
      font-size: 25px;
      cursor: pointer;
      .animation(bulingbulingText,2s,infinite);
    }
    .donghua(@DHname) {
      @-webkit-keyframes @DHname {
        0%{opacity: 1;}
        10%{opacity: 0.9;}
        20%{opacity: 0.8;}
        30%{opacity: 0.7;}
        40%{opacity: 0.6;}
        50%{opacity: 0.5;}
        60%{opacity: 0.6;}
        70%{opacity: 0.7;}
        80%{opacity: 0.8;}
        90%{opacity: 0.9;}
        100%{opacity: 1;}
      }
    }
    .donghua(bulingbulingText);
    .animation(@animation-name,@animation-duration,@animation-iteration-count){
      animation: @arguments;
    }

  }
</style>
