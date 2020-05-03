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
export default {
  name: "details-component",
  data() {
    return {
      product: {}
    };
  },
  methods: {
    getProductData(id) {
      this.product = this.$services.API.getProductDetails(id);
    },
    goBack() {
      this.$router.back();
    },
  },
  created() {
    this.getProductData(this.$route.params.id);
  }
};
</script>