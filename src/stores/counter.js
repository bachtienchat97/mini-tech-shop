import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const resItem = ref([]);
  const amountToTalCart = ref(0)
  const totalMoney = ref(0)
  async function addItem(item) {
    resItem.value.push(item)
    totalMoney.value += item.price;
    amountToTalCart.value++
    
    if(resItem.value.length) {
      const res = resItem.value.filter((items,index) => {
        return resItem.value.indexOf(items) === index
      })
      resItem.value = res;
    }
  }

  function removeFromCart(id) {
    if(id) {
      amountToTalCart.value++
    }
  }

  function addToCart(id) {
    if(id) {
      amountToTalCart.value--
    }
  }

  function updateCartItemCount(value) {
  }
  return { resItem, totalMoney, amountToTalCart, addItem, removeFromCart, addToCart ,updateCartItemCount}
})
