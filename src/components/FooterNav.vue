<template>
  <div id="navbar">
      <ul class="wrapper">
        <li v-for="(item,index) in items" :key="index" :class="{active:index === currentIndex}" @click="changeCurrentIndex(index)">
          <router-link :to="item.to" tag="div">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="'#icon-' + item.name"></use>
          </svg>
            <p>{{item.subHeading}}</p>
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name:'FooterNav',
  data:function(){
    return {
      currentIndex:0,
      items:[
        {
          name:'handbag',
          subHeading:'首页',
          to:'/home'
        },
        {
          name:'shoppingcar',
          subHeading:'购物车',
          to:'/cart'

        },
        {
          name:'person',
          subHeading:'我的',
          to:'/info'
        }]
    }
  },
  methods:{
    changeCurrentIndex:function(index){
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
ul.wrapper{
  display: flex;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width:100%;
  padding-left:0.3rem;
  padding-right:0.3rem;
  background-color: #ffffff
  /* height:1.49rem */
  /* flex-wrap: nowrap */
}
ul > li {
  width: 33.333%;
  /* position: relative; */
  /* position: relative; */
  /* top: -1px; */
  /* border: 1px solid red; */
}
/* ul >li > svg{ */
  /* border: 1px solid red */
  /* position: absolute;
  left: 0.63rem;
  top:0.26rem */
/* } */
.active{
  color:orange
}
#navbar p{
  font-size: 0.36rem
}
</style>
