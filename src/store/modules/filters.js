const store = {
  namespaced: true,
  state: () => ({
    filter: [],
    filterEx: {
      fromExperience: null,
      toExperience: null,
    },
  }),
  getters: {
    driversList: (state, getters, rootState, rootGetters) => {
      return rootGetters["drivers/getItemsList"];
    },
    filteredDrivers: (state) => state.filter,
    filterExperience: (state) => state.filterEx,

    allFilterDriver: (state, getters) => {
      let filteredList = getters.driversList;

      if (state.filter.length > 0) {
        filteredList = filteredList.filter((driver) =>
          state.filter.some((filterDriver) => filterDriver.id === driver.id)
        );
      }
      if (state.filterEx.fromExperience) {
        filteredList = filteredList.filter(
          (driver) => driver.experience >= state.filterEx.fromExperience
        );
      }
      if (state.filterEx.toExperience) {
        filteredList = filteredList.filter(
          (driver) => driver.experience <= state.filterEx.toExperience
        );
      }
      return filteredList;
    },
  },
  mutations: {
    searchName(state, filterData) {
      state.filter = filterData;
    },
    setExperienceFilter(state, { fromExperience, toExperience }) {
      state.filterEx.fromExperience = fromExperience ?? null;
      state.filterEx.toExperience = toExperience ?? null;
    },
  },
  actions: {
    searchName({ commit, getters }, searchName) {
      const resSearchName = getters.driversList.filter((driver) =>
        driver.fullName.toLowerCase().includes(searchName.toLowerCase())
      );
      commit("searchName", resSearchName);
    },
    updateExperienceFilter({ commit }, { fromExperience, toExperience }) {
      commit("setExperienceFilter", { fromExperience, toExperience });
    },
  },
};

export default store;
