<script setup>
import { RouterLink } from 'vue-router';

import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();

const { totalCart } = storeToRefs(store);

</script>


<template>
  <div class="navbar">
      <div class="links">
        <div class="navigate">
          <RouterLink to="/"> Shop </RouterLink>
          <RouterLink to="/about"> About </RouterLink>
        </div>
          <RouterLink to="/cart">
            <img src="@/assets/img/shopping-cart-64.png" alt="shopping cart">
            <div class="badge" v-show="totalCart > 0">{{ totalCart }}</div>
          </RouterLink>
      </div>
    </div>
</template>

<style scoped>
.navbar {
  width: 100%;
  padding: 20px;
  background-color: rgb(19, 19, 19);
}
.navbar img {
    width: 35px;
    height: 35px;
}

.navigate {
  margin-left: -20px;
}

.badge {
    border-radius: 50%;
    outline: none;
    background-color: rgba(231,24,24,1);
    text-align: center;
    font-size: 12px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 70%;
}
.links {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
}

.links a {
  text-decoration: none;
  color: white;
  margin-left: 20px;
  font-size: 25px;
    position: relative;

}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
