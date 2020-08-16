<template>
  <tab-bar>
    <TabBarItem link="/home" activeColor="blue">
      <img src="~assets/img/tabbar/首页2.png" slot="item-icon">
      <img src="~assets/img/tabbar/首页1.png" slot="item-icon-active">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem link="/category" activeColor="blue">
      <img src="~assets/img/tabbar/分类2.png" slot="item-icon">
      <img src="~assets/img/tabbar/分类1.png" slot="item-icon-active">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem link="/cat" activeColor="blue">
      <img src="~assets/img/tabbar/购物车2.png" slot="item-icon">
      <img src="~assets/img/tabbar/购物车1.png" slot="item-icon-active">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem link="/profile" activeColor="blue">
      <img src="~assets/img/tabbar/我的2.png" slot="item-icon">
      <img src="~assets/img/tabbar/我的1.png" slot="item-icon-active">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
