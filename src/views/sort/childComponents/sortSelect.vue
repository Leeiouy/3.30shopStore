<template>
  <div class="sortSelect">
    <ul v-if="select">
      <li
        v-for="(item, index) in select"
        :key="item.index"
        :class=" { active:ActiveIndex==index } "
        @click="selectActive(index)"
      >{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    select: {
      type: Array,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      ActiveIndex: 0
    };
  },
  methods: {
    selectActive(index) {
      this.ActiveIndex = index;
    }
  },
  components: {}
};
</script>

<style scoped>
.sortSelect {
  width: 20%;
  height: 100vh;
  text-align: center;
}
ul {
  display: flex;
  flex-wrap: wrap;
  background-color: #f1f1f1;
}
li {
  width: 100%;
  height: 50px;
  line-height: 50px;
  list-style: none;
}
.active {
  background-color: white;
  color: var(--color-tint);
}
</style>