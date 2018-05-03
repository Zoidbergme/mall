<template>
  <!-- <i class="el-icon-arrow-left" @click="goBack"></i> -->
  <div id="backbtn">
      <svg class="icon back" aria-hidden="true" @click="goBack">
        <use xlink:href="#icon-back"></use>
</svg>
  </div>
</template>

<script>
export default {
  name: "BackButton",
  methods: {
    goBack() {
      console.log("oops");
    }
  }
};
</script>

<style scoped>
div#backbtn{
    display: flex;
    align-items: center;
}
svg.icon.back  {
    width:0.59rem;
    height: 0.59rem;
    line-height: 0.59rem;
    /* font-size: 0.9rem */
}
/* i.el-icon-arrow-left{
        width: 0.27rem;
        height:0.5rem
    }
    i.el-icon-arrow-left::before{
        width: 0.27rem;
        height:0.5rem
    } */
</style>
