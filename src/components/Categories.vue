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
    props: ["categories"]
}
</script>

<style scoped>

</style>