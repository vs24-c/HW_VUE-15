// import { generateId, updateItemById, deleteItemById } from "@/utils/helpers";

// const store = {
//   namespaced: true,
//   state: () => ({
//     buses: [
//       {
//         id: "1",
//         licensePlate: "АВ1234СД",
//         seats: 50,
//       },
//       {
//         id: "2",
//         licensePlate: "ВС5678ДЕ",
//         seats: 45,
//       },
//       {
//         id: "3",
//         licensePlate: "СЕ9012ФГ",
//         seats: 60,
//       },
//       {
//         id: "4",
//         licensePlate: "ДА3456ХІ",
//         seats: 55,
//       },
//       {
//         id: "5",
//         licensePlate: "ЄФ7890ЖК",
//         seats: 40,
//       },
//       {
//         id: "6",
//         licensePlate: "ГН1234ЛМ",
//         seats: 48,
//       },
//       {
//         id: "7",
//         licensePlate: "ІЙ5678НО",
//         seats: 52,
//       },
//       {
//         id: "8",
//         licensePlate: "КЛ9012ПQ",
//         seats: 47,
//       },
//       {
//         id: "9",
//         licensePlate: "МН3456РС",
//         seats: 53,
//       },
//       {
//         id: "10",
//         licensePlate: "ОП7890ТУ",
//         seats: 58,
//       },
//     ],
//   }),
//   getters: {
//     busesList: (state) => state.buses,
//   },
//   mutations: {
//     saveNewBus(state, newBus) {
//       state.buses.push({ id: generateId(), ...newBus });
//     },
//     updateBuses(state, bus) {
//       updateItemById(state.buses, bus);
//     },
//     delete(state, id) {
//       deleteItemById(state.buses, id);
//     },
//   },
//   actions: {
//     addNewBus({ commit }, newBus) {
//       commit("saveNewBus", newBus);
//     },
//     updateBus({ commit }, bus) {
//       commit("updateBuses", bus);
//     },
//     deleteBus({ commit }, id) {
//       commit("delete", id);
//     },
//   },
// };

// export default store;
