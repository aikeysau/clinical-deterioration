<template>
  <div class="member-form">
    <h2>Edit Profile</h2>
    <form @submit.prevent="saveProfile">
      <label>
        Name:
        <input v-model="form.name" required />
      </label>
      <label>
        Role:
        <input v-model="form.role" required />
      </label>
      <label>
        Bio:
        <textarea v-model="form.bio" required></textarea>
      </label>
      <label>
        Photo URL:
        <input v-model="form.photo" required />
      </label>
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "MemberForm",
  props: {
    member: { type: Object, required: true }
  },
  data() {
    return {
      form: { ...this.member } // copy to form
    }
  },
  methods: {
    saveProfile() {
      // emit the updated member
      this.$emit("update-member", { ...this.form })
    }
  }
}
</script>

<style scoped>
.member-form {
  max-width: 400px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
}
</style>
