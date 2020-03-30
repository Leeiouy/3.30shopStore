<template>
  <div class="SCROLL" v-show="isShow">
    <div id="Banner_scroll" class="clear-fix">
      <slot></slot>
    </div>
    <div id="Dot">
      <div
        v-for="(item,index) in scrollChildLength "
        class="Dot_item"
        :class="{DotActive:index==Dotindex}"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      scrollChildLength: null,
      isShow: false,
      count: 0,
      Dotindex: 0
    };
  },
  methods: {
    scrollRun() {
      var scroll = document.getElementById("Banner_scroll");
      this.scrollChildLength = scroll.children.length;
      if (scroll.children[0]) {
        scroll.style.width = scroll.children.length + 1 * 100 + "%";
        var newDiv = scroll.children[0].cloneNode(true);
        scroll.appendChild(newDiv);

        this.scrollPositon(scroll);
        this.isShow = true;

        setInterval(() => {
          this.scrollPositon(scroll);
        }, 2000);
      }
    },
    scrollPositon(scroll) {
      scroll.style.width = scroll.children.length * 100 + "%"; //设置scroll宽度
      var runwidth = parseFloat(scroll.clientWidth) / scroll.children.length; //滚动的距离
      var divWidth = 100 / scroll.children.length; //每个子div占比

      scroll.style.transition = 1 + "s";

      for (let i = 0; i < scroll.children.length; i++) {
        scroll.children[i].style.width = divWidth + "%";
      }
      if (this.count >= scroll.children.length) {
        this.count = 0;
        scroll.style.transition = 0 + "s";
      }
      scroll.style.left = -this.count * runwidth + "px";
      this.Dot(this.count);
      this.count += 1;
    },
    Dot(count) {
      if (count >= this.scrollChildLength) {
        this.Dotindex = 0;
      } else {
        this.Dotindex = count;
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.scrollRun();
    }, 200);
  }
};
</script>

<style scoped>
#Banner_scroll {
  overflow: hidden;
  position: relative;
  left: 0px;
  transition: all 1s;
}
.SCROLL {
  width: 100%;
  overflow: hidden;
  position: relative;
}
#Dot {
  width: 100%;
  height: 13px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10%;
  display: flex;
  justify-content: center;
}
.Dot_item {
  display: block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: seashell;
  margin: 0 5px;
}

.DotActive {
  background-color: #cc8e35;
}
</style>