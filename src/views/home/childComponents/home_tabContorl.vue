<template>
  <div>
    <div class="tabContorl">
      <div v-for="(item,index) in titles" class="tabContorl-item" @click="itemClick(index)">
        <span :class="{active:index==itemIndex }">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    titles: {
      type: Array
    }
  },
  data() {
    return {
      itemIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.itemIndex = index;
      this.$emit("tabClick", index);
    }
  }
};
</script>

<style scoped>
.tabContorl {
  width: 100%;
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: white;
}
.tabContorl-item {
  flex: 1;
}

.active {
  padding-bottom: 5px;
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);
}
</style>

