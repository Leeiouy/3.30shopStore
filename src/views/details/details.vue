<template>
  <div class="details">
    <detailsNav @paramsTo="paramsTo" ref="detailsNav"></detailsNav>
    <Bscroll class="content" ref="Bscroll" :probe_type="3" @contentScroll="contentScroll">
      <scroll class="detailsScroll">
        <scroll-item v-for="(item,index) in image" :key="item.index">
          <img :src="item" />
        </scroll-item>
      </scroll>
      <detailsMessage :goodsItem="goodsItem"></detailsMessage>
      <detailsStore :storeItem="storeItem"></detailsStore>

      <detailsInfo :detailInfo="detailInfo" @imgLoad="imgLoad"></detailsInfo>

      <detailsParams :itemParams="itemParams" ref="detailsParams"></detailsParams>

      <detailsComment :comment="comment" ref="detailsComment"></detailsComment>

      <detailsList :commentData="commentData" ref="detailsList"></detailsList>
    </Bscroll>
    <backTop @click.native="backClick" v-show="isBackTopShow"></backTop>
    <detailsButtonBar @addCart="addCart"></detailsButtonBar>
    <div class="point">
      <p>已加入购物车</p>
    </div>
  </div>
</template>

<script>
import detailsNav from "views/details/childComponents/detailsNav.vue"; //顶部导航栏
import detailsMessage from "views/details/childComponents/detailsMessage.vue"; //商品信息
import detailsStore from "views/details/childComponents/detailsStore.vue"; //商店名
import detailsInfo from "views/details/childComponents/detailsInfo.vue"; //图片
import detailsParams from "views/details/childComponents/detailsParams.vue"; //参数
import detailsComment from "views/details/childComponents/detailsComment.vue"; //评论
import detailsList from "views/details/childComponents/detailsList.vue"; //推荐
import detailsButtonBar from "views/details/childComponents/detailsButtonBar.vue"; //底部按钮

import {
  detailsData,
  detailsCommentData,
  goods,
  store,
  imgShow,
  params
} from "network/detailsData.js"; //数据请求

import scroll from "components/common/scrool/myScroll.vue"; //轮播图父组件
import ScrollItem from "components/common/scrool/myScrollItem.vue"; //轮播图子组件

import backTop from "components/comtent/backTop/backTop.vue"; //回到顶部

import Bscroll from "components/common/Bscroll/Bscroll.vue"; //滚动插件
export default {
  name: "detail",
  data() {
    return {
      iid: null,
      image: [],
      goodsItem: {},
      storeItem: {},
      detailInfo: {},
      itemParams: {},
      comment: {},
      commentData: [],
      navIndex: [0, 0, 0, 0],
      isBackTopShow: false
    };
  },
  methods: {
    backClick() {
      this.$refs.Bscroll.scroll.scrollTo(0, 0, 500);
    },
    imgLoad() {
      this.$refs.Bscroll.scroll.refresh();
      this.navIndex[1] = this.$refs.detailsParams.$el.offsetTop - 60; //参数  距离顶部距离
      this.navIndex[2] = this.$refs.detailsComment.$el.offsetTop - 60; //评论  距离顶部距离
      this.navIndex[3] = this.$refs.detailsList.$el.offsetTop - 50;
    },
    contentScroll(position) {
      this.isBackTopShow = position.y < -1000; //箭头显示
      if (this.load) {
        clearTimeout(this.load);
      }
      this.load = setTimeout(() => {
        if (-position.y < this.navIndex[1]) {
          this.$refs.detailsNav.titlesActive = 0;
        }
        if (this.navIndex[1] <= -position.y && -position.y < this.navIndex[2]) {
          this.$refs.detailsNav.titlesActive = 1;
        }
        if (this.navIndex[2] < -position.y && -position.y < this.navIndex[3]) {
          this.$refs.detailsNav.titlesActive = 2;
        }
        if (this.navIndex[3] <= -position.y) {
          this.$refs.detailsNav.titlesActive = 3;
        }
      }, 50);
    },
    paramsTo(index) {
      this.$refs.Bscroll.scroll.scrollTo(0, -this.navIndex[index], 300);
    },
    addCart() {
      const commodity = {};
      commodity.title = this.goodsItem.title; //商品描述
      commodity.price = this.goodsItem.price; //商品价格
      commodity.img = this.image[0]; //商品图片
      commodity.iid = this.iid; //商品id

      commodity.shop = this.storeItem.name; //店铺名
      commodity.select = false; //选中状态
      commodity.index = 1; //数量
      this.$store.commit("addCart", commodity);
    }
  },
  components: {
    detailsNav,
    detailsMessage,
    detailsStore,
    scroll,
    ScrollItem,
    Bscroll,
    detailsInfo,
    detailsParams,
    detailsComment,
    detailsList,
    detailsButtonBar,
    backTop
  },
  created() {
    this.iid = this.$route.params.id;
    console.log(this.iid);

    detailsData(this.iid).then(res => {
      const data = res.data.result;
      this.image = data.itemInfo.topImages;

      this.detailInfo = new imgShow(data.detailInfo);

      this.itemParams = new params(data.itemParams.info, data.itemParams.rule);

      this.goodsItem = new goods(data.itemInfo, data.columns, data.shopInfo);
      this.storeItem = new store(data.shopInfo);

      this.comment = data.rate.list[0];
      console.log(res);
    });

    detailsCommentData().then(res => {
      this.commentData = res.data.data.list;
    });
  }
};
</script>

<style scoped>
.details {
  position: relative;
  z-index: 9;
  background-color: white;
  height: 100vh;
}
.detailsScroll {
  height: 40vh;
}

.content {
  height: calc(100% - 44px);
}
.point {
  display: none;
  width: 130px;
  font-size: 20px;
  font-weight: 700;
  position: absolute;
  top: 50%;
}
</style>