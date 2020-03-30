<template>
  <div class="comment">
    <div class="clear-fix title">
      <span class="left">用户评论</span>
      <span class="right">更多</span>
    </div>
    <div v-if="comment.user!== undefined" class="user">
      <img :src="comment.user.avatar" alt />
      <span>{{ comment.user.uname }}</span>
    </div>
    <div class="text">
      <p>{{ comment.content }}</p>
      <span>{{ comment.style }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    comment: {
      type: Object,
      default() {
        return {};
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
.comment {
  margin: 15px 10px;
}
.title {
  padding: 15px 25px;
  border-top: 1px solid bisque;
  border-bottom: 1px solid bisque;
}
.user {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.user img {
  width: 10%;
  margin: 0 10px;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
}
.text {
  margin: 0 10px;
}
.text span {
  font-size: 14px;
  color: #b0b4b6;
  margin: 5px 0;
}
</style>