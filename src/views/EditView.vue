<template>
  <form class="form">
    <label>
      Full Name
      <input v-model="driver.fullName" type="text" />
    </label>
    <label>
      Experience
      <input
        v-model="driver.experience"
        type="number"
        placeholder="Enter your experience in years"
      />
    </label>
    <div class="form__btn-box">
      <button type="button" @click="onSave()">{{ saveTitle }}</button>
      <button type="button" @click="onBack">Back</button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "EditView",
  data() {
    return {
      driver: {
        fullName: "",
        experience: null,
      },
    };
  },
  computed: {
    ...mapGetters("drivers", ["getItemsList"]),
    driverID() {
      return this.$route.params.id;
    },
    saveTitle() {
      return this.driverID ? "Save" : "Create";
    },
  },
  methods: {
    ...mapActions("drivers", ["addItem", "updateItem"]),
    onBack() {
      this.$router.go(-1);
    },
    onSave() {
      if (this.driverID) {
        this.updateItem({ itemId: this.driverID, data: this.driver });
      } else {
        this.addItem(this.driver);
      }
      this.$router.push("/driver");
    },
    loadDriver() {
      if (this.driverID) {
        const driver = this.getItemsList.find((d) => d.id == this.driverID);
        if (driver) {
          this.driver = { ...driver };
        } else {
          this.$router.push("/driver");
        }
      }
    },
  },
  created() {
    this.loadDriver();
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
