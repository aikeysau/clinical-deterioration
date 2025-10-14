<template>
  <div id="app">
    <!-- Include the banner component -->
    <Banner />

    <!-- Navigation Menu -->
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
    </nav>

    <!-- Main content -->
    <main class="content">
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

<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}

.banner {
  background: linear-gradient(135deg, #4b0082, #7b2cbf);
  color: white;
  text-align: center;
  padding: 2rem 1rem;
}

.banner h1 {
  margin: 0;
  font-size: 3rem;
  font-weight: bold;
}

.banner h2 {
  margin-top: 0.5rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  background-color: #f4f4f4;
  padding: 1rem;
}

.nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.nav a.router-link-exact-active {
  color: #7b2cbf;
  border-bottom: 2px solid #7b2cbf;
}

.content {
  padding: 2rem;
  text-align: center;
}
</style>