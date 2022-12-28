<script setup>
import AdminSignUp from "./components/Admin/SignUp";
import AdminLogin from "./components/Admin/AdminLogin";
import axios from "axios";

const logout = async () => {
  const a = axios.create({ withCredentials: true });
  const res = await a.post("http://127.0.0.1:5000/admin/logout", {});
  console.log(res.data);
};
</script>

<template>
  <AdminSignUp />
  <AdminLogin />
  <button @click="logout">logout</button>
</template>
