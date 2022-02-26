<template>
    <div class="cardActions">
        <v-container>
            <v-row>
                <div class="actionWrapper">
                     <button v-on:click="freezeCard">
                        <img src="../assets/Freeze card.svg" alt="">
                        <p>Freeze card</p>
                    </button>

                    <button>
                        <img src="../assets/Set spend limit.svg" alt="">
                        <p>Set spend limit</p>
                    </button>

                    <button>
                        <img src="../assets/GPay.svg" alt="">
                        <p>Add to GPay</p>
                    </button>

                     <button>
                        <img src="../assets/Replace card.svg" alt="">
                        <p>Replace card</p>
                    </button>

                    <button>
                        <img src="../assets/Deactivate card.svg" alt="">
                        <p>Cancel card</p>
                    </button>
                   
                </div>
            </v-row>
        </v-container>
    </div>
    <!-- /.cardActions -->
</template>
<script>
    export default { 
        name: 'CardActions',
        methods: {
            freezeCard(){
                console.log("dasdas")
                console.log(this.servicesCarouselItems[this.currentIndex])
            }
        } 
    }
</script>
<style lang="scss">
    .cardActions{
        margin-top: 32px;
        padding: 20px;
        background: rgba(237, 243, 255, 1);
        border-radius: 12px;
        .actionWrapper{
            width: 100%;
            display: flex;
            justify-content: space-around;
            button{
                p{
                    margin: 0;
                    font-size: 13px;
                    max-width: 60px;
                    line-height: 1.2;
                }
                transition: all 0.3s ease;
                &:hover{
                    img{
                        filter: grayscale(1);
                    }
                }
            }
        }
    }
</style>