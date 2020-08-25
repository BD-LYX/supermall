<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'
  export default {
    name: "BetterScroll",
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      const wrapper = this.$refs.wrapper;
      // 1.创建BetterScroll对象
      this.scroll = new BetterScroll(wrapper,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      // 2.监听滚动位置
      this.scroll.on('scroll',(position) => {
        this.$emit('scroll',position);
      })

      // 3.监听上拉事件
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
    },
    methods: {
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time);
      },
      refresh(){
        this.scroll&&this.scroll.refresh();
      }
    }
  }
</script>

<style scoped>

</style>
