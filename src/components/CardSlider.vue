<template>
    <div class="cardContainer">
        <v-container class="sideContainer">
            <v-row>
                <div class="showCardBtn">
                        <template v-if = "showCard">
                            <v-btn depressed plain @click="showCard = !showCard">
                                <img src="../assets/remove_red_eye-24px-1.svg" alt="">
                                Show card number
                            </v-btn>
                        </template>
                        <template v-else>
                            <v-btn depressed plain @click="showCard = !showCard">
                                <img src="../assets/remove_red_eye-24px-1.svg" alt="">
                                Hide card number
                            </v-btn>
                        </template>
                    </div>
                <div class="cardSider">
                    <v-carousel :show-arrows="false" ref="carousel" @change="currentIndex = allCards[$event].id">
                        <v-carousel-item
                        v-for="(card,i) in allCards"
                        :key="i"
                        >
                            <div class="card" :style="[card.freeze ? {'background': '#ccc'} : {'background': card.color}]">
                                <div class="cardCompany">
                                    <img src="../assets/Aspire Logo-1.svg" alt="">
                                </div>
                                <div class="cardName">
                                    <h3>{{card.name}}</h3>
                                </div>
                                <div class="cardNumber">
                                    <h3 v-if = "!showCard">
                                        <span>{{card.cardNumber.split(" ")[0]}}</span>
                                        <span>{{card.cardNumber.split(" ")[1]}}</span>
                                        <span>{{card.cardNumber.split(" ")[2]}}</span>
                                        <span>{{card.cardNumber.split(" ")[3]}}</span>
                                    </h3>
                                    <h3 v-else>
                                        <span>
                                            <svg viewBox="0 0 9 9" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4.5" cy="4.5" r="4.5" fill="#fff"/>
                                            </svg>
                                            <svg viewBox="0 0 9 9" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4.5" cy="4.5" r="4.5" fill="#fff"/>
                                            </svg>
                                            <svg viewBox="0 0 9 9" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4.5" cy="4.5" r="4.5" fill="#fff"/>
                                            </svg>
                                            <svg viewBox="0 0 9 9" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4.5" cy="4.5" r="4.5" fill="#fff"/>
                                            </svg>
                                        </span>
                                        <span>
                                            <svg viewBox="0 0 9 9" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4.5" cy="4.5" r="4.5" fill="#fff"/>
                                            </svg>
                                            <svg viewBox="0 0 9 9" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4.5" cy="4.5" r="4.5" fill="#fff"/>
                                            </svg>
                                            <svg viewBox="0 0 9 9" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4.5" cy="4.5" r="4.5" fill="#fff"/>
                                            </svg>
                                            <svg viewBox="0 0 9 9" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4.5" cy="4.5" r="4.5" fill="#fff"/>
                                            </svg>
                                        </span>
                                        <span>
                                            <svg viewBox="0 0 9 9" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4.5" cy="4.5" r="4.5" fill="#fff"/>
                                            </svg>
                                            <svg viewBox="0 0 9 9" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4.5" cy="4.5" r="4.5" fill="#fff"/>
                                            </svg>
                                            <svg viewBox="0 0 9 9" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4.5" cy="4.5" r="4.5" fill="#fff"/>
                                            </svg>
                                            <svg viewBox="0 0 9 9" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4.5" cy="4.5" r="4.5" fill="#fff"/>
                                            </svg>
                                        </span>
                                        {{card.cardLastNumber}}</h3>
                                </div>
                                <div class="othersDetails">
                                    <h4>Thru: {{card.expDate}}</h4>
                                    <h4>CVV: <span>***</span></h4>
                                </div>
                                <div class="cardType">
                                    <img src="../assets/Visa Logo.svg" alt="">
                                </div>
                            </div>
                        </v-carousel-item>
                    </v-carousel>
                </div>
                <!-- /.cardSider -->
            </v-row>
        </v-container>
        <div class="cardActions">
        <v-container>
            <v-row>
                <div class="actionWrapper">
                     <button v-on:click="freezeCard" v-if="allCards.length>0">
                        <img src="../assets/Freeze card.svg" alt="">
                        <template v-if="allCards.find(x => x.id == currentIndex)">
                            <p v-if="allCards.find(x => x.id == currentIndex).freeze == false"> Freeze card </p>
                            <p v-else> Unfreeze card</p>
                        </template>
                        
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

                    <button v-on:click="overlay = !overlay">
                        <img src="../assets/Deactivate card.svg" alt="">
                        <p>Cancel card</p>
                    </button>
                   
                </div>
            </v-row>
        </v-container>
        <v-overlay
          :value="overlay"
        >
            <p>Please click confirm to delete the card!</p>
            <v-btn
                class="mr-6"
                color="error"
                v-on:click="cancelCard"
            >
                Confirm
            </v-btn>
          <v-btn
            color="success"
            @click="overlay = false"
          >
            Cancel
          </v-btn>
        </v-overlay>
    </div>
    <!-- /.cardActions -->
    </div>
    <!-- /.cardContainer -->
</template>
<script>
    import { mapGetters, mapActions} from "vuex";
    export default{
        name: 'CardSlider',
        data: () => ({
            showCard: true,
            overlay: false,
            isFreeze: false,
            currentIndex: 0
        }),
        computed: {
            ...mapGetters(["allCards"]),
            
        },
        watch:{
            currentIndex: function(){
                return this.allCards[0].id;
            }
        },
        methods: {
            ...mapActions(["freeze", "deleteCard"]),
            freezeCard(){
                this.freeze(this.currentIndex)
            },
            cancelCard(){
                this.deleteCard(this.currentIndex);
                this.overlay = false;
                
            }
        }
    }
    
</script>
<style lang="scss">
    .showCardBtn{
        width: 100%;
        display: flex;
        justify-content: end;
        .v-btn{
            padding: 0!important;
            span{
                color: rgba(1, 209, 103, 1);
            }
            img{
                margin-right: 6px;
            }
        }
    }
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
    .cardSider{
        width: 100%;
        .v-carousel__controls{
            height: auto;
            background: none;
            .v-btn--icon.v-size--small {
                height: 28px;
                width: 16px;
            }
            .v-carousel__controls__item {
                margin: 0 4px;
            }
            .v-item--active{
                span{
                    width: 16px;
                    height: 8px;
                    background: rgba(1, 209, 103, 1);
                }
            }
            button{
                span{
                    width: 8px;
                    height: 8px;
                    background: rgba(1, 209, 103, .2);
                    border-radius: 8px;
                    flex: inherit;
                    transition: all 0.5s ease;
                    i{
                        display: none;
                    }
                }
                &::before{
                    display: none!important;
                }
            }
            .v-ripple__container{
                display: none!important;
            }
        }
        .v-carousel{
            height: 292px!important;
        }
        .card{
            background: rgba(1, 209, 103, 1);
            min-height: 248px;
            border-radius: 12px;
            padding: 27px;
            color: #fff;
            .cardCompany{
                display: flex;
                justify-content: end;
            }
            .cardName{
                margin-top: 27px;
                font-size: 24px;
                h3{
                    margin-bottom: 0;
                }
            }
            .cardNumber{
                margin-top: 27px;
                h3{
                    font-size: 14px;
                    color: #fff;
                    font-weight: 700;
                    margin-bottom: 0;
                    letter-spacing: 2px;
                }
                span{
                    margin-right: 27px;
                    @media only screen and (max-width: 768px){
                        margin-right: 10px;
                    }
                    svg{
                        fill: #fff;
                        width: 9px;
                        height: 9px;
                        margin-right: 6.5px
                    }
                }
            }
            .othersDetails{
                display: flex;
                margin-top: 18px;
                h4{
                    margin-right: 36px;
                    margin-bottom: 0px;
                    span{
                        font-size: 30px;
                        line-height: 0px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-top: -8px;
                        margin-left: 42px;
                        letter-spacing: 2.8px;
                    }
                }
            }
            .cardType{
                display: flex;
                justify-content: end;
                margin-top: 4.6px;
            }
        }
    }

    @media only screen and (max-width: 768px){
        .cardSider .v-carousel {
            height: 332px !important;
        }
        .cardActions{
            position: absolute;
            width: 100%;
            left: 0;
            z-index: 9;
            top: calc(100vh - 240px);
            padding-bottom: 30px;
        }
    }
    
    
</style>