<template>
    <div id="locality">
        <span>{{area}}</span>
    </div>
</template>

<script>
    export default {
        name:"Locality",
        data:function(){
            return {
                area:'郫都'
            }
        }
    }
</script>


<style scoped>
    div#locality {
        display: flex
    }
    div#locality span{
        font-size: 0.4rem;
        line-height:0.4rem
    }
</style>

