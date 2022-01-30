<template>
  <nav>
    <h1>Vuex Auth</h1>
    <!-- for all users -->
    <template v-if="authenticated">
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <!-- for logged in users -->
      <div v-if="user">
        <span>Logged in as... {{user.email}}</span>
        <button @click.prevent="handleClick">Logout</button>
      </div>
      <!-- for logged out users -->
      <div v-if="!user">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </template> 
  </nav>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name:"nav-bar",
  setup(){
    const store = useStore()
    const handleClick = ()=>{
      store.dispatch('signout')
    }
     
    return {
      handleClick, 
      user:computed(()=>store.state.user ),
      authenticated:computed(()=>store.state.authenticated)
      }
  }
}
</script>