<template>
  <div id="home">
      <top-info></top-info>
      <recommendation></recommendation>
  </div>
</template>


<script>
    import TopInfo from './TopInfo.vue'
    import Recommendation from './Recommendation.vue'
    export default {
        name:'Home',
        components:{TopInfo,Recommendation}
    }
</script>

<style scoped>
    div#home{
        padding-left: 0.3rem;
        padding-right: 0.3rem;
    }
</style>
