<template>
  <div>
    <p>{{ itemParams.key }}</p>
    <div class="clera_fix">
      <div class="left">
        <ul class="top ml7" v-for="(item, index) in itemParams.tables" :key="item.index">
          <li>
            <span>{{ item[0] }}</span>
          </li>
        </ul>
      </div>
      <ul class="top" v-for="(item, index) in itemParams.tables" :key="item.index">
        <li>
          <span>{{ item[1] }}</span>
        </li>
        <li>
          <span>{{ item[2] }}</span>
        </li>
        <li>
          <span>{{ item[3] }}</span>
        </li>
        <li>
          <span>{{ item[4] }}</span>
        </li>
      </ul>
    </div>
    <p>{{itemParams.title }}</p>
    <div class="clera_fix">
      <div class="left">
        <ul class="top ml7" v-for="(item, index) in itemParams.set" :key="item.index">
          <li>
            <span>{{ item.key }}</span>
          </li>
        </ul>
      </div>
      <ul class="top color" v-for="(item, index) in itemParams.set" :key="item.index">
        <li>
          <span>{{ item.value }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    itemParams: {
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
p{
  margin: 10px 5px;
  font-weight: 800;
}
ul {
  display: flex;
  justify-content: space-around;
  text-align: left;
}
li {
  margin: 10px 0;
  list-style-type: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.color {
  color: var(--color-high-text);
}
.ml7 {
  margin-left: 7px;
}
</style>