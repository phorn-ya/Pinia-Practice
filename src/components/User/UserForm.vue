<script setup>
import { ref } from 'vue'
import { useUserStore } from './store/userStore'

const user = useUserStore()

const name = ref(user.name)
const age = ref(user.age)
const email = ref(user.email)

const updateUser = () => {
  user.updateName(name.value)
  user.updateAge(age.value)
  user.updateEmail(email.value)
}
</script>

<template>
  <div class="card">
    <p>Name: {{ user.name }}</p>
    <p>Age: {{ user.age }}</p>
    <p>Email: {{ user.email }}</p>

    <input v-model="name" placeholder="Name">
    <input v-model="age" placeholder="Age">
    <input v-model="email" placeholder="Email">

    <button @click="updateUser">Update</button>
  </div>
</template>