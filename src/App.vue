<template>
  <div id="app">
    <!-- Include the banner component -->
    <Banner />


    <!-- Navigation Menu -->
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/people">People</router-link>
    </nav>

    <!-- Main content -->
    <main class="content-wrapper">
      <router-view />
    </main>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'

export default {
  name: 'App',
  components: {
    Banner
  }
}
</script>
