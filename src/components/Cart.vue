<template>
    <div id="cart">
        <top :area='false'>
            <p>购物车</p>
            <p slot="event" @click="foo">编辑</p>
        </top>
        <div class="goodlist">
            <ul>
                <li v-for="(item,index) in items" :key="index">
                    <div class="iconwrapper" @click="confirm(item)" :class="{activeIcon:item.selected}">
                    </div>
                    <!-- <div class="imgwrapper"> -->
                    <router-link to="" tag="div" class="img" :style="{backgroundImage:'url(' + item.img + ')',backgroundSize:'cover'}">

                    </router-link>
                    <!-- </div> -->
                    <div class="details">
                        <div>
                            {{item.info}}
                        </div>
                        <div class="num">
                            <div>
                                X {{item.num}}
                            </div>
                            <div>
                                ￥ {{item.price * item.num}}
                            </div>
                        </div>
                        <div class="control">
                            <div class="controlwrapper">
                                <div class="controlItem add" @click="add(item)">
                                    +
                                </div>
                                <div class="goodnum">
                                    {{item.num}}
                                </div>
                                <div class="controlItem minus" @click="minus(item)">
                                    -
                                </div>
                            </div>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
        <div class="count">
            <div class="info">
                <div class="iconwrapper" @click="confirmAll" :class="{activeIcon:selectAll}">
                </div>
                <div class="all">
                    <span>全选</span>
                </div>
                <div class="total">
                    <span class="txt">合计: ￥{{total}}</span>
                </div>

            </div>
            <div class="pay">
                付款
            </div>
        </div>
    </div>
</template>

<script>
import Top from './Top'
export default {
  name: "Cart",
  components: {Top},
  data: function() {
    return {
      selectAll: true,
      items: [
        {
          info: "测试商品",
          img: "https://i.loli.net/2018/05/15/5afa7a387af47.jpg",
          selected: true,
          num: 1,
          price: 322
        },
        {
          info: "测试商品2",
          img: "https://i.loli.net/2018/05/15/5afa7a387c6d2.jpg",
          selected: true,
          num: 2,
          price: 1213
        }
      ]
    };
  },
  computed:{
      total:function(){
          let total = 0
          this.items.filter(function(ele){
             return ele.selected === true
         }).map(function(ele){
             total += (ele.num * ele.price)
         })
         return total
      }
  },
  methods: {
    confirmAll() {
      this.selectAll = !this.selectAll;
      if(this.selectAll){
          this.items.map(function(ele){
              ele.selected = true
          })
      }
    },
    confirm(itm) {
      itm.selected = !itm.selected;
      let unSelectedArray = this.items.filter((ele)=>{
          return ele.selected !== true
      })
      if(unSelectedArray.length === 0){
          this.selectAll = true
      }else{
          this.selectAll = false
      }
    },
    add(itm){
        itm.num += 1
    },
    minus(itm){
        itm.num = itm.num > 1 ? itm.num - 1 : 1
    },
    foo(){
        console.log('adadada')
    }
  }
};
</script>

<style scoped>
.count {
  width: 100%;
  height: 1.5rem;
  position: fixed;
  left: 0;
  bottom: 1.5rem;
  display: flex;
  /* background: firebrick */
}

div.iconwrapper {
  width: 0.4rem;
  height: 0.4rem;
  border: 1px solid #707070;
  border-radius: 50%;
  margin: 0 0.3rem;
}
div.iconwrapper {
}
.activeIcon {
  background-image: url("../assets/circle.png");
  background-size: cover;
  border: 0 !important;
}
div.info {
  height: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  font-size: 16px;
  flex-grow: 1;
}
div.pay {
  height: 100%;
  width: 3.5rem;
  line-height: 1.5rem;
  background-color: #f6b37f;
  text-align: center;
  color: #ffffff;
  font-size: 18px;
}
div.total {
  margin-right: 0.55rem;
}
div.all {
  flex-grow: 1;
}
.txt {
  color: #ff4243;
}
div.goodlist ul li {
  display: flex;
  font-size: 16px;
  align-items: center;
  height: 3.2rem;
  margin-bottom: 0.35rem;
  margin-right: 0.3rem
}
div.img {
  width: 3rem;
  height: 2.5rem;
}
div.details {
  flex-grow: 1;
}
div.control {
  display: flex;
  height: 0.6rem;
  width: 100%;
  justify-content: flex-end;
  /* position: relative; */
}
div.controlwrapper{
    position: relative;
    display: flex;
    border: 0.01rem solid #dcdcdc
}

.add{
    border-right: 0.01rem solid #dcdcdc;
}
.minus{
    border-left: 0.01rem solid #dcdcdc
}
/* div.controlwrapper::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 200%;
  height:200%;

  border: 1px solid #dcdcdc;
  color: #d5d5d6;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
} */
div.controlItem {
  width: 0.65rem;
  height: 100%;
  /* text-align: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0.6rem;
  /* border: 1px solid black; */
}
.goodnum {
  width: 1rem;
  text-align: center;
  line-height: 0.6rem;
}
div.num {
  display: flex;
  justify-content: space-between;
  margin-top: 0.35rem;
  margin-bottom: 0.35rem
}
/* .circle {
  width: 0.5rem;
  height: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #737373;
} */
</style>


