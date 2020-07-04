<template>
  <div class="hero">
    <div id="laptop_img">
      <img src="../../assets/bg/laptop.png" alt="">
    </div>
    <div id="content">
      <img src="../../assets/logo/logo gradient.png" alt="">
    </div>

    <div id="drop">
      <img src="../../assets/info-img/drop_down.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homehero'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero{
  width: 100vw;
  min-height: 100vh; 
  background: url('../../assets/bg/bg.png');
  overflow: hidden;
  text-align: left;

  #laptop_img{
    position: absolute;
    right: 0;
    top: 0;

    img{
      filter: drop-shadow( -40px 40px 70px rgba(153, 0, 255, 0.692));
      width: 55vw;
      position: relative;
      animation: wiggle 15s infinite ease-in-out;
    }
  }

  #content{
    position: absolute;
    left: 5%;
    top: 40%;

    img{
      width: 35%;
    }
  }

  #drop{
    width: 50px;
    height: 50px;
    position: absolute;
    left: 50%;
    bottom: 15px;
    transform: translateX(-50%);
    animation: drop 1.5s infinite ease-in-out;
  }
}

@keyframes wiggle {
  0% {
    transform: scale(1.1) translate(0, 0);
  }
  10%{
    transform: scale(1.1) translate(7px, 3px);
  }
  20%{
    transform: scale(1.1) translate(1px, -5px);
  }
  30%{
    transform: scale(1.1) translate(-10px, 7px);
  }
  40%{
    transform: scale(1.1) translate(0, 1px);
  }
  50%{
    transform: scale(1.1) translate(10px, 4px);
  }
  60%{
    transform: scale(1.1) translate(-7px, -3px);
  }
  70%{
    transform: scale(1.1) translate(10px, 9px);
  }
  80%{
    transform: scale(1.1) translate(-2px, 1px);
  }
  90%{
    transform: scale(1.1) translate(3px, 0);
  }
  100%{
    transform: scale(1.1) translate(0, 0);
  }
}

@keyframes drop {
  0% {
    transform: translate(-50%, 0);
  }
  50%{
    transform: translate(-50%, -60%);
  }
  100%{
    transform: translate(-50%, 0);
  }
}
</style>
