<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend" :key="item.id" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{ item.title }}</div>
      </a>
    </div>

   
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  justify-content: space-around;
  font-size: 14px;
  padding: 10px 0 15px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  width: 20%;
}
.recommend-item img {
  width: 100%;
  display: block;
  margin-bottom: 8px;
}
</style>