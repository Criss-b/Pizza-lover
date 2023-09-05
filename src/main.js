import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LogRocket from "logrocket";
import "./assets/style.css";

LogRocket.init("7x0wrj/pizza-lover-uyjwj");
createApp(App).use(store).use(router).mount("#app");
