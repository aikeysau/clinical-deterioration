<template>
  <section>
    <h2>Our Team</h2>
    <div class="members-grid">
      <MemberCard
        v-for="member in members"
        :key="member.id"
        :member="member"
      />
    </div>
  </section>
</template>

<script>
import MemberCard from "../components/MemberCard.vue"
import membersData from "../data/members.json"

export default {
  name: "People",
  components: { MemberCard },
  data() {
    return { members: membersData }
  }
}
</script>

<style scoped>
.members-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>
