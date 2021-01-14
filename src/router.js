import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/todos",
    name: "Todos",
    component: () => import("./views/Todos.vue")
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
