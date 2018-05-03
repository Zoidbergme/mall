<template>
  <div id="hotsales">
      <ul>
          <!-- <li v-for="item in items"></li> -->
          <li v-for = "(img, index) in imgs" :key="index">
              <router-link to="/goods">
                 <div id="pic" :style = "{ backgroundImage: 'url(' + img +')' }">
                 </div>
              </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "Recommendation",
  data: function() {
    return {
      imgs: [
        "https://i.loli.net/2018/05/03/5aea9cff50cbe.jpg",
        "https://i.loli.net/2018/05/03/5aea9dbd26325.jpg",
        "https://i.loli.net/2018/05/03/5aea9ddccdb44.jpg",
        "https://i.loli.net/2018/05/03/5aea9e1b2de74.jpg",
        "https://i.loli.net/2018/05/03/5aea9e29d9eba.jpg"
      ]
    };
  }
};
</script>

<style scoped>
 div#pic{
     width:100%;
     height: 5.7rem;
     background-size: cover
     /* border: 1px solid red */
 }
</style>
