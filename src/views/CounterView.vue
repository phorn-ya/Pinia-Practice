<script setup>
import { useCounterStore } from '../store/counterStore'
const counter = useCounterStore()
</script>

<template>
  <div class="card">
    <h2>Exercise 1: Counter Store</h2>
    <p>Current Count: {{ counter.count }}</p>
    <p>Double Count: {{ counter.doubleCount }}</p>

    <div class="btn-group">
      <button @click="counter.increment">Increment</button>
      <button @click="counter.decrement">Decrement</button>
      <button @click="counter.reset" class="btn-secondary">Reset</button>
    </div>
  </div>
</template>