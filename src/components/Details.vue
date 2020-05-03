<template>
  <div>
    <h1>Details page for product - {{$route.params.id}}</h1>
    <ul v-for="(key, value, index) in product" :key="index" style="text-align: left;">
      <li>
        <strong>{{key}}</strong>
        - {{value}}
      </li>
    </ul>
  </div>
</template>

<script>
import persistScroll from '../mixins/persistScroll';
export default {
  name: "details-component",
  data() {
    return {
      product: {}
    };
  },
  mixins: [persistScroll],
  methods: {
    async getProductData(id) {
      console.log("api call triggered");
      let result = await this.$services.API.getProductDetails(id);
      this.product = result;
    },
    initializeData() {
      this.getProductData(this.$route.params.id);
    }
  },
};
</script>