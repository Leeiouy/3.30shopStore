<template>
  <div class="goods_item" @click="itemClick">
    <img :src="item.show.img" alt />
    <div>
      <p class="title">{{ item.title }}</p>
      <span class="price">{{ item.price }}</span>
      <span class="cfav">收藏：{{ item.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    itemClick() {
      this.$router.push("/details/" + this.item.iid);
    }
  }
};
</script>

<style scoped>
.goods_item {
  width: 48%;
  border-radius: 4px;
  overflow: hidden;
  font-size: 16px;
  text-align: center;
}
.goods_item img {
  width: 100%;
}
.goods_item .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 5px;
}
.goods_item .price {
  color: var(--color-tint);
  font-size: 14px;
  padding: 5px;
}
.goods_item .cfav {
  font-size: 14px;
  padding: 5px;
}
</style>