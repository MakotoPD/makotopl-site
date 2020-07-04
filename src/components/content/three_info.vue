<template>
  <div class="three">
    <div class="container">
      <div class="content white">
        <div class="circle">
        </div>
        <div class="c_"></div>
        <h1>Grafika</h1>
        <p>Tworzę grafiki rastrowe jak i wektorowe w profesjonalnuch programach od Adobe.</p>
      </div>
      <div class="content">
        <div class="circle">
        </div>
        <div class="c_ white"></div>
        <h1>FrontEnd</h1>
        <p>Tworzę strony statyczne oparte o nowoczesną technologię, bądź też o wordpress'a.</p>
      </div>
      <div class="content white">
        <div class="circle">
        </div>
        <div class="c_"></div>
        <h1>Montaż</h1>
        <p>Montuję filmy, reklamy, a także tworzę proste animajcje reklamujące twój produkt.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThreeInfo'
}
</script>

<style lang="scss" scoped>
    .three{
        min-height: 100vh;
        width: 100vw;
        background: url('../../assets/bg/bg.png');

        .container{
          width: 95%;
          min-height: 600px;
          position: relative;
          margin: 0 auto;
          padding-top: 150px;

          .content{
            width: 300px;
            height: 450px;
            background: linear-gradient(-54deg, #0091ca, #00e4e4);
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
              text-align: center;
              position: absolute;
              right: 0;
              top: 0;
              color: white;
            }

            p{
              padding-top: 80px;
              padding-left: 25px;
              padding-right: 25px;
              text-align: left;
              font-family: 'Roboto', sans-serif;
              font-size: 24px;
              color: white;
            }

            &.white{
              background: white;

              h1{
                color: black;
              }

              p{
                color: black;
              }

              .circle{
                background: linear-gradient(-54deg, #0091ca, #00e4e4);
              }

              .c_{
                background: linear-gradient(-54deg, #0091ca, #00e4e4);
              }
            }

            .circle{
              width: 120px;
              height: 120px;
              background: white;
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
              background: white;
              border-radius: 100%;
              position: absolute;
              top: -35px;
              left:-35px;
              opacity: 1;
              z-index: 12;
            }
          }
        }
    }
</style>