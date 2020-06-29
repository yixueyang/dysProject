<template>
<div id="waterFallCol">
  <div class="col" ref="col1">
    <transition-group name="list">
      <div class="item" v-for="item in dataList1" :key="item.id">{{item.text}}</div>
    </transition-group>
  </div>
  <div class="col" ref="col2">
    <transition-group name="list">
      <div class="item" v-for="item in dataList2" :key="item.id">{{item.text}}</div>
    </transition-group>
  </div>
</div>
</template>

<script>
    export default {
        name: "waterFall",
      data(){
          return{
            dataList1: [],
            dataList2: []
          }

      },
      created() {
      this.getWaterFall()
          },
      methods:{
        getWaterFall(){
          this.$http.post('/getWaterFallInformation',{"id":1}).then((res)=>{
            console.log("res",res)
          })

        }
      }
    }
</script>

<style scoped>
#waterFallCol{
  width: 100%;
  height: 100%;
}
</style>
