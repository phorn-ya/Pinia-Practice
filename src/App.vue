<script setup>
import CartView from './views/CartView.vue';
import CounterView from './views/CounterView.vue';
import ThemeView from './views/ThemeView.vue';
import TodoView from './views/TodoView.vue';
import UserView from './views/UserView.vue';

</script>

<template>
   <div class="container">
    <h1>Pinia Practice Exercises</h1>
    <CounterView />
      <UserView />
      <TodoView />
      <CartView />
      <ThemeView />
   </div>
</template>
