<template>
  <div class="profile">
    <!-- <nav-bar class="navBar">
      <div slot="center">
        <p>我的</p>
      </div>
    </nav-bar>-->
    <h1>登录</h1>
    <div class="WeChat">
      <img src="~assets/img/profile/weChat.png" alt />
      <span>微信登录</span>
    </div>
    <p class="other">其他登录方式</p>
    <div class="more">
      <div>
        <img src="~assets/img/profile/QQ.png" />
        <p>QQ登录</p>
      </div>
      <div>
        <img src="~assets/img/profile/phone.png" />
        <p>手机登录</p>
      </div>
      <div>
        <img src="~assets/img/profile/user.png" />
        <p>账号登录</p>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "components/common/navbar/navBar.vue"; //顶部导航
export default {
  name: "profile",
  data() {
    return {};
  },
  methods: {},
  components: {
    navBar
  }
};
</script>

<style scoped>
/* 
.navBar {
  background-color: var(--color-tint);
  color: white;
} */
.profile {
  padding-top: 44px;
  text-align: center;
}
h1 {
  margin: 2.5rem 0 2rem;
  font-weight: 500;
}

.WeChat {
  width: 70%;
  margin: 0 auto;
  height: 40px;
  border-radius: 20px;
  background-color: rgb(9, 187, 7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.WeChat span {
  display: block;
  margin: 0 8px;
}

img {
  width: 25px;
}
.other {
  margin: 2.5rem 0;
  color: #b2bec3;
  font-size: 14px;
}
.other::before {
  display:block;
  margin: 30px auto;
  content: "";
  width: 15px;
  height: 1px ;
  border: 1px solid #dfe6e9;
  
  
}
.more {
  margin: 0 auto;
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>