<template>
  <div class="drivers__search">
    <label>
      Filter by Name
      <v-text-field
        v-model.lazy="nameSearch"
        :rules="rules"
        placeholder="Search drivers by Name"
        class="search-driver"
      ></v-text-field>
    </label>
  </div>
</template>

<!-- <input type="text" placeholder="Search drivers Name" v-model="nameSearch" /> -->
<script>
export default {
  name: "SearchDrivers",

  data() {
    return {
      rules: [
        (value) => !!value || "Required.",
        (value) => (value || "").length <= 20 || "Max 20 characters",
      ],
    };
  },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  computed: {
    nameSearch: {
      get() {
        return this.modelValue;
      },
      set(newVal) {
        this.$emit("update:modelValue", newVal);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.drivers__search {
  width: 350px;
  label {
    display: flex;
    flex-direction: column;
    gap: 7px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    color: #333;
  }
}
.search-driver {
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
}
</style>
