<template>
  <div>
    {{ prices }}
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  // TODO: replace with a data
  computed: {
    ...mapState({
      prices: (state) => state.prices.prices,
    }),
  },
  methods: {
    ...mapActions("prices", [
      "getPrices", // -> this.foo()
    ]),
  },
  created: function() {
    this.getPrices();
  },
};
</script>
