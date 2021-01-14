<template>
  <v-app id="app">
    <headerLayout />
    <router-view />
  </v-app>
</template>

<script>
import headerLayout from "@/components/layout/header.vue";

export default {
  components: {
    headerLayout,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 25px 10px 0 10px;
  background-image: linear-gradient(
    to right,
    rgba(226, 231, 235),
    rgba(255, 255, 255)
  );
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
