<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();
const props = defineProps({
  idProducts: Number
})
const { count } = storeToRefs(store);

const countCart = ref(0);

  const addToCart = (id) => {
    console.log(id)
    if(id) {
      count.value++
      countCart.value++
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
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 15px;
}

.addToCartBttn:hover {
  background-color: rgb(19, 19, 19);
  color: white;
  cursor: pointer;
}

</style>