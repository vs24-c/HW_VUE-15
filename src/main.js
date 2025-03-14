import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plagins/vuetify";
import ThemComponent from "./components/ThemComponent.vue";
import MainLayout from "./layouts/MainLayout.vue";
import DriversLayout from "./layouts/DriversLayout.vue";
import BusLayout from "./layouts/BusLayout.vue";
import AppointmentLayout from "./layouts/AppointmentLayout.vue";

const app = createApp(App);

app.use(store);
app.use(router);

//--global components---//
app.component("ThemComponent", ThemComponent);
app.component("MainLayout", MainLayout);
app.component("DriversLayout", DriversLayout);
app.component("BusLayout", BusLayout);
app.component("AppointmentLayout", AppointmentLayout);

app.use(vuetify);
app.mount("#app");
