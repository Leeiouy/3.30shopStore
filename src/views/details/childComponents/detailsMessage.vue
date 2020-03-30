<template>
  <div class="message" v-if="Object.keys(goodsItem).length!==0">
    <div class="title">{{ goodsItem.title }}</div>
    <div class="price">
      <span class="n_price">{{ '￥'+goodsItem.price }}</span>
      <span class="o_price">{{ goodsItem.oldPrice }}</span>
      <span class="desc">{{ goodsItem.desc }}</span>
    </div>
    <div class="columns">
      <span v-for="item in goodsItem.columns">{{ item }}</span>
    </div>
    <div class="services">
      <span v-for="item in goodsItem.services">
        <img :src="item.icon" />
        {{ item.name}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    goodsItem: {
      type: Object,
      default: function() {
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
.title {
  font-size: 18px;
  margin: 8px 8px;
  font-weight: 600;
  text-align: justify;
}
.price {
  margin: 5px 5px 0 5px;
}
.n_price {
  font-size: 24px;
  color: #fc427b;
  line-height: 35px;
}
.o_price {
  text-decoration: line-through;
  margin-left: 5px;
  color: #b0b4b6;
  font-size: 14px;
}
.desc {
  display: inline-block;
  padding: 3px;
  background-color: #fc427b;
  color: white;
  border-radius: 15px;
  font-size: 15px;
  position: relative;
  top: -5px;
  left: 5px;
}
.columns {
  display: flex;
  justify-content: space-between;

  color: #b0b4b6;
  font-size: 14px;
  margin: 10px 10px;
}

.services {
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  margin: 15px 5px 0;
  flex-wrap: wrap;
}
.services img {
  width: 10px;
}
</style>