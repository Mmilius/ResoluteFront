<template>
    <div class="category-unit" v-bind:class="{'is-complete':category.completed}">
        <p>
            <input type="checkbox" v-on:change="markComplete">
            {{category.title}}
            <button @click="$emit('del-category', category.id)" class="del">x</button>
        </p>
        <div>
            <img class="goal-image" v-bind:src="category.resolution.image"/>
        </div>
          
        <p> 
            {{category.resolution.motivation}}
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
    .category-unit {
        margin: 10px;
        margin-top: 25px;
        background:white;
        padding: 10px;
        border: 1px black dotted;
        display: flex;
        justify-content: space-evenly;
    }

    .is-complete {
        text-decoration: line-through;
    }
    .del {
        background: red;
        color: #ffff;
        border: none;
        padding: 5px 9px;
        border-radius: 10%;
        cursor: pointer;
    }

    .goal-image{
        width: 110px;
    }

</style>