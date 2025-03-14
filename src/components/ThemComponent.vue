<template>
  <v-btn @click="toggleTheme">Toggle Theme</v-btn>
</template>

<script>
import { useTheme } from "vuetify";

export default {
  name: "ThemComponent",
  setup() {
    const theme = useTheme();

    const toggleTheme = () => {
      const newTheme = theme.global.current.value.dark ? "light" : "dark";
      theme.global.name.value = newTheme;

      document.body.setAttribute("data-theme", newTheme);
    };

    return {
      toggleTheme,
    };
  },
};
</script>

<style scoped>
body[data-theme="light"] {
  color: #000;
}

body[data-theme="dark"] {
  color: #fff;
}
</style>
