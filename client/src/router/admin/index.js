import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/admin";
import { iconLoader } from "../../utils/antd";
const DASHBORAD = "Dashborad";
const PREVIEW = "Preview";
const staticRoutes = [
  {
    path: "preview",
    name: PREVIEW,
    component: () =>
      import(/* webpackChunkName: "Admin" */ "@/views/admin/pages/preview.vue"),
    meta: {
      title: "首页",
      sidebar: {
        icon: iconLoader("HomeOutlined")
      }
    }
  },
  {
    path: "dashborad",
    name: DASHBORAD,
    component: () =>
      import(
        /* webpackChunkName: "Admin" */ "@/views/admin/pages/dashborad.vue"
      ),
    meta: {
      title: "Dashborad",
      sidebar: {
        icon: iconLoader("DashboardOutlined")
      }
    }
  }
];

store.dispatch("UpdateRoutes", staticRoutes);

const routes = [
  {
    path: "/admin",
    name: "Admin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Admin" */ "@/views/admin/layout/index.vue"),
    // redirect: { name: staticRoutes[0].name },
    children: staticRoutes
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
