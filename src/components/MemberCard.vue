<template>
  <div class="member-card">
    <img :src="member.photo" :alt="member.name" class="member-photo" />
    <h3>{{ member.name }}</h3>
    <p>{{ member.role }}</p>
    <router-link :to="`/people/${member.id}`">View Profile</router-link>
  </div>
</template>

<script>
export default {
  name: "MemberCard",
  props: {
    member: { type: Object, required: true }
  }
}
</script>

<style scoped>
.member-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  width: 200px;
  margin: 1rem;
  background-color: #fff;
}
.member-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.5rem;
}
</style>
