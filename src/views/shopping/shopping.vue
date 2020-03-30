<template>
  <div class="shopping">
    <nav-bar class="navBar">
      <div slot="center">
        <p>购物车</p>
      </div>
    </nav-bar>
    <div class="point" v-show="messageShow">
      <p>购物车居然是空的</p>
      <span>在忙，也要记得买点什么犒劳自己~</span>
    </div>
    <Bscroll class="content" ref="Bscroll">
      <shop-item></shop-item>
    </Bscroll>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import navBar from "components/common/navbar/navBar.vue"; //顶部导航
import bottomNav from "views/shopping/childComponents/bottomNav.vue"; //底部结算
import shopItem from "views/shopping/childComponents/shopItem.vue";

import Bscroll from "components/common/Bscroll/Bscroll.vue"; //滚动插件

export default {
  name: "shopping",
  data() {
    return {};
  },
  methods: {},
  components: {
    navBar,
    bottomNav,
    Bscroll,
    shopItem
  },
  computed: {
    messageShow() {
      return this.$store.state.cartList.length == 0;
    }
  },
  activated() {
    console.log(123);
    this.$refs.Bscroll.scroll.refresh();
  }
};
</script>

<style scoped>
.shopping {
  height: 100vh;
  padding-top: 44px;
  padding-bottom: 50px;
}
.navBar {
  background-color: var(--color-tint);
  color: white;
}

.point {
  width: 100%;
  position: absolute;
  top: 45%;
  text-align: center;
  z-index: 1;
}

.point p {
  font-weight: 700;
  font-size: 20px;
  margin: 15px 0;
}

.point span {
  color: #aaadaf;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 96px;
  overflow: hidden;
  background-color: #f1f2f6;
}
</style>