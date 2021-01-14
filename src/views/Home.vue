<template>
  <div class="home">
    <searchBox @search="search($event)" />
    <categories />
    <cards />
  </div>
</template>

<script>
import searchBox from "@/components/searchBox.vue";
import categories from "@/components/category/categories.vue";
import cards from "@/components/card/cards.vue";
import * as googleService from "@/service/api/google/google.js";

export default {
  name: "Home",
  components: {
    searchBox,
    categories,
    cards,
  },
  methods: {
    search(item) {
      googleService.get(item).then((res) => {
        if (res.status == 200) location.href = res.data.items[0].link;
      });
    },
  },
};
</script>
<style scoped></style>
