<template>
  <div class="drivers__search">
    <label>
      Experience from
      <!-- <input type="number" min="1" max="30" v-model="fromExperience" /> -->
      <v-text-field
        v-model="fromExperience"
        :rules="rules"
        type="number"
        class="search"
      ></v-text-field>
      to
      <!-- <input type="number" min="1" max="30" v-model="toExperience" /> -->
      <v-text-field
        v-model="toExperience"
        :rules="rules"
        type="number"
        class="search"
      ></v-text-field>
    </label>
  </div>
</template>

<script>
export default {
  name: "SearchExperience",

  data() {
    return {
      rules: [
        (value) => !!value || "Required.",
        (value) => /^[0-9]*$/.test(value) || "Enter number",
      ],
    };
  },
  props: {
    fromExper: {
      type: Number,
      default: null,
    },
    toExper: {
      type: Number,
      default: null,
    },
  },
  computed: {
    fromExperience: {
      get() {
        return this.fromExper;
      },
      set(newVal) {
        this.$emit("update:fromExper", Number(newVal));
      },
    },
    toExperience: {
      get() {
        return this.toExper;
      },
      set(newVal) {
        this.$emit("update:toExper", Number(newVal));
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.drivers__search {
  label {
    display: flex;
    flex-direction: column;
    gap: 7px;
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
