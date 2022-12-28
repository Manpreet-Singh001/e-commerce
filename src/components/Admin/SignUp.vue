<script setup>
import { ref } from "vue";
import axios from "axios";

const username = ref("");
const email = ref("");
const password = ref("");

const signup = async () => {
  const a = axios.create({
    withCredentials: true,
  });

  const res = await a.post("http://127.0.0.1:5000/admin/signup", {
    username: username.value,
    email: email.value,
    password: password.value,
  });
  username.value = "";
  email.value = "";
  password.value = "";
  console.log(res.data);
};
</script>

<template>
  <div class="form-container">
    <p>Username: {{ username }}</p>
    <input v-model="username" />

    <p>Email: {{ email }}</p>
    <input v-model="email" />

    <p>Password</p>
    <input v-model="password" type="password" />

    <button type="submit" @click="signup">sign up</button>
  </div>
</template>
