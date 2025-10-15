<template>
  <section v-if="member" class="member-profile">
    <!-- Dynamic image -->
    <img
      v-if="memberPhoto"
      :src="memberPhoto"
      :alt="member.name"
      class="member-image"
    />

    <h2>{{ member.name }}</h2>
    <p class="role">{{ member.role }}</p>
    <p class="bio">{{ member.bio }}</p>
  </section>

  <p v-else>Sorry something went wrong</p>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const member = ref(null)
const memberPhoto = ref(null)

onMounted(async () => {
  const id = route.params.id

  try {
    // Dynamically import the member JSON
    const data = await import(`../assets/members/${id}.json`)
    member.value = data.default

    // Dynamically resolve the image
    if (member.value?.photo) {
      memberPhoto.value = new URL(`../assets/members/images/${member.value.photo}`, import.meta.url).href
    }
  } catch (err) {
    console.error('Error loading member JSON:', err)
  }
})
</script>

<style scoped>
.member-profile {
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
}

.member-image {
  width: 200px;        /* fixed width */
  height: 200px;       /* fixed height */
  border-radius: 12px;
  object-fit: cover;   /* scales and crops the image to fit the box */
  margin-bottom: 0.5rem;
}

.role {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.bio {
  color: #555;
}
</style>
