<template>
      <form class="sign-in" action="#" @submit.prevent="login">
        <h2>Sign In</h2>
        <input type="email" placeholder="Email" v-model="username" />
        <input type="password" placeholder="Password" v-model="password"/>
        <button>Sign In</button>
      </form>
</template>

<script>
  export default {
    data: () => {
      return {
        username: "",
        password: "",
      }
    },
    methods: {
        login(){
            this.$store.dispatch('retrieveToken', {
                
            })
        }
    } 
  }
</script>

<style scoped>
 

</style>