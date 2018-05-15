<template>
  <div>
    <h1>Product with id {{ $route.params.show }}</h1>
    <hr>
  </div>
</template>

<script>
export default {
  validate(data) {
    return /^\d+$/.test(data.params.show);
  }
};
</script>
