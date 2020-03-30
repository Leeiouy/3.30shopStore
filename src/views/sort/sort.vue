<template>
  <div class="sort">
    <nav-bar class="navBar">
      <div slot="center">
        <p>分类</p>
      </div>
    </nav-bar>

    <sort-select :select="select"></sort-select>
  </div>
</template>

<script>
import navBar from "components/common/navbar/navBar.vue"; //顶部导航
import sortSelect from "views/sort/childComponents/sortSelect.vue";

import { sortData } from "network/sortData.js";
export default {
  name: "sort",
  data() {
    return {
      select: []
    };
  },
  methods: {},
  components: {
    navBar,
    sortSelect
  },
  mounted() {},
  created() {
    sortData().then(res => {
      console.log(res.data.data.category.list);
      this.select = res.data.data.category.list;
      console.log(this.select);
    });
  }
};
</script>

<style scoped>
.navBar {
  background-color: var(--color-tint);
  color: white;
}
.sort {
  height: 100vh;
  padding-top: 44px;
}
</style>