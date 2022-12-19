<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();
const { arrItemCart } = storeToRefs(store);


const props = defineProps({
  id: Number,
})


function amountItem (idx) {
  const counts = {};
  for (const num of arrItemCart.value) {
    counts[num.id] = counts[num.id] ? counts[num.id] + 1 : 1;
  }
  return counts[idx];
}
</script>
 
<template>
  <input
    :value="amountItem(props.id)"
    @change="updateCartItemCount($event.target.value, props.id)"
  />
</template>
 
<style scoped>
 
</style>