import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminSignup from "./components/Admin/SignUp";

const routes = [
  { path: "/admin/login", component: AdminLogin },
  { path: "/admin/signup", component: AdminSignup },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(""),
  routes, // short for `routes: routes`
});

const app = createApp(App);
app.use(router);
app.mount("#app");
