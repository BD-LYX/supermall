<template>
  <div id="home">
    <nav-bar class="nav-home"><slot slot="center">购物街</slot></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComponents/HomeSwiper";
  import HomeRecommend from "./childComponents/HomeRecommend";
  import {getHomeMultidata} from "network/home";
  
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    }
  }
</script>

<style scoped>
  .nav-home {
    background-color: var(--color-tint);
    color: white;
  }
</style>
