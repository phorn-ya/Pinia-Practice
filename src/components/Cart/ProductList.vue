<script setup>
import { useCartStore } from './store/cartStore'
const cartStore = useCartStore()
</script>

<template>
  <ul>
    <li v-for="product in cartStore.products" :key="product.id">
      {{ product.name }} - ${{ product.price }}
      <button @click="cartStore.addToCart(product)">Add</button>
    </li>
  </ul>
</template>