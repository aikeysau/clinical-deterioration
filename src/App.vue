<template>
  <div id="app">
    <!-- 🌟 Banner Section -->
    <header class="banner"></header>

    <!-- 🧭 Navigation Menu -->
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
    </nav>

    <!-- 📄 Main Page Content -->
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}

.banner {
  height: 250px;
  background: url('../src/assets/banner-logo.png') no-repeat center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.6);
}

.banner-image {
  max-width: 200px; /* adjust size */
  margin-bottom: 1rem;
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
