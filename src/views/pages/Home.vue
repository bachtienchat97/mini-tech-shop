<script setup>
import Navbar from "@/components/Navbar.vue";
import AddToCart from "@/components/AddToCart.vue";
import { PRODUCTS } from "@/db/db";

import { ref } from "vue";

const amountCart = ref(0);

function addToCart(count){
  if(count > 0) amountCart.value++
} 
</script>

<template>
    <Navbar :amountCart="amountCart"/>
    <div class="shop">
      <div class="shopTitle">
        <h1>Mini Tech Shop</h1>
      </div>

      <div class="products">
        <div class="product" v-for="(item,index) in PRODUCTS" :key="item.id">
            <img :src="item.productImage" />
            <div class="description">
                <p>
                <b>{{item.productName}}</b>
                </p>
                <p>{{item.price}} $</p>
            </div>
            <AddToCart v-bind:id="item.id" v-on:add-to-cart="addToCart"></AddToCart>
        </div>
      </div>
    </div>
</template>

<style scoped>
.shopTitle {
  margin-top: 50px;
  text-align: center;
  font-size: 40px;
}

.shopTitle h1 {
  margin-bottom: 10px;
}

.products {
  max-width: 1000px;
  height: auto;
  margin: 0 auto 40px auto;
  gap: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
}

.product {
  border-radius: 15px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product img {
  width: 250px;
  margin: 0 20px;
}

.product .description {
  text-align: center;
}

.product:hover {
  transition: 0.3s ease-in;
  cursor: pointer;
}


@media (min-width: 1024px) {
}
</style>
