<script setup>
import { ref } from 'vue'
import { useUserStore } from '../store/userStore'

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
    <h2>Exercise 2: User Store</h2>

    <div class="info-row"><span class="label">Name:</span> {{ user.name }}</div>
    <div class="info-row"><span class="label">Age:</span> {{ user.age }}</div>
    <div class="info-row"><span class="label">Email:</span> {{ user.email }}</div>

    <input v-model="name" placeholder="Name" />
    <input v-model="age" type="number" placeholder="Age" />
    <input v-model="email" placeholder="Email" />

    <button @click="updateUser">Update User</button>
  </div>
</template>