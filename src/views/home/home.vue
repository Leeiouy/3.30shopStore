<template>
  <div id="home" v-cloak>
    <nav-bar class="nav-bar">
      <div slot="center">主页</div>
    </nav-bar>
    <tab-contorl :titles="titles" @tabClick="tabClick" v-show="TabContorlshow" class="tabShow"></tab-contorl>
    <Bscroll
      class="content"
      ref="Bscroll"
      :probe_type="3"
      :load="true"
      @contentScroll="contentScroll"
      @pullingup="pullingup"
    >
      <scroll>
        <scroll-item v-for="(item,index) in banners" :key="item.index">
          <img :src="item.image" />
        </scroll-item>
      </scroll>
      <recommend :recommend="recommend"></recommend>
      <popular></popular>
      <tab-contorl :titles="titles" @tabClick="tabClick" ref="tabContorl"></tab-contorl>
      <goods-list :goods="goods[goodsType]"></goods-list>
    </Bscroll>
    <backTop @click.native="backClick" v-show="isBackTopShow"></backTop>
  </div>
</template>

<script>
import { gethomeBanner, getHomeData } from "network/homeData.js"; //首页请求数据

import Bscroll from "components/common/Bscroll/Bscroll.vue"; //滚动插件

import navBar from "components/common/navbar/navBar.vue"; //顶部导航
import scroll from "components/common/scrool/myScroll.vue"; //轮播图父组件
import scrollItem from "components/common/scrool/myScrollItem.vue"; //轮播图子组件
import recommend from "views/home/childComponents/home_recommend.vue"; //推荐
import popular from "views/home/childComponents/home_popular.vue"; //本周流行
import tabContorl from "views/home/childComponents/home_tabContorl.vue"; //点击
import goodsList from "components/comtent/goods/goodsList.vue"; //商品列表
import backTop from "components/comtent/backTop/backTop.vue"; //回到顶部

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommend: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      goodsType: "pop",
      isBackTopShow: false,
      tabContorltop: null,
      TabContorlshow: false
    };
  },
  components: {
    navBar,
    scroll,
    scrollItem,
    recommend,
    popular,
    tabContorl,
    goodsList,
    Bscroll,
    backTop
  },

  created() {
    //请求主页banner，将方法抽离，只写简单函数
    this.gethomeBanner(),
      //请求商品数据
      this.getHomeData("pop");
    this.getHomeData("new");
    this.getHomeData("sell");
  },
  methods: {
    backClick() {
      this.$refs.Bscroll.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      this.isBackTopShow = position.y < -1000; //箭头显示
      if (this.tabContorltop) {
        this.TabContorlshow = position.y <= -this.tabContorltop + 44;
      }
    },
    pullingup() {
      this.getHomeData(this.goodsType);
    },
    /* 
      tab监听事件
    */
    tabClick(index) {
      switch (index) {
        case 0:
          this.goodsType = "pop";
          break;
        case 1:
          this.goodsType = "new";
          break;
        case 2:
          this.goodsType = "sell";
          break;
      }
    },
    /* 
    下面是网络请求
    */
    gethomeBanner() {
      gethomeBanner().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    getHomeData(type) {
      const page = this.goods[type].page + 1; //获取现在的页码，并且请求数据
      getHomeData(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1; //在现在的页码加1
        setTimeout(() => {
          this.$refs.Bscroll.scroll.finishPullUp(); //刷新重置下拉，一开始只能拉一次
        }, 2000);

        this.tabContorltop = this.$refs.tabContorl.$el.offsetTop;
        this.$refs.Bscroll.scroll.refresh(); //每次加载数据，better scroll插件重新获取高度
        console.log("reset height");
      });
    }
  },
  activated() {
    this.$refs.Bscroll.scroll.refresh();
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  padding-bottom: 50px;
  height: 100vh;
}

.nav-bar {
  background-color: var(--color-tint);
  color: white;
  font-size: 16px;
}

.content {
  overflow: hidden;
  height: calc(100%);

  /* position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 50px;
  z-index: -5; */
}

.tabShow {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  z-index: 10;
  transition: all 1s;
}
</style>