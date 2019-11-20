<template>
    <div class="category-unit" v-bind:class="{'is-complete':category.completed}">
        <p>
            <input type="checkbox" v-on:change="markComplete">
            {{category.title}}
            <button @click="$emit('del-category', category.id)" class="del">x</button>
        </p>
            
    </div>

</template>

<script>
export default {
    name: "Category",
    props: ["category"],
    methods: {
        markComplete() {
         this.category.completed = !this.category.completed;
        }
    }
}
</script>

<style scoped>
    .category-item {
        background:grey;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }

    .is-complete {
        text-decoration: line-through;
    }
    .del {
        background: red;
        color: #ffff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right
    }

</style>