<template>
  <div id="tab-Bar">
    <slot></slot>
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
#tab-Bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  border-top: 2px solid #ecf0f1;
  background-color: white;
}
</style>