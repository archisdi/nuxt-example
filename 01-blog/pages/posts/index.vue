<template>
  <div class="posts-page">
    <post-list :posts="posts"></post-list>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
export default {
  components: {
    PostList
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    }
  }
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
