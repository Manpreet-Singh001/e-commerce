<script setup>
import { ref } from "vue";
import axios from "axios";

const email = ref("");
const password = ref("");

const login = async () => {
  try {
    const a = axios.create({
      withCredentials: true,
    });
    const res = await a.post(
      "http://127.0.0.1:5000/admin/login",
      {
        email: email.value,
        password: password.value,
      },
      { headers: { "content-type": "application/json" } }
    );
    email.value = "";
    password.value = "";
    console.log(res);
    // console.log(res.data);
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <p>Email: {{ email }}</p>
  <input v-model="email" />

  <p>Password</p>
  <input v-model="password" type="password" />

  <button @click="login">login</button>
</template>
