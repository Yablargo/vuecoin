<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      style="width: 3in; height: 2in"
    />
    <PricesTable />
  </div>
</template>

<script>
// @ is an alias to /src
import PricesTable from "@/components/PricesTable.vue";

export default {
  name: "Home",
  components: {
    PricesTable,
  },
};
</script>
