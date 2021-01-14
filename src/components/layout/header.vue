<template>
  <div>
    <div class="headerWrapper">
      <v-icon @click="open()">
        mdi-menu
      </v-icon>
      <div>
        <img src="@/assets/img/user.jpg" />
      </div>
    </div>
    <div class="menu" v-show="show">
      <button>
        sign up
      </button>
      <button>
        <v-icon>mdi-login</v-icon>
        login
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    open() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss" scoped>
.headerWrapper {
  text-align: left;
  padding: 10px 20px;
  button {
    cursor: pointer;
    font-size: 40px;
  }
  div {
    width: 50px;
    height: 50px;
    float: right;
    img {
      width: 50px;
      border-radius: 15px;
      height: 50px;
    }
  }
}
.menu {
  background-color: $darkBlue;
  margin: 0 20px;
  border-radius: 15px;
  height: 25vh;
  text-align: -webkit-center;
  padding: 30px 15px;
  z-index: 9000;
  position: absolute;
  width: 88%;
  margin-top: 5px;
  button {
    background-color: $lightBlue;
    border-radius: 40px;
    padding: 10px;
    color: $darkBlue;
    width: 80%;
    display: block;
    margin: 5px;
  }
}
@media (min-width: 768px) {
  .menu {
    width: 35%;
  }
}
</style>
