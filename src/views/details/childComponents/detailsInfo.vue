<template>
  <div class="detailsInfo">
    <p>{{ detailInfo.title }}</p>
    <p>{{ detailInfo.key }}</p>

    <ul>
      <li v-for=" (item,index) in detailInfo.img" :key="item.index">
        <img :src="item" @load="imgLoad" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {
          load: null
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    imgLoad() {
      if (this.load) {
        clearTimeout(this.load);
      }
      this.load = setTimeout(() => {
        this.$emit("imgLoad");
      }, 300);
      
    }
  },
  components: {}
};
</script>

<style scoped>
p {
  margin: 10px 5px;
  text-align: center;
}
strong {
  text-align: center;
}
img {
  width: 100%;
}
</style>