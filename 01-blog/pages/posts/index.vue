<template>
  <div class="posts-page">
    <post-list :posts="posts"></post-list>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        posts: [
          {
            id: 1,
            title: "First post",
            previewText: "this is our first post",
            thumbnail:
              "https://images.tech.co/wp-content/uploads/2015/08/techco-web.png"
          },
          {
            id: 2,
            title: "Second post",
            previewText: "this is our second post",
            thumbnail:
              "https://images.tech.co/wp-content/uploads/2015/08/techco-web.png"
          },
          {
            id: 3,
            title: "First third",
            previewText: "this is our third post",
            thumbnail:
              "https://images.tech.co/wp-content/uploads/2015/08/techco-web.png"
          }
        ]
      });
    }, 1500);
  },
  components: {
    PostList
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
