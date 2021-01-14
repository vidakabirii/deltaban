<template>
  <div class="wrapper">
    <div class="card" v-for="(item, index) in card" :key="index">
      <img :src="require(`@/assets/img/${item}.jpg`)" />
      <div>
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card"],
};
</script>
<style lang="scss" scoped>
.wrapper {
  overflow: auto;
  white-space: nowrap;
  .card {
    width: 171px;
    height: 240px;
    border-radius: 15px;
    display: inline-block;
    margin: 10px;
    position: relative;
    text-align: center;
    color: white;
    div {
      position: absolute;
      top: 8px;
      left: 16px;
    }
    img {
      object-fit: cover;
      width: 171px;
      height: 240px;
      border-radius: 15px;
    }
  }
}
@media (min-width: 425px) {
  .wrapper {
    .card {
      margin: 10px 15px;
      img {
        width: 183px;
        height: 273px;
      }
    }
  }
}
</style>
