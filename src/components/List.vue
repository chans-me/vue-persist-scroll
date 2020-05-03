<template>
  <div>
    <button @click="$router.push({name: 'home'})">Go to Home</button>
    <h1>List page</h1>
    <input v-model="textBox" type="text" placeholder="enter some text" />
    <ul v-for="(item, index) in productList" :key="index">
      <li style="text-align: left;">
        <div>
          <strong>name:</strong>
          <router-link :to="{name: 'details', params: {id: item.id}}">{{item.name}}</router-link>
        </div>
        <div>
          <strong>description:</strong>
          {{item.description}}
        </div>
        <div>
          <strong>content:</strong>
          {{item.content}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import persistScroll from '../mixins/persistScroll';

export default {
  name: "list-component",
  data() {
    return {
      productList: [],
      textBox: "",
    };
  },
  mixins: [persistScroll],
  methods: {
    getData() {
      console.log("api call triggered");
      this.productList = this.$services.API.getListData();
    },
    initializeData() {
      this.getData();
    }
  },
};
</script>