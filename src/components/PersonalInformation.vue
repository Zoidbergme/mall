<template>
  <div>
      <div id="basic">
          <div id="avatar" :style="{'background-image': 'url(' + avatar + ')' }"></div>
          <div id="information">
            <p>{{nickname}} 
                <span v-if="sex === 'male'">
                   <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-male"></use>
                   </svg> 
                </span> 
                <span v-else>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-female"></use>
                    </svg>
                </span>
                <span id="point">
                    积分：{{loyalPoints}}
                </span>
            </p>
            <p id="area">小区提货点：{{place}}</p>
          </div>
      </div>
      <p id="mine">
          我的订单
      </p>
      <div id="access">
          <ul>
              <li v-for="(item,index) in items" :key="index">
                  <router-link :to="item.to" tag="div" >
                        <div>
                            <div>
                            <svg class="icon tag" aria-hidden="true">
                                <use :xlink:href="'#icon-'+item.name"></use>
                            </svg> 
                        </div>
                        <p>{{item.subheading}}</p>
                        </div>
                  </router-link>
              </li>
          </ul>
      </div>
      <div id="management">
          <ul>
              <li v-for="(option,index) in options" :key="index">
                  <router-link :to="option.to" tag="div" id="rt">
                          <div id="icon">
                            <svg class="icon tag" aria-hidden="true">
                                <use :xlink:href="'#icon-'+option.name"></use>
                            </svg> 
                          </div>
                          <div>
                              {{option.subheading}}
                          </div>
                  </router-link>
              </li>
          </ul>
      </div>

  </div>
</template>

<script>
export default {
  name: "PersonalInformation",
  data: function() {
    return {
      avatar: "https://i.loli.net/2018/05/03/5aeaae1cd6e26.jpg",
      nickname: "haha",
      sex: "male",
      loyalPoints: 1926,
      place: "SJTU",
      items: [
        { to: "/allorders", name: "order", subheading: "我的订单" },
        { to: "/unpaid", name: "wallet", subheading: "待付款" },
        { to: "/unreceived", name: "unreceived", subheading: "待收货" },
        { to: "/aftersales", name: "truck", subheading: "退换/售后" }
      ],
      options: [
        { to: "/property", name: "property", subheading: "我的钱包" },
        { to: "/coupon", name: "coupon", subheading: "优惠券" },
        { to: "/addressmanagement", name: "address", subheading: "地址管理" },
        { to: "/join", name: "join", subheading: "招商加盟" },
        { to: "/feedback", name: "feedback", subheading: "意见反馈" }
      ]
    };
  }
};
</script>

<style scoped>
div#basic {
  width: 100%;
  height: 4.5rem;
  background: #f6b37f;
  padding: 0 0.32rem;
  display: flex;
  align-items: center;
}
div#avatar {
  width: 2.42rem;
  height: 2.42rem;
  background-size: contain;
}
div#information {
  font-size: 0.4rem;
  padding-left: 0.52rem;
  color: #ffffff;
}
p#area {
  margin-top: 0.22rem;
}
span#point {
  padding-left: 0.35rem;
}
p#mine {
  height: 1rem;
  line-height: 0.4rem;
  font-size: 0.4rem;
  color: #656565;
  padding: 0.3rem;
  padding-right: 0;
}
div#access ul {
  display: flex;
  height: 2rem;
}
div#access ul li {
  color: #656565;
  width: 25%;
  text-align: center;
  font-size: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tag {
  width: 0.65rem !important;
  height: 0.65rem !important;
}
div#access {
  margin-bottom: 0.2rem;
}
div#management{
    font-size: 0.4rem
}
div#management ul li{
    height: 1.3rem;
    display: flex;
    align-items: center

}
div#rt{
    display: flex;
    align-items: center
}
div#icon {
    margin-right: 0.4rem;
}

</style>
