<template>
    <div id="contacthero">
        <div class="header_contact">
            <h1>Kontakt</h1>
        </div>
        <div class="content">
            <div class="fl">
                <img src="../../assets/bg/image.jpg" alt="">
            </div>
            <div class="fl">
                <div class="form">
                    <h1>Formularz kontaktowy</h1>
                    <form action="https://formspree.io/xleppbje" method="POST">
                        <input type="email" name="_replyto" id="email" placeholder="e-mail"><br>
                        <input type="text" name="firstname" id="fn" placeholder="Imię"><br>
                        <textarea name="message" id="mess" placeholder="Wiadomość"></textarea><br>
                        <input type="submit" id="send" value="Wyślij">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ContactHero'
}
</script>
<style lang="scss" scoped>
    #contacthero{
        width: 100vw;
        min-height: 90vh; 
        background: url('../../assets/bg/bg.png'); 
        overflow: hidden;
        position: relative;

        .header_contact{
            width: 100vw;
            height: 600px;
            position: relative;

            h1{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                font-size: 88px;
                letter-spacing: 1.5vw;
            }
        }

        .content{

            .fl{
                float: left;
                width: 49.9%;
                min-width: 290px;
                min-height: 400px;

                img{
                    max-width: 70%;
                    margin: 30px 10px;
                    border-radius: 30px;
                    filter: brightness(.8) blur(.5px);
                    box-shadow: 0px 5px 50px #0091ca;
                }

                .form{
                    width: 80%;
                    min-height: 450px;
                    background: -webkit-linear-gradient(-54deg, #00e4e4, #0091ca);
                    box-shadow: 0px 5px 50px #00e4e4;
                    margin: 30px 10%;
                    border-radius: 30px;
                    position: relative;
                    top: 10px;

                    h1{
                        padding-top: 20px;
                        margin: 0 30px;
                        margin-bottom: 30px;
                        color: white;
                    }

                    form{
                        #email{
                            width: 50%;
                            height: 30px;
                            margin-top: 10px;
                            border-radius: 10px;
                            border: none;
                            font-size: 20px;
                            text-align: center;
                            outline:none;
                        }
                        #fn{
                            width: 50%;
                            height: 30px;
                            margin-top: 20px;
                            border-radius: 10px;
                            border: none;
                            font-size: 20px;
                            text-align: center;
                            outline:none;
                        }
                        #mess{
                            width: 50%;
                            min-height: 80px;
                            margin-top: 20px;
                            margin-bottom: 20px;
                            border-radius: 10px;
                            border: none;
                            font-size: 18px;
                            text-align: left;
                            outline:none;
                            position: relative;
                            resize: vertical;
                            overflow: auto;
                        }
                        #send{
                            width: 100px;
                            height: 30px;
                            font-size: 19px;
                            border: none;
                            border-radius: 10px;
                            box-shadow: 0px 5px 15px rgba(255, 255, 255, 0.644);
                            transition: .1s;

                            &:hover{
                                transform: scale(0.95);
                                filter: brightness(.8);
                            }
                            &:focus{
                                transform: scale(0.8);
                                filter: brightness(.5);
                            }
                        }
                    }
                }
            }
        }
    }
</style>