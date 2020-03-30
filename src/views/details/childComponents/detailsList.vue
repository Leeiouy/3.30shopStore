<template>
  <div class="list">
    <detailsItem v-for="(item, index) in commentData" :key="item.index" :item="item"></detailsItem>
  </div>
</template>

<script>
import detailsItem from "views/details/childComponents/detailsItem.vue";
export default {
  name: "",
  props: {
    commentData: {
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
  components: {
    detailsItem
  }
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>