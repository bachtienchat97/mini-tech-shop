<script setup>
import { PRODUCTS } from "@/db/db";
import { ref } from 'vue'

const ItemCartAdded = () => {
  const res = PRODUCTS.filter((item,index,arr)=> item.id === arr[index].id)
  return res;
}
</script>
 
<template>
 <div class="cartItem">
    <div class="wrap-cart" v-for="item in PRODUCTS" :key="item.id">
      <img :src="item.productImage" />
      <div class="description">
        <p>
          <b>{{item.productName}}</b>
        </p>
        <p> Price: ${{item.price}}</p>
        <div class="countHandler">
          <button @click="removeFromCart(item.id)"> - </button>
          <input
            value="1"
            @change="(e) => updateCartItemCount(Number(e.target.value), id)"
          />
          <button @click="addToCart(item.id)"> + </button>
        </div>
      </div>
    </div>
 </div>
</template>
 
<style scoped>
 
</style>