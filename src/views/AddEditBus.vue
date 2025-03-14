<template>
  <form class="form">
    <label>
      Number plate
      <input v-model="bus.licensePlate" type="text" />
    </label>
    <label>
      Number of seats
      <input v-model="bus.seats" type="number" />
    </label>
    <div class="form__btn-box">
      <button type="button" @click="onSave(bus.id)">{{ saveTitle }}</button>
      <button type="button" @click="onBack">Back</button>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AddEditBus",
  data() {
    return {
      bus: {
        licensePlate: "",
        seats: null,
      },
    };
  },
  computed: {
    ...mapGetters("bus", ["getItemsList"]),
    busID() {
      return this.$route.params.id;
    },
    saveTitle() {
      return this.busID ? "Save" : "Create";
    },
  },
  methods: {
    ...mapActions("bus", ["addItem", "updateItem"]),
    onBack() {
      this.$router.go(-1);
    },
    onSave() {
      if (this.busID) {
        this.updateItem({ itemId: this.busID, data: this.bus });
      } else {
        this.addItem(this.bus);
      }
      this.$router.push({ path: "/bus" });
    },
    LoadBus() {
      if (this.busID) {
        const bus = this.getItemsList.find((b) => b.id == this.busID);
        if (bus) {
          this.bus = { ...bus };
        } else {
          this.$router.push("/add-edit-bus");
        }
      } else return;
    },
  },
  created() {
    this.LoadBus();
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 0;

  label {
    display: flex;
    flex-direction: column;
    gap: 7px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    color: #555;

    input {
      max-width: 350px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      background-color: #f5f5f5;
      color: #555;
      transition: border-color 0.3s ease;
      &:focus {
        border-color: #666;
      }
    }
  }
}
.form__btn-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 35px;
  button {
    max-width: 150px;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: rgb(190, 61, 190);
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #0069d9;
    }
  }
}
</style>
