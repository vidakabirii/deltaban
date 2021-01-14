<template>
  <div class="wrapper">
    <p>
      Where would you like to go?
    </p>
    <div id="textBoxWrapper">
      <div>
        <input v-model="test" placeholder="Search here..." />
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
export default {};
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
    width: 90%;
    height: 50px;
    border-radius: 15px;
    background-color: $middleBlue;
    div {
      float: left;
      padding: 10px 0 10px 20px;
      #searchBtn {
        color: white;
        font-size: 30px;
      }
      &:last-of-type {
        width: 49px;
        height: 49px;
        border-radius: 15px;
        background-color: $darkBlue;
        padding: 10px;
        float: right;
      }
    }
  }
}
</style>
