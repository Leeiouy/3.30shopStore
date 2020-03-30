<template>
  <div class="item">
    <img :src="item.image" alt />
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
  methods: {},
  components: {}
};
</script>

<style scoped>
.item {
  width: 48%;
  border-radius: 4px;
  overflow: hidden;
  font-size: 16px;
  text-align: center;
}
.item img {
  width: 100%;
}
.item .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 5px;
}
.item .price {
  color: var(--color-tint);
  font-size: 14px;
  padding: 5px;
}
.item .cfav {
  font-size: 14px;
  padding: 5px;
}
</style>