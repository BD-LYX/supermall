<template>
  <div id="home">
    <nav-bar class="nav-home"><slot slot="center">购物街</slot></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <home-feature></home-feature>
    <ul>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComponents/HomeSwiper";
  import HomeRecommend from "./childComponents/HomeRecommend";
  import HomeFeature from "./childComponents/HomeFeature";
  import {getHomeMultidata} from "network/home";
  
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeature
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
  #home {
    padding-top: 44px;
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
</style>
