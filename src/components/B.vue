<template>
  <div class="">
      <p class="title">Component B</p>
      <p>Resturant Name: {{resturantName}}</p>
      <p>{{baz}}</p>
      <div>
          <button class="btn" @click="clickBFn('BBBBBBBBB')">B修改餐馆名称</button>
      </div>
      <div class="mar-top">
          <button class="btn" @click="turnToA">跳转到A页面</button>
      </div>
      <div>
          <button @click="show">click</button>
      </div>
  </div>
</template>


<script>
    import {mapActions,mapGetters} from 'vuex'
    export default {
        methods:{
            ...mapActions([
                'clickBFn'//this.$store.dispatch('clickBFn')
            ]),
            turnToA(){
                this.$router.push({path:'/A'})
            },
            show(){
                // console.log(this.$store.state)
            }
        },
        computed:{
            ...mapGetters(['resturantName','baz'])
        }
    }
</script>