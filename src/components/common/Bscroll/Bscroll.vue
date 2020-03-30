<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "",
  props: {
    probe_type: {
      type: Number, //由父组件传递值是否监听实时位置，不传递默认为0不监听
      default: 0
    },
    load: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  methods: {},
  components: {},
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true, //click事件有效
      probeType: this.probe_type, //判断是否监听事件
      pullUpLoad: this.load
    });

    this.scroll.on("scroll", position => {
      this.$emit("contentScroll", position);
    });

    this.scroll.on("pullingUp", () => {
      this.$emit("pullingup");
    });
  }
};
</script>

<style>
</style>