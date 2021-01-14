<template>
  <div class="wrapper">
    <v-icon>mdi-home</v-icon>
    <v-icon>
      mdi-message-text
    </v-icon>
    <div id="icon">
      <v-icon>mdi-plus-circle</v-icon>
    </div>
    <v-icon>
      mdi-cards-heart
    </v-icon>
    <v-icon>
      mdi-account
    </v-icon>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
<style lang="scss" scoped>
.wrapper {
  background-color: white;
  height: 8vh;
  margin: -6px -2px 0 -10px;
  i {
    position: relative;
    padding: 0px 15px;
    color: $darkBlue;
  }
  #icon {
    position: relative;
    display: inline-block;
    background-color: white;
    bottom: 30px;
    right: 4px;
    margin: 0 16px;
    border-radius: 50px;
    width: 40px;
    height: 40px;
    i {
      font-size: 52px;
      right: 20px;
      top: -6px;
    }
  }
}
</style>
