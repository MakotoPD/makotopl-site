<template>
    <div class="zal">
        <div>
            <h1>MOJE ZALETY</h1>
            <h4>ZALETY DZIĘKI KTÓRYM SPRAWIĘ ŻE TWOJE ZAMÓWIENIE BĘDZIE WYJĄTKOWE</h4>
        </div>
        
        <div class="container">
            <div class="content">
                <div class="circle"></div>
                <div class="c_">
                    <img src="../../assets/zalety/responsive.svg" alt="">
                </div>
                <h1>Responsywne strony</h1>
                <p>Dostosowanie strony internetowej zarówno do monitora komputera/laptopa jak i do tableta oraz telefonu.</p>
            </div>
            <div class="content">
                <div class="circle"></div>
                <div class="c_">
                    <img src="../../assets/zalety/phone.svg" alt="">
                </div>
                <h1>Kontakt</h1>
                <p>Kontakt 24/7. Również w weekendy potrafię poświęcić chwilę dla klienta.</p>
            </div>
            <div class="content">
                <div class="circle"></div>
                <div class="c_">
                    <img src="../../assets/zalety/plan.svg" alt="">
                </div>
                <h1>Plan</h1>
                <p>Klient dostaje plan działań na dany okres czasu i powinien dostarczyć potrzebne mi informacje.</p>
            </div>
            <div class="content">
                <div class="circle"></div>
                <div class="c_">
                    <img src="../../assets/zalety/eye.svg" alt="">
                </div>
                <h1>Oko do szczegółów</h1>
                <p>Strony, grafiki i filmy są dopracowywane do samego końca.</p>
            </div>
            <div class="content">
                <div class="circle"></div>
                <div class="c_">
                    <img src="../../assets/zalety/time.svg" alt="">
                </div>
                <h1>Czas realizacji</h1>
                <p>Strony internetowe są tworzone w jak najkrótszym czasie, lecz to nie przeszkadza temu aby były dopracowane.</p>
            </div>
            <div class="content">
                <div class="circle"></div>
                <div class="c_">
                    <img src="../../assets/zalety/shield.svg" alt="">
                </div>
                <h1>Bezpieczeństwo</h1>
                <p>Zapewniam zabezpieczenie w postaci SSL do witryny.</p>
            </div>
            <div class="content">
                <div class="circle"></div>
                <div class="c_">
                    <img src="../../assets/zalety/clean.svg" alt="">
                </div>
                <h1>Przejrzystość</h1>
                <p>Tworzę witryny w sposób nowoczesny i prosty. Minimalizm także ma swoje uroki</p>
            </div>
            <div class="content">
                <div class="circle"></div>
                <div class="c_">
                    <img src="../../assets/zalety/smile.svg" alt="">
                </div>
                <h1>Renoma</h1>
                <p>Każdy klient odchodzi ode mnie zadowolony i z czystym sercem może mnie polecić.</p>
            </div>
            <div class="content">
                <div class="circle"></div>
                <div class="c_">
                    <img src="../../assets/zalety/vue.svg" alt="">
                </div>
                <h1>Technologia</h1>
                <p>Dzięki nowoczesnej technologii strony są szybkie i lekkie.</p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'Zalety'
}
</script>

<style lang="scss" scoped>
    .zal{
        width: 100vw;
        min-height: 100vh;
        background: url('../../assets/bg/bg.png');
        
        h1{
            font-family: 'Roboto', sans-serif;
        }
        h4{
            color: #666;
        }

        .container{
          width: 95%;
          min-height: 600px;
          position: relative;
          margin: 0 auto;
          padding-top: 150px;

          .content{
            min-width: 280px;
            width: 20%;
            height: 250px;
            background: white;
            display: inline-flex;
            margin: 0 50px;
            border-radius: 30px;
            box-shadow: 0px 20px 40px 10px #00000040;
            position: relative;
            margin-bottom: 100px;
            text-align: right;

            h1{
              width: calc(100% - 55px);
              height: 40px;
              font-size: 24px;
              text-align: center;
              position: absolute;
              right: 0;
              top: 0;
              color: black;
            }

            p{
              padding-top: 80px;
              padding-left: 25px;
              padding-right: 25px;
              text-align: left;
              font-family: 'Roboto', sans-serif;
              font-size: 18px;
              color: #444;
            }

            .circle{
              width: 120px;
              height: 120px;
              background: linear-gradient(-54deg, #0091ca, #00e4e4);
              border-radius: 100%;
              position: absolute;
              top: -45px;
              left: -45px;
              box-shadow: 0px 5px 50px 0px #00000094;
              opacity: .55;
              z-index: 11;
            }

            .c_{
              width: 100px;
              height: 100px;
              background: linear-gradient(-54deg, #0091ca, #00e4e4);
              border-radius: 100%;
              position: absolute;
              top: -35px;
              left:-35px;
              opacity: 1;
              z-index: 12;

              img{
                  width: 65%;
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                  filter: brightness(10);
              }
            }
          }
        }
    }
</style>