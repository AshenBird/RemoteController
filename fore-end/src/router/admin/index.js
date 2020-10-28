import { createRouter, createWebHistory } from "vue-router";
const DASHBORAD = "Dashborad";

export const staticRoutes = [
  {
    path: "dashborad",
    name: DASHBORAD,
    component: () =>
      import(
        /* webpackChunkName: "Admin" */ "@/views/admin/pages/dashborad.vue"
      )
  }
];

const routes = [
  {
    path: "/admin",
    name: "Admin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Admin" */ "@/views/admin/layout/index.vue"),
    redirect: { name: staticRoutes[0].name },
    children: staticRoutes
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
