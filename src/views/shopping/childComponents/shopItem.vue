<template>
  <div class="shopItem">
    <div v-if="cartList[0]!==undefined">
      <div class="item" v-for="(item, index) in cartList" :key="index">
        <p @click="selectClick(index) ">
          <span class="all" :class=" {all_active:item.select}"></span>
          <strong>{{ item.shop }}</strong>
        </p>
        <div class="content">
          <div class="content_left" @click="selectClick(index)">
            <span class="all" :class=" {all_active:item.select}"></span>
          </div>
          <div class="content_center">
            <img :src="item.img" alt />
          </div>
          <div class="content_right">
            <p>{{ item.title }}</p>
            <p class="price">￥{{ item.price }}</p>
            <p>
              <button @click="subBtn(index) ">-</button>
              <strong>{{ item.index }}</strong>
              <button @click="addBtn(index) ">+</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      allActive: false
    };
  },
  methods: {
    selectClick(index) {
      this.$store.commit("selectClick", index);
    },
    addBtn(index) {
      this.$store.commit("addBtn", index);
    },
    subBtn(index) {
      this.$store.commit("subBtn", index);
    }
  },
  components: {},
  computed: {
    cartList() {
      return this.$store.state.cartList;
    }
  }
};
</script>

<style scoped>
.price {
  color: #e67e22;
  font-weight: 700;
}
.shopItem {
  width: 100%;
}

.item {
  width: 95%;
  height: 150px;
  margin: 10px auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 5px 5px #dfe4ea;
}

.item p {
  line-height: 25px;
  padding: 5px 10px;
  font-size: 16px;
}
.item > p > strong {
  display: inline-block;
  margin-left: 10px;
}
.item > p > span {
  transform: translateY(2px);
  padding: 0 3px;
}

.content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  margin: 5px 10px;
  overflow: hidden;
}

.content_left {
  width: 10%;
  padding: 40px 0;
}
.content_center {
  width: 30%;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
}

.content_center img {
  width: 100%;
  position: relative;
  top: 0px;
}
.content_right {
  width: 50%;
  height: 100px;
  text-align: center;
}

.content_right p {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

button {
  width: 40px;
  height: 25px;
  margin: 0 10px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #a2a6aa;
  color: white;
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