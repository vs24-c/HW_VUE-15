<template>
  <div class="wrapper">
    <search-drivers v-model="driversName" />
    <search-experience v-model:fromExper="fromEx" v-model:toExper="toEx" />
    <!-- <button @click="addDriver">Add Driver</button> -->
    <v-btn @click="addDriver"> Add Driver </v-btn>
  </div>
</template>

<script>
import SearchDrivers from "./SearchDrivers.vue";
import SearchExperience from "./SearchExperience.vue";
import { mapActions } from "vuex";
export default {
  name: "FilterMainDriver",
  SearchExperience,
  data() {
    return {
      driversName: "",
      fromEx: null,
      toEx: null,
    };
  },
  components: {
    SearchDrivers,
    SearchExperience,
  },
  methods: {
    ...mapActions("filters", ["searchName", "updateExperienceFilter"]),
    addDriver() {
      return this.$router.push({ path: "/edit" });
    },
  },
  watch: {
    driversName(newValue) {
      this.searchName(newValue);
    },
    fromEx(newValue) {
      this.updateExperienceFilter({ fromExperience: Number(newValue) });
    },
    toEx(newValue) {
      this.updateExperienceFilter({ toExperience: Number(newValue) });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  button {
    padding: 7px 12px;
    background-color: rgb(190, 61, 190);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #4caf50;
    }
  }
}
</style>
