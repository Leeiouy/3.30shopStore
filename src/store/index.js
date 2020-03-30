import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: [],
    allSelect: false
  },
  mutations: {
    addCart(state, commodity) {
      let product = state.cartList.find(function (item) {
        return item.iid == commodity.iid
      }) //find对数组进行遍历，返回符合条件的项
      if (product) {
        product.index += 1
      } else {
        state.cartList.push(commodity)
      }
    },
    selectClick(state, index) {
      state.cartList[index].select = !state.cartList[index].select
      var all = state.cartList.every(item => item.select === true)
      if (all) {
        state.allSelect = true
      } else {
        state.allSelect = false
      }
    },
    addBtn(state, index) {
      state.cartList[index].index += 1
    },
    subBtn(state, index) {
      if (state.cartList[index].index !== 1) {
        state.cartList[index].index -= 1
      }
    },
    allClick(state) {
      state.cartList.forEach(item => item.select = !state.allSelect)
      state.allSelect = !state.allSelect
    }
  },
  getters: {
    allPrice: function (state) {
      let price = 0
      state.cartList.filter(item => item.select == true).forEach(item => price += parseInt(item.price) * item.index)
      return price
    }
  }
})