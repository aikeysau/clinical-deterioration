<template>
  <header class="banner"></header>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style scoped>
.banner {
  height: 250px;
  background: url('../../src/assets/banner-logo.png') no-repeat center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.6);
}

.banner-image {
  max-width: 200px;
  margin-bottom: 1rem;
}
</style>
