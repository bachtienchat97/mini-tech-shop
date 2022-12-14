<script setup>
import Navbar from "@/components/Navbar.vue";
import CartItem from "@/components/CartItem.vue";

import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore();
const { count } = storeToRefs(store);

</script>

<template>
  <Navbar />
  <div className="cart">
    <div>
      <h1>Your Cart Items</h1>
    </div>
    <div className="cart">
      <CartItem />

      <div className="checkout">
        <p>Subtotal: ${{ count }}</p>
        <div class="wrap-btn">
        <router-link to="/">
          <button>Continue Shopping</button>
        </router-link>

        <router-link to="/checkout">
          <button>Checkout</button>
        </router-link>
        </div>

      </div>

      <h1 v-if="false">Your Shopping Cart is Empty</h1>
    </div>
  </div>
</template>

<style>
.cart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
}

.wrap-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  padding: 25px;
  box-shadow: 0px 3px 15px rgb(0 0 0 / 20%);
  border-radius: 25px;
  margin: 30px;
}
.cartItem {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cartItem img {
  width: 200px;
}

.cartItem .description {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 30px;
}

.countHandler input {
  width: 40px;
  text-align: center;
  font-weight: bolder;
}

.checkout {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.checkout .wrap-btn {
  display: flex;
  align-items: center;
}

.checkout button {
  width: 150px;
  height: 50px;
  background-color: rgb(19, 19, 19);
  color: white;
  border: none;
  border-radius: 8px;
  margin: 10px;
  cursor: pointer;
  transition: 0.4s ease;
}

.wrap-btn :hover button{
  background-color: #ffffff;
  color: rgb(19, 19, 19);
  border: 1px solid rgb(19, 19, 19);
}
</style>