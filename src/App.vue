<template>
  <div id="app">
    <div id="navbar">
      <div id="sm">
        <a href="https://www.facebook.com/MakotoPL" target="_blank"><img src="./assets/sm/fb.svg" alt=""></a>
        <a href="https://www.instagram.com/MakotoPL" target="_blank"><img src="./assets/sm/ig.svg" alt=""></a>
        <a href="https://www.twitter.com/MakotoPL" target="_blank"><img src="./assets/sm/tw.svg" alt=""></a>
        <a href="mailto:makoto.kontakt@gmail.com" target="_blank"><img src="./assets/sm/m.svg" alt=""></a>
        <a href="https://www.github.com/MakotoPD" target="_blank"><img src="./assets/sm/gh.svg" alt=""></a>
      </div>
      <a href="/"><img src="./assets/logo/logo text czarne.png" alt="M a k o t o."></a>
      <button @click="open_menu()" id="open_menu">
        <div id="hamburger"></div>
      </button>
    </div>
    <div ref="nav" id="nav">
      <button @click="close_menu()" id="close-menu"><img src="./assets/info-img/arrow_l.svg" alt="<-"></button>
      <div id="menu">
        <div class="a"><router-link to="/">START</router-link></div>
        <div class="a"><router-link to="/portfolio">PORTFOLIO</router-link></div>
        <div class="a"><router-link to="/contact">KONTAKT</router-link></div>
      </div>
    </div>
    <div ref="dark_bg" id="dark_bg"></div>
    <router-view/>
  </div>
</template>

<script>

export default {
  methods: {

    close_menu() {
      const { nav, dark_bg } = this.$refs
      nav.classList.remove('opened')
      dark_bg.classList.remove('opened')
    },
    
    open_menu() {
      const { nav, dark_bg } = this.$refs
      nav.classList.add('opened')
      dark_bg.classList.add('opened')
    }
  }
}

</script>

<style lang="scss">
$dark-blue: #0091ca;
$light-blue: #00e4e4;
$white: #fff;
$black: #000;

body{
  margin: 0;
  padding: 0;
  background: $white;
  overflow-x: hidden;
}
button{
  outline: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#navbar{
  width: 90%;
  height: 60px;
  background-color: white;
  border-radius: 30px;
  position: fixed;
  top: 15px;
  left: 5%;
  box-shadow: 0px 5px 25px -5px rgba(0, 0, 0, 0.39);
  z-index: 100;

  img{
    height: 100%;
  }
  #sm{
    height: 60px;
    position: absolute;
    left: 25px;

    img{
      padding: 15px 5px;
      height: 50%;
    }
  }
  #open_menu{
    width: 55px;
    height: 50px;
    position: absolute;
    right: 25px;
    top: 5px;
    background: transparent;
    border: 0;
    z-index: 21;

    &:hover{

      #hamburger{
        height: 6px;
        width: 40px;
        background-color: #000;
        border-radius: 4px;
        position: absolute;
        right: 3px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 20;
      }

        #hamburger::before{
        content: '';
        height: 6px;
        width: 40px;
        background-color: $black;
        border-radius: 4px;
        position: absolute;
        bottom: 13px;
        right: 0px;
      }

      #hamburger::after{
        content: '';
        height: 6px;
        width: 40px;
        background-color: $black;
        border-radius: 4px;
        position: absolute;
        top: 13px;
        right: 0px;
      }
      }
    
    #hamburger{
      height: 6px;
      width: 40px;
      background-color: $black;
      border-radius: 4px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      transition: .2s;

      &::before{
        content: '';
        height: 6px;
        width: 40px;
        background-color: $black;
        border-radius: 4px;
        position: absolute;
        bottom: 13px;
        right: 8px;
        transition: .2s;
      }

      &::after{
        content: '';
        height: 6px;
        width: 40px;
        background-color: $black;
        border-radius: 4px;
        position: absolute;
        top: 13px;
        right: 8px;
        transition: .2s;
      }
    }
  }
}

#nav {
  height: 100vh;
  width: 70vw;
  position: fixed;
  right: -100%;
  top: 0;
  background-color: $white;
  text-align: left;
  transition: .6s;
  z-index: 200;

  &.opened{
    right: 0%;
  }

  #close-menu{
    width: 80px;
    height: 80px;
    background-color: transparent;
    border: none;
    padding: 10px 10px;
    position: absolute;
    left: 100px;
    top: 20px;
    z-index: 21;

    img{
      position: relative;
      top: -5px;
      left: 0;
      transition: .2s;
      z-index: 20;
    }

    &:hover{
      img{
        left: -10px;
      }
    }
  }

  #menu{
    position: absolute;
    left: 70px;
    top: 50%;
    transform: translateY(-50%);

    .a{
      padding: 0px 0;
    }

    a {
      font-weight: bold;
      font-size: 120pt;
      color: $black;
      text-decoration: none;
      transition: .3s;

      &:hover{
        padding-left: 100px;
      }
      &.router-link-exact-active {
        color: $light-blue;
        background: -webkit-linear-gradient(-54deg, $light-blue, $dark-blue);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}
#dark_bg{
  opacity: 0;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-color: $black;
  transition: .3s;

  &.opened{
    z-index: 19;
    opacity: .7;
    backdrop-filter: blur(15px);
  }
}
</style>
