<template>
    <div id="top">
        <back-button></back-button>
        <div class="title">
            <slot><p>默认标题</p></slot>
        </div>
        <div v-if="area"></div>
        <div class="txt">
            <slot name="event"></slot>
        </div>
    </div>

</template>

<script>
import BackButton from "./BackButton.vue";
export default {
  name: "Top",
  components: { BackButton },
  props:['area']
};
</script>

<style scoped>
    div#top{
        display: flex;
        align-items: center;
        height: 1.32rem;
        margin: 0 0.3rem;
    }
    div.title{
        display: flex;
        font-size: 16px;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
        line-height: 16px;
    }
    div.txt{
        font-size: 14px;
        line-height: 14px
    }
</style>
