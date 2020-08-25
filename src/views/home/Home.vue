<template>
  <div id="home">
    <nav-bar class="nav-home"><slot slot="center">购物街</slot></nav-bar>

    <better-scroll ref="scroll"
                   class="scroll-wrapper"
                   :probe-type="2"
                   :pullUpLoad="true"
                   @scroll="scrollClick"
                   @pullingUp="pullingUpClick">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature></home-feature>
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']"
                   @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </better-scroll>

    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import BetterScroll from "components/common/betterscroll/BetterScroll";

  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import BackTop from "components/content/backTop/BackTop";

  import HomeSwiper from "./childComponents/HomeSwiper";
  import HomeRecommend from "./childComponents/HomeRecommend";
  import HomeFeature from "./childComponents/HomeFeature";

  import {getHomeMultidata,getHomeGoods} from "network/home";
  import {debounce} from "common/utils";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      TabControl,
      GoodsList,
      BetterScroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0,list: []},
          'new': {page: 0,list: []},
          'sell': {page: 0,list: []}
        },
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh,200)
      this.$bus.$on('itemImageLoad',() => {
        refresh();
      })
    },
    methods: {
      /**
       * 网络请求
       */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1 ;
        })
      },
      /**
       * 事件监听
       */
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
      },
      /* 返回顶部函数*/
      backTopClick(){
        this.$refs.scroll.scrollTo(0,0,500)
      },
      /* 返回顶部按钮是否显示是根据滚动位置进行判断*/
      scrollClick(position) {
        this.isShowBackTop = -position.y > 1000
      },
      /* 下拉发送网络请求，并可进行多次下拉*/
      pullingUpClick() {
        this.getHomeGoods(this.currentType);
        setTimeout(() => {
          this.$refs.scroll.scroll.finishPullUp();
        },500)
      },
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    }
  }
</script>

<style scoped>
  /*.wrapper {
    动态计算
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  }*/
  .scroll-wrapper {
    /*使用定位*/
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
  }

  #home {
    position: relative;
    padding-top: 44px;
    height: 100vh;
  }

  .nav-home {
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    background-color: #fff;
    z-index: 9;
  }
</style>
