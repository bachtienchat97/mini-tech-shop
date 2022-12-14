<script setup>
import { ref } from 'vue'
    const props = defineProps({
      item: Number
    })
    const count = ref(0)

    function addToCart(id) {
      if(id) {
        count.value++
      }
    }
</script>

<template>
  <button class="addToCartBttn" @click="addToCart(item)">
      Add To Cart  {{ count > 0 ? `(${count})` : null }}
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