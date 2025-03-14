import { createStore } from "vuex";
import filters from "./modules/filters.js";
import getModuleSettingsObject from "./helpers/GetModuleSettingsObject";

const store = createStore({
  namespaced: true,
  modules: {
    drivers: getModuleSettingsObject("drivers"),
    bus: getModuleSettingsObject("bus"),
    appointment: getModuleSettingsObject("appointment"),
    filters,
  },
});

export default store;
