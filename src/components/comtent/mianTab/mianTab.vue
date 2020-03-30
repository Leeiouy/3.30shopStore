<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabBarImg/home-inActive.svg" />
      <img slot="item-icon-active" src="~assets/img/tabBarImg/home-active.svg" alt />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/sort">
      <img slot="item-icon" src="~assets/img/tabBarImg/sort-inActive.svg" />
      <img slot="item-icon-active" src="~assets/img/tabBarImg/sort-active.svg" alt />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopping">
      <img slot="item-icon" src="~assets/img/tabBarImg/shopping-inActive.svg" />
      <img slot="item-icon-active" src="~assets/img/tabBarImg/shopping-active.svg" alt />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabBarImg/profile-inActive.svg" />
      <img slot="item-icon-active" src="~assets/img/tabBarImg/profile-active.svg" alt />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";

export default {
  name: "",
  data() {
    return {};
  },
  methods: {},
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>
</style>