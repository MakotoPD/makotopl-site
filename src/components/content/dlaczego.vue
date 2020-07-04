<template>
    <div class="why">
        <div class="text">
            <h3>Dlaczego warto?</h3>
            <h1>Twoje zamówienie moe być zrealizowane nawet w 48h!</h1>
            <h2>STARAM SIĘ WYKONYWAC ZAMÓWIENIA TAK ABY ŻADEN SZCZEGÓŁ NIE ZOSTAŁ POMINIĘTY,
A ZA RAZEM W JAK NAjLEPSZYM CZASIE ABY KLIENT NIE MUSIAŁ CZEKAĆ</h2>
        </div>
        <div class="button">
            <button>NAPISZ TERAZ</button>
        </div>
        <div class="box_cyt">
            <div class="cyt">
                <h1>Nowoczesne podejście do zamówienia</h1>
                <div class="mkt">
                    Makoto.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Dlaczego'
}
</script>

<style lang="scss" scoped>
    .why{
        background: url('../../assets/bg/bg.png');
        min-height: 100vh;
        width: 100vw;

    }

    .text{
        width: 100vw;
        height: 40%;
        
        h3{
            font-size: 26px;
            color: #888;
            font-family: 'Roboto', sans-serif;
            letter-spacing: 5px;
        }

        h1{
            text-transform: uppercase;
            font-family: 'Roboto', sans-serif;
            padding-left: 20px;
            padding-right: 20px;
        }

        h2{
            text-transform: uppercase;
            width: 50%;
            font-size: 18px;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            color: #666;
            margin-top: 40px;
            margin-bottom: 40px;
            font-family: 'Roboto', sans-serif;
        }
    }

    .button{
        width: 100vw;

        button{
            padding: 20px 40px;
            font-size: 24px;
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            color: white;
            background:  linear-gradient(to top, #0091ca, #00e4e4);
            border-radius: 20px;
            border: none;
            box-shadow: 0px 10px 40px -4px #00e4e4;
            transition: .3s;

            cursor: pointer;

            &:hover{
                transform: scale(1.05);
            }
        }
    }

    .box_cyt{
        width: 100vw;
        height: auto;
        padding: 50px 0;
        margin: 100px 0;

        .cyt{
            width: 700px;
            height: 200px;
            border-radius: 20px;
            background:  linear-gradient(-25deg, #0091ca, #00e4e4);
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            box-shadow: 0px 10px 40px -4px #00e4e4;

            h1{
                text-transform: uppercase;
                font-family: 'Roboto', sans-serif;
                font-weight: 900;
                font-size: 36px;
                color: white;
                position: relative;
                top: 50%;
                transform: translateY(-50%);
            }

            .mkt{
                width: 150px;
                padding: 15px 5px;
                background-color: white;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translate(-50%, 50%);
                font-family: 'Roboto', sans-serif;
                letter-spacing: 5px;
                border-radius: 20px;
                box-shadow: 0px 15px 30px -4px #00e4e4;
            }
        }
    }
</style>