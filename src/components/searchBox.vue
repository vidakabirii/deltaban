<template>
  <div class="wrapper">
    <p>
      Where would you like to go?
    </p>
    <div id="textBoxWrapper">
      <div>
        <input v-model="searchItem" placeholder="Search here..." />
      </div>
      <div>
        <v-icon id="searchBtn">
          mdi-magnify
        </v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchItem: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 10px;
  text-align: center;
  text-align: -webkit-center;
  p {
    text-align: left;
    padding: 0 25px;
    font-size: 26px;
  }
  #textBoxWrapper {
    width: 86%;
    height: 42px;
    border-radius: 15px;
    background-color: #dfe7ea;
    div {
      float: left;
      padding: 10px 0 10px 20px;
      #searchBtn {
        color: white;
        font-size: 26px;
        opacity: 0.8;
      }
      &:last-of-type {
        width: 41px;
        height: 41px;
        border-radius: 15px;
        background-color: #235264;
        padding: 7px;
        float: right;
      }
    }
  }
}
</style>
