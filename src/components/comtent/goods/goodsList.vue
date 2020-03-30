<template>
  <div class="goods_list">
    <goods-item v-for="(item, index) in goods.list" :key="item.index" :item="item"></goods-item>
  </div>
</template>

<script>
import goodsItem from "components/comtent/goods/goodsItem.vue";
export default {
  name: "",
  props: {
    goods: {
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
  components: {
    goodsItem
  }
};
</script>

<style scoped>
.goods_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>