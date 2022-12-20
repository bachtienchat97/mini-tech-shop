<script setup>
import { PRODUCTS } from '@/db/db';
import Input from "@/components/Input.vue";

import { ref,onMounted,onBeforeUpdate } from 'vue';

import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();
const { arrItemCart,cart } = storeToRefs(store);
const { addCart,removeFromCart } = store;

const abortDup = ref([]);

onMounted(() => {
  handleDuplicateCart();
})

onBeforeUpdate(() => {
  handleDuplicateCart();
})

function handleDuplicateCart() {
const arrLength = arrItemCart.value.length;

  if(arrLength > 0) {
    const isDup = arrItemCart.value.filter((items,index) => {
      return arrItemCart.value.indexOf(items) !== index
    })

    const abortDup = arrItemCart.value.filter((items,index) => {
      return arrItemCart.value.indexOf(items) === index
    })

    if(isDup.length > 0) {
      cart.value = abortDup;
    }
  }
}

function addToCart(id) {
  const item = PRODUCTS.find((item) => {
      return item.id === id
  })
  store.addCart(item,id)
}

</script>
 
<template>
  <div class="cartItem">
    <div class="wrap-cart" v-for="item in cart" :key="item.id">
      <img :src="item.productImage" />
      <div class="description">
        <p>
          <b>{{ item.productName }}</b>
        </p>
        <p>Price: ${{ item.price }}</p>
        <div class="countHandler">
          <button class="left" @click="removeFromCart(item.id)">-</button>
          <Input :id="item.id"/>
          <button class="right" @click="addToCart(item.id)">+</button>
        </div>
      </div>
    </div>
  </div>
</template>
 
<style scoped>
.countHandler {
  display: flex;
  margin: 15px 0;
}
 .countHandler .left{
  padding: 10px 15px;
  border-radius: 5px 0 0 5px;
  font-size: 16px;
  border: none;
  background: rgb(216, 210, 210);
  transition: 0.3 ease;
 }

.countHandler .right{
  padding: 10px 15px;
  border-radius: 0 5px 5px 0px;
  font-size: 16px;
  border: none;
  background: rgb(216, 210, 210);
  transition: 0.3 ease;
 }

 .countHandler button:hover{
  opacity: 0.8;
  cursor: pointer;
 }

 .countHandler input{
  border-radius: 0px;
  border: 1px solid rgb(177, 173, 173) ;
 }
</style>