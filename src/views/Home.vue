<template>
  <div class="home">
    <searchBox />
    <categories />
  </div>
</template>

<script>
import searchBox from "@/components/searchBox.vue";
import categories from "@/components/category/categories.vue";
export default {
  name: "Home",
  components: {
    searchBox,
    categories,
  },
};
</script>
<style scoped></style>
