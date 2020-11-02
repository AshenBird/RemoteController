import { createApp } from "vue";
import App from "./App.vue";
import socket from "./plugins/socket";
import register from "./registerServiceWorker";
import router from "./router/mobile";
import store from "./store/mobile";

register("mobile");
createApp(App)
  .use(store)
  .use(router)
  .use(socket)
  .mount("#app");
