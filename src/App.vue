<template>
  <div id="app">
    <tabBar></tabBar>
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>

    <div class="text" style="display:none">
      <span>赣ICP备20003988号</span>
      <span>
        <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action">工业和信息化部备案管理系统网站</a>
      </span>
    </div>
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

.text {
  text-align: center;
}
.text span {
  display: inline-block;
  margin: 0 5px;
}
</style>
