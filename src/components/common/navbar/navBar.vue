<template>
  <div class="navBar">
    <div class="navleft">
      <slot name="left"></slot>
    </div>
    <div class="navcenter">
      <slot name="center"></slot>
    </div>
    <div class="navright">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped>
.navBar {
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.navleft,
.navright {
  width: 60px;
}
.navcenter {
  flex: 1;
}
</style>