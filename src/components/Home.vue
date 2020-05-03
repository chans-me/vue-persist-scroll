<template>
  <div>
    <h1>home page</h1>
    <router-link to="list">Go to list page</router-link>
    <br>
    <br>
    <router-link to="cars">Go to Car list page</router-link>
    <br>
    <br>
    <router-link to="products">Go to product list page</router-link>
  </div>
</template>

<script>
import persistScroll from '../mixins/persistScroll';
export default {
  name: "home-component",
  mixins: [persistScroll],
};
</script>