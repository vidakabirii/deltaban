<template>
  <div>
    <cardBox :card="card" />
  </div>
</template>

<script>
import cardBox from "@/components/card/cardBox.vue";
export default {
  data() {
    return {
      card: ["Iran", "Italy", "France", "Maldive", "China", "India"],
    };
  },
  components: {
    cardBox,
  },
};
</script>

<style></style>
