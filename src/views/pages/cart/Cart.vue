<script setup>
import Navbar from "@/components/Navbar.vue";

</script>

<template>
  <Navbar/>
   <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button @click="$router.push("/")"> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
</template>

<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cartItem {
  width: 700px;
  height: 250px;
  display: flex;

  align-items: center;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  margin: 30px;
}

.cartItem img {
  width: 200px;
}

.cartItem .description {
  width: 100%;
  font-size: 30px;
}

.countHandler input {
  width: 40px;
  text-align: center;
  font-weight: bolder;
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
}

</style>