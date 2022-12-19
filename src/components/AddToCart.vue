<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/counter';


import { PRODUCTS } from "@/db/db";

const store = useCounterStore();
const { amountCartITem } = storeToRefs(store); //un-
const { addCart } = store;

const props = defineProps({
  idProducts: Number
})

const countCart = ref(0);
const emit = defineEmits(['add-cart'])
  
  const addToCart = (id) => {
    if(id) {
      countCart.value++
    const item = PRODUCTS.find((item) => {
      return item.id === id
    })
    store.countItem(id);
    store.addCart(item,id);
    }
  }
  
</script>

<template>
  <button class="addToCartBttn" @click="addToCart(props.idProducts)">
      Add To Cart  {{ countCart > 0 ? `(${countCart})` : null }}
  </button>
</template>


<style scoped>
.addToCartBttn {
  background-color: transparent;
  border: 2px solid rgb(19, 19, 19);
  min-width: 100px;
  padding: 8px 20px;
  border-radius: 15px;
}

.addToCartBttn:hover {
  background-color: rgb(19, 19, 19);
  color: white;
  cursor: pointer;
}

</style>