<template>
    <header class="header">
        <h1 class="head-line">Res·o·lute</h1>
        <h5>admirably purposeful, determined, and unwavering.</h5>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+SC&display=swap');

    .header {
        background: #233964;
        color: #ffff;
        text-align: center;
        padding: 20px;
        font-family: 'Noto Sans SC', sans-serif;
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
        letter-spacing: 2px;
    
    }


</style>