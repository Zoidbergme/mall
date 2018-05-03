<template>
  <div id="pageTitle">
      <!-- <span>{{title}}</span> -->
      <span>首页</span>
  </div>
</template>

<script>
    export default {
        name:'Title',
        props:['title'],
        data:function(){
            return {
                pageTitle:this.title
            }
        }
    }    
</script>

<style>
    div#pageTitle{
        font-size: 0.56rem;
        flex-grow: 1;
        text-align: center;
        line-height: 0.56rem
    }
</style>
