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
        /* webpackChunkName: "Admin" */ "@/views/admin/pages/dashborad.vue"
      ),
    meta: {
      title: "Dashborad",
      sidebar: {
        icon: iconLoader("UserOutlined")
      }
    },
    children: [
      {
        path: "dashborad3",
        name: DASHBORAD + 3,
        component: () =>
          import(
            /* webpackChunkName: "Admin" */ "@/views/admin/pages/dashborad.vue"
          ),
        meta: {
          title: "Dashborad3",
          sidebar: {
            icon: iconLoader("UserOutlined")
          }
        }
      },
      {
        path: "dashborad4",
        name: DASHBORAD + 4,
        component: () =>
          import(
            /* webpackChunkName: "Admin" */ "@/views/admin/pages/dashborad.vue"
          ),
        meta: {
          title: "Dashborad4",
          sidebar: {
            icon: iconLoader("UserOutlined")
          }
        }
      }
    ]
  },
  {
    path: "dashborad2/:id",
    name: DASHBORAD + 2,
    component: () =>
      import(
        /* webpackChunkName: "Admin" */ "@/views/admin/pages/dashborad.vue"
      ),
    meta: {
      title: "Dashborad2",
      sidebar: {
        icon: iconLoader("UserOutlined"),
        params: {
          id: 2
        }
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
