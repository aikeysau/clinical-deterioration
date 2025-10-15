<template>
  <div class="member-card">
    <!-- Display image only if it exists -->
    <img
      v-if="memberPhoto"
      :src="memberPhoto"
      :alt="member.name"
      class="member-image"
    />
    <h3>{{ member.name }}</h3>
    <p>{{ member.role }}</p>
    <router-link :to="`/member/${member.id}`">View Profile</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  member: Object
})

// Resolve image dynamically
const memberPhoto = ref(null)

if (props.member?.photo) {
  memberPhoto.value = new URL(`../assets/members/images/${props.member.photo}`, import.meta.url).href
}
</script>

<style scoped>
.member-card {
  text-align: center;
}
.member-image {
  width: 200px;        /* fixed width */
  height: 200px;       /* fixed height */
  border-radius: 12px;
  object-fit: cover;   /* scales and crops the image to fit the box */
  margin-bottom: 0.5rem;
}
</style>
