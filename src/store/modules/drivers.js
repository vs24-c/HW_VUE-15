// import { generateId, updateItemById, deleteItemById } from "@/utils/helpers";

// const store = {
//   namespaced: true,
//   state: () => ({
//     drivers: [
//       {
//         id: "1",
//         fullName: "John Doe",
//         experience: 5,
//       },
//       {
//         id: "2",
//         fullName: "Jane Smith",
//         experience: 8,
//       },
//       {
//         id: "3",
//         fullName: "Michael Johnson",
//         experience: 3,
//       },
//       {
//         id: "4",
//         fullName: "Emily Davis",
//         experience: 6,
//       },
//       {
//         id: "5",
//         fullName: "David Brown",
//         experience: 10,
//       },
//       {
//         id: "6",
//         fullName: "Sarah Wilson",
//         experience: 4,
//       },
//     ],
//   }),
//   getters: {
//     driverList: (state) => state.drivers,
//   },
//   mutations: {
//     createNewDriver(state, newDriver) {
//       state.drivers.push({ id: generateId(), ...newDriver });
//     },
//     updateDriver(state, updatedDriver) {
//       updateItemById(state.drivers, updatedDriver);
//     },
//     delete(state, id) {
//       deleteItemById(state.drivers, id);
//     },
//   },
//   actions: {
//     createDriver({ commit }, driver) {
//       commit("createNewDriver", driver);
//     },
//     updateDriver({ commit }, driver) {
//       commit("updateDriver", driver);
//     },
//     deleteDriver({ commit }, id) {
//       commit("delete", id);
//     },
//   },
// };

// export default store;
