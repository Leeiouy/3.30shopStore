<template>
  <div class="store">
    <div class="logo">
      <img :src="storeItem.logo" />
      <span>{{ storeItem.name }}</span>
    </div>
    <div class="Sells">
      <div class="left">
        <div>
          <p>{{ storeItem.Sells }}</p>
          <p>总销量</p>
        </div>
        <div>
          <p>{{ storeItem.Goods }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="solid"></div>
      <div class="right">
        <p v-for="(item, index) in storeItem.score" :key="item.index">
          {{ item.name }}
          <span>{{ item.score }}</span>
        </p>
      </div>
    </div>
    <div class="go">
      <p>进店逛逛</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    storeItem: {
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
.store {
  margin-top: 13px;
  padding-top: 20px;
  border-top: 3px solid hsla(49, 12%, 73%, 0.39);
}
.logo {
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.logo span {
  margin-left: 5px;
}
.logo img {
  width: 65px;
  height: 65px;
  border: 1px solid rgb(105, 102, 102);
  border-radius: 50%;
  overflow: hidden;
}
.Sells {
  text-align: center;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.left {
  width: 40%;
  display: flex;
  justify-content: space-around;
  font-weight: 600;
}
.right {
  width: 40%;
  text-align: left;
}
.solid {
  width: 1px;
  background-color: #b2bec3;
  height: 30px;
}
.go {
  margin: 15px auto;
  width: 30%;
  padding: 5px;
  text-align: center;
  background-color: #dfe6e9;
  overflow: hidden;
  border-radius: 5px;
}
.go p {
}
</style>