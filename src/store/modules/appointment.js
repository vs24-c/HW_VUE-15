import { generateId, deleteItemById } from "../../utils/helpers";

const store = {
  namespaced: true,
  state: () => ({
    appts: [
      {
        id: 1,
        appt: [
          {
            driverID: "1",
            driverObj: {
              id: "1",
              fullName: "John Doe",
              experience: 5,
            },
          },
          {
            busID: "1",
            busObj: {
              id: "1",
              licensePlate: "АВ1234СД",
              seats: 50,
            },
          },
        ],
      },
      {
        id: "2",
        appt: [
          {
            driverID: "2",
            driverObj: {
              id: "2",
              fullName: "Jane Smith",
              experience: 8,
            },
          },
          {
            build: "2",
            busObj: {
              id: "2",
              licensePlate: "ВС5678ДЕ",
              seats: 45,
            },
          },
        ],
      },
    ],
  }),
  getters: {
    getAppts: (state) => state.appts,
  },
  mutations: {
    create(state, newAppt) {
      state.appts.push({ id: generateId(), ...newAppt });
    },
    deletAppt(state, id) {
      deleteItemById(state.appts, id);
    },
  },
  actions: {
    creatAppointment({ commit }, newAppt) {
      commit("create", newAppt);
    },
    deleteAppointmen({ commit }, id) {
      commit("deletAppt", id);
    },
  },
};
export default store;
