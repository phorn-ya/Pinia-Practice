<script setup>
import { useCartStore } from '../store/cartStore'

const cartStore = useCartStore()
</script>

<template>
  <div class="card">
    <h2>Exercise 4: Shopping Cart</h2>

    <h3>Products</h3>
    <ul class="product-list">
      <li v-for="product in cartStore.products" :key="product.id" class="product-item">
        <span>{{ product.name }} — <strong>${{ product.price }}</strong></span>
        <button @click="cartStore.addToCart(product)">Add to Cart</button>
      </li>
    </ul>

    <h3>Cart</h3>
    <ul class="cart-list">
      <li v-for="item in cartStore.cart" :key="item.id" class="cart-item">
        <span>{{ item.name }} — <strong>${{ item.price }}</strong></span>
        <button class="btn-danger" @click="cartStore.removeFromCart(item.id)">Remove</button>
      </li>
    </ul>

    <div class="stats">
      <span>Total Items: {{ cartStore.totalItems }}</span>
      <span>Total Price: ${{ cartStore.totalPrice }}</span>
    </div>

    <button class="btn-secondary" @click="cartStore.clearCart">Clear Cart</button>
  </div>
</template>