<template>
  <div id="Scrool">
    <ul slot="img">
      <li v-for="item in banners" :key="item.id">
        <img :src="item.image" @load="imgload" />
      </li>
    </ul>
    <div class="ScroolDat">
      <ul>
        <li
          v-for="(item, index) in banners"
          :key="index"
          class="Dot"
          :class="{DotActive:index==liCount} "
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isActive: true,
      liCount: 0
    };
  },
  computed: {},
  methods: {
    scroolRun() {
      var ul = document.getElementById("Scrool").children[0];
      ul.style.width = (this.banners.length + 1) * 100 + "%";
      var newli = ul.children[0].cloneNode(true);
      ul.appendChild(newli);

      var liW = parseInt(ul.clientWidth) / this.banners.length;
      var count = 1;
      setInterval(() => {
        ul.style.transition = 0.5 + "s";
        if (count > this.banners.length) {
          count = 0;
          ul.style.transition = 0 + "s";
        }
        ul.style.transform = "translateX(-" + liW * count + "px)";
        this.active(count, this.banners.length);
        count++;
      }, 2000);
    },

    active(count, num) {
      if (count == num) {
        return (this.liCount = 0);
      }
      this.liCount = count;
    },
    imgload() {
      this.$store.commit("bannerLoadChange");
      console.log("scroll change");
    }
  },

  mounted() {
    setTimeout(() => {
      this.scroolRun();
    }, 300);
  }
};
</script>






<style scoped>
#Scrool {
  overflow: hidden;
  position: relative;
}
#Scrool .ScroolDat {
  position: absolute;
  bottom: 8%;
  width: 100%;
  height: 20px;
}
.Dot {
  display: block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: seashell;
}

.DotActive {
  background-color: #cc8e35;
}

#Scrool > ul {
  width: 400%;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
}

.ScroolDat ul {
  display: flex;
  justify-content: center;
}
.ScroolDat ul li {
  margin: 0 3px;
}
#Scrool > ul li img {
  width: 100%;
}
</style>

