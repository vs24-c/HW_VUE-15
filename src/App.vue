<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <them-component />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{ name: 'driver' }">Driver</RouterLink>
        <RouterLink :to="{ name: 'bus' }">Bus</RouterLink>
        <RouterLink :to="{ name: 'appointment' }">Appt</RouterLink>
        <!-- <RouterLink to="/contact">Contact</RouterLink> -->
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 15px;
  padding: 10px 15px;
  background-color: rgb(115, 21, 203);
}
nav {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 15px;
  @media (max-width: 450px) {
    flex-wrap: wrap;
  }
  a {
    font-size: 19px;
    font-weight: 400;
    text-decoration: none;
    color: #fff;
  }
}
</style>
