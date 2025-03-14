<template>
  <appointment-layout>
    <div class="wrapper">
      <h1>Appointment</h1>
      <div class="page">
        <div class="page__appts">
          <div class="appts__title">
            <p>Driver</p>
            <p>Bus license plate</p>
          </div>
          <div class="appts__list" v-for="appt in getAppts" :key="appt.id">
            <ul>
              <li v-for="(element, index) in appt.appt" :key="index">
                <span v-if="element.driverObj">{{ element.driverObj.fullName }}</span>
                <span v-if="element.busObj">{{ element.busObj.licensePlate }}</span>
              </li>
              <img
                class="icon-delete"
                src="@/assets/image/delete.svg"
                alt=""
                @click="deleteAppt(appt.id)"
              />
            </ul>
          </div>
        </div>
        <div class="page__actions">
          <h2>New Appointment</h2>
          <div class="actions__box">
            <div class="actions__driver">
              <span>Driver</span>
              <v-select
                v-model="driver"
                :items="getDrivers"
                item-title="fullName"
                item-value="id"
                label="Select a Driver"
                return-object
              ></v-select>
            </div>
            <div class="actions__bus">
              <span>Bus</span>
              <v-select
                v-model="bus"
                :items="getBus"
                item-title="licensePlate"
                item-value="id"
                label="Select a Bus"
                return-object
              ></v-select>
            </div>
          </div>
          <v-btn class="btn" @click="addNewAppt"> Add new appointment </v-btn>
        </div>
      </div>
    </div>
  </appointment-layout>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AppointmentView",
  data() {
    return {
      appointment: [],
      driver: null,
      bus: null,
    };
  },
  computed: {
    ...mapGetters("appointment", {
      getAppts: "getItemsList",
    }),
    ...mapGetters("drivers", {
      getDrivers: "getItemsList",
    }),
    ...mapGetters("bus", {
      getBus: "getItemsList",
    }),
  },
  methods: {
    ...mapActions("appointment", {
      addItem: "addItem",
      deleteItem: "deleteItem",
      appLoad: "loadList",
    }),
    ...mapActions("drivers", {
      driverLoad: "loadList",
    }),
    ...mapActions("bus", {
      busLoad: "loadList",
    }),

    addNewAppt() {
      if (!this.driver || !this.bus) {
        alert("Choose a driver and a bus!");
        return;
      }
      const newAppt = {
        appt: [
          {
            driverID: this.driver.id,
            driverObj: this.driver,
          },
          {
            busID: this.bus.id,
            busObj: this.bus,
          },
        ],
      };
      this.driver = null;
      this.bus = null;
      return this.addItem(newAppt);
    },
    deleteAppt(id) {
      return this.deleteItem(id);
    },
  },
  created() {
    this.appLoad();
    this.driverLoad();
    this.busLoad();
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 20px 0;
}
h1,
h2 {
  font-size: 34px;
  font-weight: 700;
  font-style: italic;
  color: purple;
}

.page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.page__appts {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.appts__title {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  p {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    color: #333;
  }
}
.appts__list {
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 20px;
    grid-template-rows: auto;
    padding: 0;
    margin: 0;
    border-bottom: 1px solid #ccc;
    li {
      list-style: none;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
      font-style: italic;
      color: #555;
    }
  }
}
.icon-delete {
  width: 12px;
  height: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
}
.page__actions {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.actions__box {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.actions__driver,
.actions__bus {
  max-width: 350px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  span {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    color: #333;
  }
}
.btn {
  padding: 10px 20px;
  max-width: 350px;
  background-color: rgb(190, 61, 190);
  color: #fff;
  border: none;
  border-radius: 5px;
  // cursor: pointer;
  // font-size: 18px;
  // font-weight: 700;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #4caf50;
  }
}
</style>
