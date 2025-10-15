<template>
  <section v-if="member">
    <div class="member-profile">
      <!-- Image binding: no leading slash, matches JSON path -->
      <img :src="member.photo" :alt="member.name" class="member-photo" />
      <h2>{{ member.name }}</h2>
      <h4>{{ member.role }}</h4>
      <p>{{ member.bio }}</p>
      <router-link to="/people">← Back to Team</router-link>
    </div>
  </section>
  <p v-else>Member not found.</p>
</template>

<script>
import membersData from "../data/members.json"

export default {
  name: "Member",
  data() {
    return { member: null }
  },
  mounted() {
    const memberId = this.$route.params.id
    // Find the member object by ID
    this.member = membersData.find(m => m.id === memberId)
  }
}
</script>

<style scoped>
.member-profile {
  max-width: 400px;
  margin: 2rem auto;
  text-align: center;
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.member-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}
</style>
