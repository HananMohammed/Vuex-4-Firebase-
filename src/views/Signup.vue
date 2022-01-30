<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  name:"signup-user",
  setup() {
    const email = ref('')
    const password = ref('')
    const store = useStore();

    const handleSubmit = () => {
      let payload = { email: email.value, password: password.value }
      store.dispatch('signup', payload)
    }

    return { handleSubmit, email, password }
  }
}
</script>