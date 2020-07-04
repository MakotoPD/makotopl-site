<template>
    <div id="hero">
        <h1>Portfolio</h1>
    </div>
</template>
<script>
export default {
    name: 'Portfoliohero'
}
</script>

<style lang="scss" scoped>
    #hero{
        width: 100vw;
        min-height: 90vh; 
        background: url('../../assets/bg/bg.png'); 
        overflow: hidden;
        position: relative;

        h1{
            position: absolute;
            left: 50%;
            top: 40%;
            transform: translate(-50%, -50%);
            font-size: 88px;
            letter-spacing: 1.5vw;
        }
    }
</style>