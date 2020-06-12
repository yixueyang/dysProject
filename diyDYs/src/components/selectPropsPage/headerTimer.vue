<template>
  <div id="headerClass">
    <div @click="clickLeft"><i class="iconfont icon-zuo"></i></div>
    <div><span>{{date.year}}</span></div>
    <div @click="clickRight"> <i class="iconfont icon-weibiaoti34"></i></div>
  </div>
</template>

<script>
  export default {
    name: "headerTimer",
    props:['headerDate'],
    data(){
      return{
        date:{}
      }
    },
    created() {
      this.getNowData()
    },
    watch:{
      headerDate(val){
        console.log("传值",val)
        this.date = val
      }
    },
    methods:{
      getNowData(){
        let nowDate = new Date();
        this.date = {
          year:nowDate.getFullYear(),
          month:nowDate.getMonth() + 1,
          date:nowDate.getDay()
        }
        this.$emit("nowDate",this.date)
        console.log(this.date);
      },
      clickLeft(){
        this.date.year--
      },
      clickRight(){
        this.date.year++
      }
    }
  }
</script>

<style lang="less" scoped>
#headerClass{
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 20px;
  flex-direction: row;
  justify-content: center;

}
</style>
