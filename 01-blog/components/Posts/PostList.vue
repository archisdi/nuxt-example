<template>
      <div class="post-list">
      <post-preview id="1" thumbnail="https://images.tech.co/wp-content/uploads/2015/08/techco-web.png" title="Hola Amigos" previewText="this is preview text"></post-preview>
      <post-preview id="2" thumbnail="https://images.tech.co/wp-content/uploads/2015/08/techco-web.png" title="Hola Amigos" previewText="this is preview text"></post-preview>
      <post-preview id="3" thumbnail="https://images.tech.co/wp-content/uploads/2015/08/techco-web.png" title="Hola Amigos" previewText="this is preview text"></post-preview>
  </div>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
  components: {
    PostPreview
  }
};
</script>

<style>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
