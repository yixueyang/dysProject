<template>
    <div id="totalVideo">
      <headerTimer @nowDate="nowDate" :headerDate = "headerDate" class="headerClass"></headerTimer>
      <div class="timerDiv">
        <leftVideo class="leftDate"></leftVideo>
        <div class="timerShaft" ref="timerShaftRef" :style="{height:clientHeight+'px'}">
          <ul style="overflow: hidden">
            <li :style="{height:oneHeight+'px'}" v-for="(item) in shaftData" class="oneTimer">
              <div class="focusDiv" @mouseenter="enterFun(headerDate)" @mouseleave="outFun(headerDate)">
                {{headerDate.year}}-{{item}}
              </div>

            </li>
          </ul>
        </div>
        <rightVideo></rightVideo>
      </div>
    </div>
</template>

<script>
  import leftVideo from "./leftVideo";
  import rightVideo from "./rightVideo";
  import headerTimer from "./headerTimer";
  import BScroll from 'better-scroll'
    export default {
        name: "totalVIdeo",
      components: {
        leftVideo,
        rightVideo,
        headerTimer
      },
       data(){
          return{
            oneHeight:0,
            shaftData:[],
            headerDate:{},
            clientHeight:document.documentElement.clientHeight-50
          }
       },
      created() {
          this.creatATimer();
      },
      mounted() {
          this.$nextTick(()=>{
            this.scroll = new BScroll(this.$refs.timerShaftRef, {
              startY: 25,
              mouseWheel: true,
              scrollbar: true,
              pullDownRefresh: true,
              pullUpLoad: true
            });
            this.initScroll();
          })
      },
      methods: {
          //移出事件
        outFun(val){

        },
          //移入事件

        enterFun(){
          //移入的时间点传给左边
        },
        nowDate(val){
          this.headerDate = val
          console.log(val)
        },
        //实现无限加载时间轴
        //1.以月为单位在可视区内显示一年的时间轴，月份以圆圈作为节点
        //2.溢出屏幕时加载下一年
        creatATimer() {
          let clientHeight1 = document.documentElement.clientHeight;
          console.log(clientHeight1);
          this.oneHeight = clientHeight1 / 12;
          for (let i = 1; i < 13; i++) {
            this.shaftData.push(i)
          }
        },
        addDataYear(){
          this.headerDate.year++;
          for (let i = 1; i < 13; i++) {
            this.shaftData.push(i)
          }
          this.scroll.finishPullUp()
          console.log("headerDate.year",this.headerDate,this.headerDate.year)
        },
        subDataYear(){
          this.headerDate.year--;
          for (let i = 12; i >0; i--) {
            this.shaftData.push(i)
          }
          this.scroll.finishPullDown()
          console.log("headerDate.year",this.headerDate,this.headerDate.year)
        },
        initScroll() {
          this.scroll.on('pullingDown', () => {
            console.log("下拉加载")
            this.subDataYear()
          });
          this.scroll.on('pullingUp', () => {
            console.log("上拉加载")
            this.addDataYear();
          })
        }
      }
    }
</script>

<style lang="less" scoped>
#totalVideo{
  .headerClass{
    width: 100%;
    height: 50px;
    z-index: 2;
  }
  .timerDiv {
    width: 100%;
    height: 100%;
    display: flex;
    .leftDate{
      width: 250px;
      height: 100%;
    }
   .timerShaft{
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
     overflow: hidden;
     .oneTimer{
       width: 105px;
       background-color: cadetblue;
       cursor:pointer;
     }
     .circle{
       width: 25px;
       height: 25px;
       border-radius: 50%;
       background-color: red;
     }
   }
  }
}
</style>
