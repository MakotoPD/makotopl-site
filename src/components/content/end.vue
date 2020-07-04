<template>
    <div class="end">    
        <div class="content">
            <h2>Moje projekty webowe:</h2>
        </div>
        <div class="projects">
            <div class="images">
                <a href="http://radec24.pl" target="_blank"><img src="../../assets/firmy/radec.png" alt=""></a>
                <a href="https://frbslusarczyk.pl" target="_blank"><img src="../../assets/firmy/osusz.png" alt=""></a>
                <a href="https://frbslusarczyk.pl" target="_blank"><img src="../../assets/firmy/frb.png" alt=""></a>
                <a href="http://" target="_blank"><img src="../../assets/firmy/phx.png" alt=""></a>
            </div>
        </div>
        <div class="cont">
            <h1>skontaktuj się już teraz</h1>
            <a href="/contact"><button>Kontakt</button></a>
        </div>
    </div>    
</template>

<script>
export default {
  name: 'End'
}
</script>

<style lang='scss' scoped>
    .end{
        width: 100vw;
        min-height: 100vh;
        background: url('../../assets/bg/bg.png');
        text-align: center;
        position: relative;

        .content{
            h2{
                color: #444;
                text-transform: uppercase;
            }
        }

        .projects{
            width: 100vw;
            height: 200px;
            margin-top: 50px;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;

            .images{
                width: 100%;
                height: 100%;
                position: relative;

                img{
                    width: 15%;
                    position: relative;
                    padding: 5px 20px;
                    filter: contrast(.6);
                    transition: .2s;

                    &:hover{
                        filter: contrast(1);
                        transform: scale(1.05);
                    }

                }
            }
        }

        .cont{
            min-width: 280px;
            width: 50%;
            height: 250px;
            border-radius: 45px;
            background: linear-gradient(-25deg, #0091ca, #00e4e4);
            position: absolute;
            left: 50%;
            bottom: 20%;
            transform: translateX(-50%);
            
            h1{
                color: white;
                text-transform: uppercase;
                font-weight: 900;
                padding-top: 20px;
                padding-left: 10px;
                padding-right: 10px;
            }

            button{
                font-size: 28px;
                font-weight: 100;
                text-transform: uppercase;
                font-family: 'Roboto', sans-serif;
                background: white;
                border-radius: 20px;
                color: black;
                border: 0;
                width: 20%;
                min-width: 180px;
                height: 50px;
                position: absolute;
                left: 50%;
                bottom: 50px;
                transform: translateX(-50%);
                box-shadow: 0 10px 30px -5px #00000060;
                transition: .3s;
                cursor: pointer;

                &:hover{
                    transform: translate(-50%, -10%) scale(1.1);
                    box-shadow: 0 10px 30px -5px #000;
                }
            }
        }
    }
</style>
