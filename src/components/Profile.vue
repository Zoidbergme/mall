<template>
  <div id="profile">
      <!-- <top-info></top-info> -->
            <div id="alternative">
                <router-view></router-view>
            </div>
      <footer-nav></footer-nav>
  </div>
</template>

<script>
    // import TopInfo from './TopInfo.vue'
    import FooterNav from './FooterNav.vue'

    export default {
        name:'Profile',
        components:{FooterNav}
    }
</script>


<style scoped>
    div#alternative{
        margin-bottom: 1.5rem
    }
</style>

