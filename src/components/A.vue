<template>
  <div class="">
      <p class="title">Component A</p>
      <p>Resturant Name: {{resturantName}}</p>
      <div>
          <!-- <button class="btn" @click="clickAFn('AAAAAAAAAA')">A修改餐馆名称</button> -->
          <button class="btn" @click="clicked">A修改餐馆名称</button>
      </div>
      <div class="mar-top">
          <button class="btn" @click="turnToB">跳转到B页面</button>
      </div>
  </div>
</template>


<script>
    import {mapActions,mapGetters} from 'vuex'
    export default {
        methods:{
            // ...mapActions([
            //     'clickAFn'//this.$store.dispatch('clickAFn')
            // ]),
            clicked(){
                this.$store.commit('clickAFn',{
                    str:'hahhahahahahah'
                })//感觉这样不对，跳过了dispatch环节
            },
            turnToB(){
                this.$router.push({path:'/B'})
            }
        },
        // computed:{
        //     ...mapGetters(['resturantName'])
        // }
        computed:{
            resturantName(){
                return this.$store.state.resturantName
            }
        }
    }
</script>