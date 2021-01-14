<template>
  <div>
    <categoryBox :categories="categories" />
  </div>
</template>

<script>
import categoryBox from "../category/categoryBox";
export default {
  data() {
    return {
      categories: ["Places", "Flight", "Hotels", "Foods"],
    };
  },
  components: {
    categoryBox,
  },
};
</script>

<style></style>
