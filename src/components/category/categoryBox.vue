<template>
  <div class="wrapper">
    <div id="header">
      <p>
        Category
      </p>
    </div>
    <button id="body" v-for="(item, index) in categories" :key="index">
      <img id="icon" :src="require(`@/assets/img/${item}.svg`)" />
      <div>
        <p>{{ item }}</p>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  props: ["categories"],
};
</script>

<style lang="scss" scoped>
.wrapper {
  white-space: nowrap;
  overflow: auto;
  margin-top: 20px;
  #header {
    margin-bottom: -2vh;

    p {
      padding: 0 25px;
      font-size: 20px;
      text-align: left;
    }
  }
  #body {
    display: inline-block;
    margin: 0 10px;
    &:focus {
      outline: none;
      #icon {
        background-color: $darkBlue;
      }
    }
    #icon {
      width: 55px;
      height: 55px;
      border-radius: 10px;
      background-color: $middleBlue;
      padding: 15px;
      font-size: 28px;
    }
    p {
      margin-top: 3px;
      color: $darkBlue;
      font-size: 12px;
    }
  }
}
</style>
