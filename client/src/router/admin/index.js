import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/admin";
import { iconLoader } from "../../utils/antd";
const DASHBORAD = "Dashborad";

const staticRoutes = [
  {
    path: "dashborad",
    name: DASHBORAD,
    component: () =>
      import(
        /* webpackChunkName: "dashborad" */ "@/views/admin/pages/dashborad.vue"
      ),
    meta: {
      title: "Dashborad",
      sidebar: {
        icon: iconLoader("UserOutlined")
      }
    }
  },
  {
    path: "test1",
    name: "Test1",
    component: () => import("@/views/admin/pages/test1.vue"),
    meta: {
      title: "test1",
      sidebar: {
        icon: iconLoader("UserOutlined")
      }
    }
  }
];

store.dispatch("UpdateRoutes", staticRoutes);

const routes = [
  {
    path: "/",
    name: "Admin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/admin/layout/index.vue"),
    redirect: { name: staticRoutes[0].name },
    children: staticRoutes
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
