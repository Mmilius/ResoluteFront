<template>
 <div>
      <form class="sign-in" action="#" @submit.prevent="login">
        <input class="sign-in-input" type="email" placeholder="Email" v-model="username" />
        <input class="sign-in-input" type="password" placeholder="Password" v-model="password"/>
        <button class="sign-in-button">Sign In</button>
      </form>
  </div>
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
 .sign-in{
    display: flex;
    flex-flow: column;
    margin-top: 30px;
    margin-left: 20%;
    margin-right: 20%;
 }

.sign-in-input{
  margin: 5px;
  padding: 20px;
  font-size: 20px;
  border: solid lightgray;
  border-radius: 5px;
}

.sign-in-button{
    padding: 22px;
    font-size: 20px;
    margin: 5px;
    background-color: rgb(250, 150, 95);
    color: white;
    font-weight: bold;
    border-radius: 5px;
    border: solid lightgray;
}

.sign-in-button:hover{
  background-color:rgb(247, 88, 2);
}

</style>