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
  width: 100%;
  height: 25vh; 
  background: url('../../src/assets/banner-logo.png');
  background-size: contain;     /* show full image without cutting */
  background-repeat: no-repeat;
  background-position: center;
}
</style>
