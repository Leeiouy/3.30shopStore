<template>
  <div class="Banner_scroll_item left">
    <slot @load="imgLoad"></slot>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    imgLoad() {
      console.log(123);
    }
  },
  components: {}
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>