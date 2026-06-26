<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../store/todoStore'

const todoStore = useTodoStore()
const newTodo = ref('')

const addTodo = () => {
  if (!newTodo.value.trim()) return
  todoStore.addTodo(newTodo.value)
  newTodo.value = ''
}
</script>

<template>
  <div class="card">
    <h2>Exercise 3: Todo List</h2>

    <div class="input-row">
      <input v-model="newTodo" placeholder="Add Todo" />
      <button @click="addTodo">Add</button>
    </div>

    <ul class="todo-list">
      <li v-for="todo in todoStore.todos" :key="todo.id" class="todo-item">
        <span :class="{ done: todo.completed }">{{ todo.title }}</span>
        <div class="todo-actions">
          <button @click="todoStore.toggleTodo(todo.id)">
            {{ todo.completed ? 'Undo' : 'Complete' }}
          </button>
          <button class="btn-danger" @click="todoStore.deleteTodo(todo.id)">Delete</button>
        </div>
      </li>
    </ul>

    <div class="stats">
      <span>Total: {{ todoStore.totalTodos }}</span>
      <span>Completed: {{ todoStore.completedTodos.length }}</span>
      <span>Pending: {{ todoStore.pendingTodos.length }}</span>
    </div>
  </div>
</template>