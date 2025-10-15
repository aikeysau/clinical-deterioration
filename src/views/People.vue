<template>
  <section>
    <h1>Our Team</h1>
    <div class="members-grid">
      <MemberCard
        v-for="member in members"
        :key="member.id"
        :member="member"
      />
    </div>
  </section>
</template>

<script setup>
import MemberCard from '../components/MemberCard.vue'

// 👇 Dynamically import all member JSON files
const modules = import.meta.glob('../assets/members/*.json', { eager: true })

// Convert the imported modules into an array of member objects
const members = Object.values(modules).map(m => m.default)

// Optional: debug to check that the data is loaded
console.log('Loaded members:', members)
</script>

<style scoped>
.members-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
