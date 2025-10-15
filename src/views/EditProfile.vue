<template>
  <div class="edit-profile">
    <h2>Edit Profile</h2>

    <!-- Simple password gate -->
    <div v-if="!authenticated" class="auth-box">
      <input type="password" v-model="password" placeholder="Enter password" />
      <button @click="authenticate">Login</button>
      <p v-if="error">{{ error }}</p>
    </div>

    <!-- Form appears only after login -->
    <form v-else @submit.prevent="saveProfile">
      <label>
        ID
        <input v-model="member.id" required placeholder="unique-id" />
      </label>

      <label>
        Name
        <input v-model="member.name" required />
      </label>

      <label>
        Role
        <input v-model="member.role" />
      </label>

      <label>
        Bio
        <textarea v-model="member.bio" rows="4"></textarea>
      </label>

      <label>
        Image
        <input type="file" @change="onFileChange" />
      </label>

      <img
        v-if="previewImage"
        :src="previewImage"
        class="preview"
        alt="preview"
      />

      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// For simplicity: single hardcoded password
const PASSWORD = 'aikeys2025'

const password = ref('')
const authenticated = ref(false)
const error = ref('')

const member = reactive({
  id: '',
  name: '',
  role: '',
  bio: '',
  image: ''
})

const previewImage = ref(null)

onMounted(async () => {
  const id = route.params.id
  if (id) {
    try {
      const data = await import(`@/assets/members/${id}.json`)
      Object.assign(member, data.default)
    } catch (err) {
      console.warn('New member — no file yet')
    }
  }
})

const authenticate = () => {
  if (password.value === PASSWORD) {
    authenticated.value = true
  } else {
    error.value = 'Wrong password'
  }
}

const onFileChange = (event) => {
  const file = event.target.files[0]
  if (file) previewImage.value = URL.createObjectURL(file)
}

// For now, just print JSON — next step will save it to GitHub
const saveProfile = async () => {
  console.log('Member JSON:', JSON.stringify(member, null, 2))
  alert('Profile data ready to be uploaded (check console)')
}
</script>

<style scoped>
.edit-profile {
  max-width: 600px;
  margin: 0 auto;
}
label {
  display: block;
  margin-top: 1rem;
}
.preview {
  max-width: 200px;
  border-radius: 8px;
  margin-top: 1rem;
}
.auth-box {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
}
</style>
