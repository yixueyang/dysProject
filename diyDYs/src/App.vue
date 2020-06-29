<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    //刷新回到首页
    // window.addEventListener('load', () => {
    //   console.log(this.$route)
    //   if (this.$route.path !== '/') {
    //     this.$router.replace('/') // 切换到首页
    //   }
    // });
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
