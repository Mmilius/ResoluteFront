<template>
<div>
    <h2 class="new-resolution-title">What's Your Resolution</h2>
      <form class="new-resolution" action="#" @submit.prevent="login">
        <input class="form-input" type="text" placeholder="Goal" v-model="goal" />
        <textarea class="form-input" placeholder="What's your motivation?" v-model="motivation"></textarea>
        <input class="form-input" type="text" placeholder="Add a photo" v-model="image"/>
        <input class="form-input" type="integer" placeholder="Year" v-model="year"/>
        <button class="add-resolution-button">Add Resolution</button>
      </form>
      </div>
</template>

<script>
  export default {
    data: () => {
      return {
        goal: "",
        motivation: "",
        image: "",
        year: 2020,
      }
    },
    methods: {
        
    
    } 
  }
</script>

<style scoped>
.new-resolution-title{
    margin-top: 40px;
    margin-bottom: -10px;
}

 .new-resolution{
    display: flex;
    flex-flow: column;
    padding: 29px;


 }

.form-input{
    padding: 30px;
    font-size: 15px;
    margin: 10px;
    border: solid lightgray;
    border-radius: 5px;
}

.add-resolution-button{
    padding: 30px;
    font-size: 20px;
    margin: 10px;
    background-color: rgb(250, 150, 95);
    color: white;
    font-weight: bold;
    border-radius: 5px;
    border: solid lightgray;
}

.add-resolution-button:hover{
    background-color:rgb(247, 88, 2);
}

</style>