<template>
  <div id="nav">
    <ul>
      <li v-for="(item,index) in items" :key="index" :class="{active:index === currentIndex}" @click="changeCurrentIndex(index,item)">
        <div :class="item.name">

        </div>
        <div class="txt">
          {{item.subHeading}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterNav",
  data: function() {
    return {
      currentIndex: 0,
      items: [
        {
          name: "handbag",
          subHeading: "首页",
          to: "/home"
        },
        {
          name: "shoppingcar",
          subHeading: "购物车",
          to: "/cart"
        },
        {
          name: "person",
          subHeading: "我的",
          to: "/info"
        }
      ]
    };
  },
  methods: {
    changeCurrentIndex: function(index,item) {
      this.currentIndex = index;
      this.$router.push(item.to)
    }
  },
  created(){
    console.log(this.$route)
    let name = this.$route.name
    if(name.indexOf('home') !== -1){
      this.currentIndex = 0
    }else if(name.indexOf('cart') !== -1){
      this.currentIndex = 1
    }else{
      this.currentIndex = 2
    }
  }
};
</script>

<style scoped>
div#nav{
    width: 100%;
    height: 1.5rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
}
div#nav >ul {
  display: flex;
  height:100%
}
div#nav >ul >li{
  width: 33.333%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-wrap: wrap;
  margin-top: 0.25rem;
}
div#nav >ul >li div.txt{
  width: 100%;
  text-align: center
}
div#nav >ul >li div.handbag {
  background-image: url('../assets/bag.png');
  width: 0.59rem;
  height: 0.59rem;
  background-size: cover
}
div#nav >ul >li div.shoppingcar {
  background-image: url('../assets/cart.png');
  width: 0.59rem;
  height: 0.59rem;
  background-size: cover
}
div#nav >ul >li div.person {
  background-image: url('../assets/person.png');
  width: 0.59rem;
  height: 0.59rem;
  background-size: cover
}
div#nav >ul >li.active div.handbag {
  background-image: url('../assets/bag-active.png');
  width: 0.59rem;
  height: 0.59rem;
  background-size: cover
}
div#nav >ul >li.active div.shoppingcar {
  background-image: url('../assets/cart-active.png');
  width: 0.59rem;
  height: 0.59rem;
  background-size: cover
}
div#nav >ul >li.active div.person {
  background-image: url('../assets/person-active.png');
  width: 0.59rem;
  height: 0.59rem;
  background-size: cover
}
div#nav >ul >li.active div.txt{
  color: #f6b37f;
}
.txt{
  font-size: 14px;
}
</style>
