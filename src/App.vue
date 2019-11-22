<template>
  <div id="app">
    <Header />
    <nav>
    <router-link :to="{name: 'Home'}">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/categories">Categories</router-link>
    <router-link to="/signin">Login</router-link>
    <router-link to="/newresolution">Add Resolution</router-link>
    </nav>
  <router-view>

  </router-view>
  </div>
</template>

<script>
import Header from "./components/Header"
import Categories from "./components/Categories"

export default {
  name: 'App',
  components: {
    Header,
    Categories,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav{
  margin-top: 15px
}

nav a{
 text-decoration: none;
 font-size: 20px;
 color: #233964;
 padding: 10px;
 margin: 20px;
 border-radius: 3px
}

nav a:hover{
  background-color: #233964;
  color: white;

}
body{
  background-color: #EAE7DC
}

</style>
