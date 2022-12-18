<script setup>
import Navbar from '@/components/Navbar.vue';

import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore();
const { totalMoney, totalCart, arrItemCart } = storeToRefs(store);

function resetCart() {
  totalMoney.value = 0;
  totalCart.value = 0;
  arrItemCart.value.length = 0;
}
</script>
 
<template>
  <Navbar />
  <p>Payment Success : {{ totalMoney }}$</p>
  <router-link to="/" @click="resetCart">
    <button>Continue Shopping</button>
  </router-link>
</template>
 
<style scoped>
 p {
  margin-top: 35px;
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  font-family: monospace;
}

button {
  width: 150px;
  height: 50px;
  background-color: #ffffff;
  color: rgb(19, 19, 19);
  border: 1px solid rgb(19, 19, 19);
  border-radius: 8px;
  margin: 10px;
  cursor: pointer;
  transition: 0.3s ease;
}
a {
  display: flex;
  justify-content: center;
  font-size: 15px;
  text-decoration: none;
}

button:hover{
  background-color: rgb(19, 19, 19);
  color: #ffffff;
  border: 1px solid rgb(19, 19, 19);
}
</style>