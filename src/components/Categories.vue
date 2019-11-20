<template>
    <div>
     <div v-bind:key="category.id" v-for="category in categories">
       <Category v-bind:category="category" v-on:del-cagetory="$emit('del-category', category.id)"/>
     </div>
    </div>
</template>

<script>

import Category from './Category.vue';

export default{
    name: "Categories",
    components: {
        Category
    },
    data(){
    return {
    categories: [
      {
          id: 1, 
          title: "Mind",
          completed: false,
          resolution: {
              goal: "Eat More Vegetables",
              motivation: "Lose weight",
              image: "https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg"
          }
        },
        {
          id: 2,
          title: "Body",
          completed: false,
          resolution: {
              goal: "Read more books",
              motivation: "Be smarter",
              image: "https://www.pe.com/wp-content/uploads/2018/11/636337794_27186637-1.jpg?w=525"
          }
        },
    ]
  }
  },
  methods:{
       deleteCategory(id) {
      // delete request for id
      this.categories = this.categories.filter(category => category.id !== id);
    },
  }

}
</script>

<style scoped>

</style>