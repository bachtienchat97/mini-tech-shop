import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const arrItemCart = ref([]);
  const countItemArr = ref([]);
  const totalCart = ref(0);
  const totalMoney = ref(0);
  const cart = ref([]);

  function removeFromCart(id) {
    
    const findDuplicate = arrItemCart.value.filter((item,index) => {
      return arrItemCart.value.indexOf(item) !== index;
    })
    const itemFinded = arrItemCart.value.find(item => {
      return item.id === id
    })
    let firstItemDup = arrItemCart.value.findIndex(item => item.id === itemFinded.id)
    //find out the first position index of item duplicate from array 
    if( itemFinded.id === id && findDuplicate.length > 0 && totalMoney.value > 0) {
      totalMoney.value -= itemFinded.price;
      arrItemCart.value.splice(firstItemDup,1);
      cart.value = arrItemCart.value;
      totalCart.value = arrItemCart.value.length;
    }

    if(  itemFinded.id === id && findDuplicate.length === 0 && totalMoney.value > 0) {
      totalMoney.value -= itemFinded.price;
      const index = arrItemCart.value.indexOf(itemFinded)
      if(index > -1) {
        arrItemCart.value.splice(index,1);
        cart.value =  arrItemCart.value;
        totalCart.value = arrItemCart.value.length;
      }
    }
  }

  function addCart(item,id) {
    arrItemCart.value.push(item);
    let arrLength = arrItemCart.value.length;
    if(id) {
      totalCart.value = arrLength;
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

  return { cart,countItemArr, arrItemCart, totalMoney, totalCart, removeFromCart, addCart ,updateCartItemCount, countItem}
})
