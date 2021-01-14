<template>
  <div class="home">
    <searchBox @search="search($event)" :load="load" />
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
  data() {
    return {
      load: false,
    };
  },
  components: {
    searchBox,
    categories,
    cards,
  },
  methods: {
    search(item) {
      this.load = true;
      googleService.get(item).then((res) => {
        if (res.status == 200) {
          location.href = res.data.items[0].link;
          this.load = false;
        }
      });
    },
  },
};
</script>
<style scoped></style>
