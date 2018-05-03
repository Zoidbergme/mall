<template>
  <div id="top">
    <back-button></back-button>
    <heading></heading>
    <locality></locality>
  </div>
</template>
<script>
  import BackButton from './BackButton.vue'
  import Heading from './Heading.vue'
  import Locality from './Locality.vue'
  export default {
    name:'TopInfo',
    components:{BackButton,Heading,Locality}
  }  
</script>
<style scoped>
  div#top{
    /* padding-left: 0.3rem; */
    /* padding-right: 0.3rem; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.32rem;
    
  }
</style>
