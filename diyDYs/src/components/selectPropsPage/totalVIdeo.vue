<template>
    <div>
      <leftVideo></leftVideo>
      <div></div>
      <rightVideo></rightVideo>
    </div>
</template>

<script>
  import leftVideo from "./leftVideo";
  import rightVideo from "./rightVideo";
    export default {
        name: "totalVIdeo",
      components: {
          leftVideo,
          rightVideo
      }
    }
</script>

<style scoped>

</style>
