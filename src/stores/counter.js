import { ref } from 'vue'
import { defineStore } from 'pinia'

import { firstDupeIndex } from '@/helpers/firstDuplicate';

export const useCounterStore = defineStore('counter', () => {
  const arrItemCart = ref([]);
  const countItemArr = ref([]);
  const totalCart = ref(0);
  const totalMoney = ref(0);

  function removeFromCart(id) {
    const findDuplicate = arrItemCart.value.filter((item,index) => {
      return arrItemCart.value.indexOf(item) !== index
    })

    const itemFinded = arrItemCart.value.find(item => item.id === id)
    //find out the first position of item duplicate from array 
    const itemDuplicate = firstDupeIndex(arrItemCart.value);
    if(findDuplicate.length > 0) {
      totalCart.value--;
      totalMoney.value -= itemFinded.price;
      let newArr = arrItemCart.value.slice(itemDuplicate + 1);
      arrItemCart.value = newArr;
    }

    if( findDuplicate.length === 0 ) {
      totalCart.value--;
      totalMoney.value -= itemFinded.price;
      const index = arrItemCart.value.indexOf(itemFinded);
      let newArr = arrItemCart.value.slice(index + 1);
      arrItemCart.value = newArr;
    }
  }

  function addCart(item,id) {
    arrItemCart.value.push(item)
    if(id) {
      totalCart.value++
      const res = arrItemCart.value.find(items => {
        return items.id === id
      })
      totalMoney.value += res.price;
    }
  }

  function countItem(id) {
    if(id) {
      countItemArr.value.push(id);
    }
  }

  function updateCartItemCount(value, id) {
    //based on amounts value of input to caculate total money
  }

  return { countItemArr, arrItemCart, totalMoney, totalCart, removeFromCart, addCart ,updateCartItemCount, countItem}
})
