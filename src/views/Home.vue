<template>
  <div class="home">
    <searchBox />
    <categories />
    <cards />
  </div>
</template>

<script>
import searchBox from "@/components/searchBox.vue";
import categories from "@/components/category/categories.vue";
import cards from "@/components/card/cards.vue";

export default {
  name: "Home",
  components: {
    searchBox,
    categories,
    cards,
  },
};
</script>
<style scoped></style>
