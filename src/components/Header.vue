<template>
    <header class="header">
        <h1 class="head-line">Resolute</h1>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Sedgwick+Ave&display=swap');

    .header {
        background: lightseagreen;
        color: #ffff;
        text-align: center;
        padding: 20px;
        font-family: 'Sedgwick Ave', cursive;
        font-size: 30px;
    }

    .header a{
        color: #ffff;
        padding-right: 5px;
    }

    .head-line{
        border-color: black;
        border: 4px solid white;
        padding: 12px;
        letter-spacing: 6px;
    
    }


</style>