<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt />
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
.back-top {
  width: 40px;
  position: fixed;
  top: 83%;
  right: 4%;
  z-index: 20;
  transition: all 0.5s;
}
.back-top img {
  width: 100%;
}
</style>