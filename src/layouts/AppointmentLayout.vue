<template>
  <main-layout :is-loading="isLoading" :has-error="hasError">
    <slot></slot>
  </main-layout>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "AppointmentLayout",
  computed: {
    ...mapGetters("drivers", ["getItemsList", "isLoading", "hasError"]),
  },
};
</script>
<style lang="scss" scoped></style>
