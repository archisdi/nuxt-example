<template>
  <div>
    <app-header></app-header>
    <h1>Nuxt app</h1>
    <hr>
    <nuxt-link to="/users">Users</nuxt-link> <br>
    <button @click="goToProducts">Product</button>
  </div>
</template>

<script>
import header from "~/components/Header.vue";
export default {
  methods: {
    goToProducts() {
      this.$router.push(`/products`);
    }
  },
  components: {
    appHeader: header
  }
};
</script>
