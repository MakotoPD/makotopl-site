<template>
    <div class="container">
        <div class="dark_filtr" ref="dark_filtr" @click="close_filtr()">
            <div class="cont">
                <h1>Filtruj</h1>
                <div class="elements_cont">
                    <div class="flex">
                        <button @click="logo = true, illustration = true, banner = true, wallpaper = true">Wszystko</button>
                        <button @click="logo = true, illustration = false, banner = false, wallpaper = false">Logo</button>
                        <button @click="logo = false, illustration = false, banner = true, wallpaper = false">Banery</button>
                    </div>
                    <div class="flex">
                        <button @click="logo = false, illustration = false, banner = false, wallpaper = true">Tapety</button>
                        <button @click="logo = false, illustration = true, banner = false, wallpaper = false">Ilustracje</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="filtr_container">
            <button @click="open_filtr()">Filtruj</button>
        </div>

        <div class="port">
            <div v-show="logo" class="logo"><img src="../../assets/portfolio/logo/1.png" alt="1"></div>
            <div v-show="logo" class="logo"><img src="../../assets/portfolio/logo/2.png" alt="2"></div>
            <div v-show="logo" class="logo"><img src="../../assets/portfolio/logo/3.png" alt="3"></div>
            <div v-show="logo" class="logo"><img src="../../assets/portfolio/logo/4.png" alt="4"></div>
            <div v-show="logo" class="logo"><img src="../../assets/portfolio/logo/5.png" alt="5"></div>
            <div v-show="logo" class="logo"><img src="../../assets/portfolio/logo/6.png" alt="6"></div>
            <div v-show="logo" class="logo"><img src="../../assets/portfolio/logo/7.png" alt="7"></div>
            <div v-show="illustration" class="illustration"><img src="../../assets/portfolio/ilustracje/1.png" alt="8"></div>
            <div v-show="illustration" class="illustration"><img src="../../assets/portfolio/ilustracje/2.png" alt="9"></div>
            <div v-show="illustration" class="illustration"><img src="../../assets/portfolio/ilustracje/3.png" alt="10"></div>
            <div v-show="banner" class="banner"><img src="../../assets/portfolio/banery/1.png" alt="11"></div>
            <div v-show="banner" class="banner"><img src="../../assets/portfolio/banery/2.png" alt="12"></div>
            <div v-show="banner" class="banner"><img src="../../assets/portfolio/banery/3.png" alt="13"></div>
            <div v-show="banner" class="banner"><img src="../../assets/portfolio/banery/4.png" alt="14"></div>
            <div v-show="banner" class="banner"><img src="../../assets/portfolio/banery/5.png" alt="15"></div>
            <div v-show="banner" class="banner"><img src="../../assets/portfolio/banery/6.png" alt="16"></div>
            <div v-show="wallpaper" class="wallpaper"><img src="../../assets/portfolio/tapety/1.png" alt="17"></div>
            <div v-show="wallpaper" class="wallpaper"><img src="../../assets/portfolio/tapety/2.png" alt="18"></div>
            <div v-show="wallpaper" class="wallpaper"><img src="../../assets/portfolio/tapety/3.png" alt="19"></div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        logo:true,
        illustration:true,
        banner:true,
        wallpaper:true,
    }),
    methods: {
        open_filtr() {
            const { dark_filtr } = this.$refs
            dark_filtr.classList.add('opened')
        },

        close_filtr() {
            const { dark_filtr } = this.$refs
            dark_filtr.classList.remove('opened')
        }
    },
    name: 'Portfolio'
}
</script>
<style lang="scss" scoped>
$dark-blue: #0091ca;
$light-blue: #00e4e4;

    .container{
        width: 100vw;
        min-height: 100vh; 
        background: url('../../assets/bg/bg.png'); 
        background-repeat: repeat-y;
        overflow: hidden;
        position: relative;
        padding-bottom: 50px;

        .dark_filtr{
            position: fixed;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            background: #000000aa;
            backdrop-filter: blur(10px);
            display: none;
            z-index: 900;

            &.opened{
                display: block;
            }

            .cont{
                position: fixed;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                min-width: 350px;
                min-height: 150px;
                width: 35%;
                height: 35%;
                border-radius: 30px;
                background: white;

                .elements_cont{
                    width: 100%;

                    .flex{
                        width: 49%;
                        float: left;
                        margin-top: 30px;

                        button{
                            display: block;
                            margin-left: 50%;
                            margin-bottom: 20px;
                            transform: translateX(-50%);
                            font-size: 20px;
                            border: none;
                            background: -webkit-linear-gradient(-54deg, $light-blue, $dark-blue);
                            box-shadow: 0px 5px 20px $light-blue;
                            padding: 5px 20px;
                            border-radius: 15px;
                            color: white;
                            transition: .2s;

                            &:hover{
                                transform: translate(-50%, -20%) scale(1.1);
                            }
                        }
                    }
                }
            }
        }

        .filtr_container{
            text-align: left;
            padding: 0 5vw;
            button{
                width: 150px;
                height: 70px;
                font-size: 28px;
                background: none;
                border-width: 0px 0px 0px 3px;
                border-color: black;
                transition: .1s;
                cursor: pointer;

                &:hover{
                    border-width: 0px 0px 0px 7px;
                }

                &:focus{
                    color: silver;
                    border-color: silver;
                }
            }
        }

        .port{
            width: 100%;
            padding-top: 50px;

            div{
                display: inline-flex;
                max-width: 290px;
                width: auto;
                height: auto;
                margin: 20px;
                position: relative;
                overflow: hidden;
                border-radius: 15px;
                transition: .1s;

                &:hover{
                    img{
                        transform: scale(1.1);
                    }
                }

                img{
                    max-width: 290px;
                    transition: .2s;
                }
            }
        }
    }

</style>