<template>
  <div class="button_bar">
    <div class="item_left">
      <div class="bgimg">
        <img class="a" src="~assets/img/details/detail_bottom.png" alt />
      </div>
      <p>客服</p>
    </div>
    <div class="item_left">
      <div class="bgimg">
        <img class="b" src="~assets/img/details/detail_bottom.png" alt />
      </div>
      <p>店铺</p>
    </div>
    <div class="item_left">
      <div class="bgimg">
        <img class="c" src="~assets/img/details/detail_bottom.png" alt />
      </div>
      <p>收藏</p>
    </div>
    <div class="item_right_1" @click="addCart">
      <p>加入购物车</p>
    </div>
    <div class="item_right_2">
      <p>购买</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    addCart() {
      console.log(12);
      this.$emit("addCart");
    }
  },
  components: {}
};
</script>

<style scoped>
.button_bar {
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: white;
  height: 60px;
  display: flex;
  text-align: center;
  border-top: 2px solid #ecf0f1;
}

.item_left {
  width: 14%;
}
.bgimg {
  overflow: hidden;
  height: 40px;
}

.item_right_1 {
  width: 29%;
  line-height: 60px;
  color: white;
  background-color: #f9ca24;
}
.item_right_2 {
  width: 29%;
  line-height: 60px;
  color: white;
  background-color: #e383a4;
}

.a {
  width: 43px;
  position: relative;
  top: -257%;
}
.b {
  width: 43px;
  position: relative;
  top: -483%;
}
.c {
  width: 43px;
  position: relative;
  top: 0%;
}
</style>