<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <img class="main-image" src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3000,w_4500,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_538768309_cylgpy.jpg"/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Your year. Your resolutions.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}







</style>
