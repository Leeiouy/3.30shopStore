<template>
  <div class="tab-Bar-Item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{Item_Active:isActive} ">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    path: {
      type: String
    }
  },
  computed: {
    isActive() {
      return this.$route.path == this.path;
    }
  },
  methods: {
    itemClick() {
      if (this.$route.path !== this.path) {
        this.$router.replace(this.path);
      }
      //   if (this.$route.path == this.path) {
      //     this.isActive = !this.isActive;
      //   }
    }
  },
  components: {}
};
</script>

<style scoped>
.tab-Bar-Item {
  text-align: center;
  flex: 1;
  font-size: 14px;
  /* background-color: black; */

}
.tab-Bar-Item img {
  width: 24px;
  margin-top: 3px;
}
.Item_Active {
  color: #ff4757;
}
</style>