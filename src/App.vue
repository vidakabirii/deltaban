<template>
  <v-app id="app">
    <div id="appWrapper">
      <div id="wrapper">
        <headerLayout />
        <router-view />
        <footerLayout />
      </div>
    </div>
  </v-app>
</template>

<script>
import headerLayout from "@/components/layout/header.vue";
import footerLayout from "@/components/layout/footer.vue";

export default {
  components: {
    headerLayout,
    footerLayout,
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
  padding: 10px 10px 0 10px;
  background-image: linear-gradient(to right, $lightBlue, white);
}
#appWrapper {
  text-align: center;
  text-align: -webkit-center;
}
#wrapper {
  max-width: 780px;
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
