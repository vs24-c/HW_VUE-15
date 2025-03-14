<template>
  <drivers-layout>
    <div class="page">
      <div class="page__drivers">
        <h1>Our Drivers</h1>
        <div class="drivers">
          <div class="drivers__box-driver">
            <div class="drivers__name">
              <h3>First Name / Last Name</h3>
              <h3>Experience</h3>
            </div>
            <ul>
              <li v-for="driver in filteredDriversList" :key="driver.id">
                {{ driver.fullName }}
                <div class="drivers__button">
                  <span>{{ driver.experience }}</span>
                  <img
                    @click="edit(driver.id)"
                    class="edit"
                    src="../assets/image/edit-svgrepo-com.svg"
                    alt="edit icon"
                  />
                  <img
                    @click="onDeleteDr(driver.id)"
                    class="delete"
                    src="../assets/image/delete.svg"
                    alt="delete icon"
                  />
                </div>
              </li>
            </ul>
          </div>
          <div class="drivers__esperance">
            <filter-main-driver />
          </div>
        </div>
      </div>
    </div>
  </drivers-layout>
</template>

<script>
import DriversLayout from "@/layouts/DriversLayout.vue";
import { mapGetters, mapActions } from "vuex";
import FilterMainDriver from "../components/filters/FilterMainDriver.vue";
export default {
  name: "DriverView",
  components: {
    FilterMainDriver,
    DriversLayout,
  },
  computed: {
    ...mapGetters("filters", ["allFilterDriver"]),
    filteredDriversList() {
      return this.allFilterDriver;
    },
  },
  methods: {
    ...mapActions("drivers", ["deleteItem", "loadList"]),
    edit(id) {
      this.$router.push({
        name: "edit",
        params: { id },
      });
    },
    onDeleteDr(id) {
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
.drivers__search {
  display: flex;
  flex-direction: column;
  gap: 15px;
  label {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    color: #333;
    input {
      width: 100%;
      padding: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
      outline: none;
    }
  }
}
</style>
