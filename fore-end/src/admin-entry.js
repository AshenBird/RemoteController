import { createApp } from "vue";
import App from "./App.vue";
import register from "./registerServiceWorker";
import router from "./router/admin";
import store from "./store/admin";
import componentRegister from "./plugins/component-register";
import components from "./components/admin";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

register("admin");
createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .use(componentRegister, components)
  .mount("#app");
