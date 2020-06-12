<template>
  <div id="enterFirst">
    <div class="backageImg" :style="{bottom:clientHeight+'px'}">
      <div class="bottomBtn" v-if="this.keyNum == 5" @click="jumpNext">向全世界展示最好的德云社
      </div>
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
            }
         },50);


      })
    },
  methods:{
    jumpNext(){
      this.$router.push("/homeFile/homePage")
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
     position: relative;
      background-image: url("../assets/enterImg/backageImg4.jpg") ;
      background-repeat:no-repeat;
      background-size: 100% 100%;
    }
    .bottomBtn{
      width: 300px;
      height: 25px;
      font-size: 25px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      cursor: pointer;
      .animation(bulingbulingText,1.5s,infinite);
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
