<template>
    <div class="footer">
        <img src="../../assets/logo/logo biale.png" alt="">
        <div class="text">
            <a href="/privacy" ><p>Polityka prywatności</p></a>
            <p>© 2020. Patryk Dąbrowski. All rights reserved</p>
        </div>

    </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
    .footer{
        widows: 100vw;
        height: 250px;
        background: url(../../assets/bg/footer.png);
        text-align: center;
        position: relative;

        img{
            width: 280px;
            margin-top: 30px;
        }

        .text{
            position: absolute;
            left: 50%;
            bottom: 10px;
            transform: translateX(-50%);

            a{
                color: black;
                text-decoration: none;
            }

            p{
                padding: 0;
                margin: 0;
            }
        }
    }
</style>