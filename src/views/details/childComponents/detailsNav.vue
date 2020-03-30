<template>
  <div class="detailsNav">
    <navBar class="details_nav">
      <div slot="left" @click="Back" class="back">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center">
        <ul>
          <li
            v-for=" (item,index) in titles"
            :key="item.index"
            @click="isActive(index)"
            :class=" {titlesActive:index==titlesActive} "
          >{{ item }}</li>
        </ul>
      </div>
    </navBar>
  </div>
</template>

<script>
import navBar from "components/common/navbar/navBar.vue";

export default {
  name: "",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      titlesActive: 0
    };
  },
  methods: {
    isActive(index) {
      this.titlesActive = index;
      this.$emit("paramsTo", index);
    },
    Back() {
      this.$router.back();
    }
  },
  components: {
    navBar
  }
};
</script>

<style scoped>
.details_nav {
  background-color: white;
  height: 44px;
}
.detailsNav ul {
  display: flex;
  font-size: 14px;
}
.detailsNav ul li {
  list-style-type: none;
  flex: 1;
}

.detailsNav .back img {
  width: 40%;
  vertical-align: middle;
}
.titlesActive {
  color: var(--color-high-text);
}
</style>