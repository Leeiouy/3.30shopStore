<template>
  <div class="bottomNav">
    <div class="Nav_left">
      <span class="left" @click="allClick">
        <span class="all" :class=" {all_active:allActive}"></span>
        全选
      </span>
      <span class="right">
        合计:
        <span class="price">￥{{ allPrice }}</span>
      </span>
    </div>
    <div class="Nav_right">
      <p>结账</p>
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
    allClick() {
      this.$store.commit("allClick");
    }
  },
  components: {},
  computed: {
    allActive() {
      return this.$store.state.allSelect;
    },
    allPrice() {
      return this.$store.getters.allPrice
    }
  }
};
</script>

<style scoped>
.bottomNav {
  position: absolute;
  bottom: 49px;
  left: 0;
  right: 0;
  display: flex;
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 18px;
}

.Nav_left {
  width: 70%;
  padding: 0 15px;
}
.Nav_right {
  height: 31px;
  margin: 7px 0;
  width: 30%;
  background-color: #e67e22;
  line-height: 31px;
  text-align: center;
  color: white;
  border-radius: 20px;
}
.price {
  color: #e67e22;
  font-size: 14px;
}
.all {
  display: inline-block;
  width: 17px;
  height: 17px;
  border: 2px solid #c8d6e5;
  border-radius: 50%;
  overflow: hidden;
}

.all_active {
  background: url(~assets/img/common/all.png);
  background-size: 13px;
  background-repeat: no-repeat;
}
</style>