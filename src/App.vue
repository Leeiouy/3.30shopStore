<template>
  <div id="app">
    <tabBar></tabBar>
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import tabBar from "components/comtent/mianTab/mianTab.vue";
export default {
  name: "app",
  components: {
    tabBar
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
