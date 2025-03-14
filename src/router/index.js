import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DriverView from "@/views/DriverView.vue";
import BusView from "@/views/BusView.vue";
import AppointmentView from "@/views/AppointmentView.vue";
import EditView from "../views/EditView.vue";
import AddEditBus from "@/views/AddEditBus.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/driver",
    name: "driver",
    component: DriverView,
  },
  {
    path: "/bus",
    name: "bus",
    component: BusView,
  },
  {
    path: "/appointment",
    name: "appointment",
    component: AppointmentView,
  },
  {
    path: "/edit/:id?",
    name: "edit",
    component: EditView,
  },
  {
    path: "/add-edit-bus/:id?",
    name: "add-bus",
    component: AddEditBus,
  },
  {
    path: "/contact",
    name: "contact",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes,
});
export default router;
