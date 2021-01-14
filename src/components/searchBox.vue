<template>
  <div class="wrapper">
    <p>
      Where would you like to go?
    </p>
    <div id="textBoxWrapper" v-if="!load">
      <div>
        <input
          v-model="searchItem"
          placeholder="Search here..."
          v-on:keyup.enter="search()"
        />
      </div>
      <div @click="search()">
        <v-icon id="searchBtn">
          mdi-magnify
        </v-icon>
      </div>
    </div>
    <div class="loadingDiv" v-if="load">
      <div class="loading"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["load"],
  data() {
    return {
      searchItem: "",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.searchItem);
    },
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
    background-color: $middleBlue;
    input {
      &:focus {
        outline: none;
      }
    }
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
        background-color: $darkBlue;
        padding: 7px;
        float: right;
      }
    }
  }
}
.loadingWrapper {
  text-align: center;
  text-align: -webkit-center;
}
.loading {
  border: 10px solid #e4e4e4;
  border-radius: 50%;
  border-top: 10px solid black;
  width: 2.7rem;
  height: 2.7rem;
  -webkit-animation: spin 2s linear infinite;
  /* Safari */
  animation: spin 2s linear infinite;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
