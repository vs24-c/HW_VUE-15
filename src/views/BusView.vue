<template>
  <bus-layout>
    <div class="page">
      <div class="page__drivers">
        <h1>Our Buses</h1>
        <div class="drivers">
          <div class="drivers__box-driver">
            <div class="drivers__name">
              <h3>Number plate</h3>
              <h3>Number of seats</h3>
            </div>
            <ul>
              <li v-for="bus in getItemsList" :key="bus.id">
                {{ bus.licensePlate }}
                <div class="drivers__button">
                  <span>{{ bus.seats }}</span>
                  <img
                    @click="edit(bus.id)"
                    class="edit"
                    src="../assets/image/edit-svgrepo-com.svg"
                    alt="edit icon"
                  />
                  <img
                    @click="onDeleteBus(bus.id)"
                    class="delete"
                    src="../assets/image/delete.svg"
                    alt="delete icon"
                  />
                </div>
              </li>
            </ul>
            <!-- <button class="btn" @click="addBus()">Add Bus</button> -->
            <v-btn class="btn" @click="addBus"> Add Bus </v-btn>
          </div>
        </div>
      </div>
    </div>
  </bus-layout>
</template>

<script>
import BusLayout from "@/layouts/BusLayout.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { BusLayout },
  name: "BusView",
  computed: {
    ...mapGetters("bus", ["getItemsList"]),
  },
  methods: {
    ...mapActions("bus", ["deleteItem", "loadList"]),
    addBus() {
      this.$router.push({
        path: "/add-edit-bus",
      });
    },
    edit(id) {
      this.$router.push({
        name: "add-bus",
        params: { id },
      });
    },
    onDeleteBus(id) {
      this.deleteItem(id);
    },
  },
  created() {
    this.loadList();
  },
};
</script>

<style lang="scss" scoped>
.page__drivers {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: start;
  padding: 20px 0;
  h1 {
    font-size: 34px;
    font-weight: 700;
    font-style: italic;
    color: purple;
  }
}
.drivers {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  justify-content: flex-start;
}
.drivers__name {
  width: 100%;
  font-size: 19px;
  font-weight: 500;
  line-height: 1.3;
  font-style: italic;
  color: #333;
  display: flex;
  gap: 25px;
}
.drivers__box-driver {
  display: flex;
  flex-direction: column;
}
ul {
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;
  list-style: none;
  li {
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: #333;
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: 19px;
      font-weight: 900;
      color: #333;
      font-style: normal;
      color: green;
    }
  }
}
.edit,
.delete {
  width: 12px;
  height: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
}
.drivers__button {
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
}
.btn {
  max-width: 150px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: rgb(190, 61, 190);
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #4caf50;
  }
}
</style>
