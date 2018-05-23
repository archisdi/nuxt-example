<template>
    <div class="admin-post-page">
        <section class="update-form">
            <admin-post-form :post="loadedPost"></admin-post-form>
        </section>
    </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
export default {
  data() {
    return {
      loadedPost: {
        author: "archie isdiningrat",
        title: "my awesome post",
        content: "super amazing content too",
        thumbnailLink:
          "https://images.tech.co/wp-content/uploads/2015/08/techco-web.png"
      }
    };
  },
  components: {
    AdminPostForm
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>

