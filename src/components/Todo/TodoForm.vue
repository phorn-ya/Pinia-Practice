<script setup>
import { ref } from 'vue'
import { useTodoStore } from '/store/todoStore'

const todoStore = useTodoStore()
const title = ref('')

const addTodo = () => {
  if (!title.value.trim()) return
  todoStore.addTodo(title.value)
  title.value = ''
}
</script>

<template>
  <div>
    <input v-model="title" placeholder="New Todo">
    <button @click="addTodo">Add</button>
  </div>
</template>