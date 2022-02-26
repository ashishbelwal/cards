<template>
    <div class="card">
        <div class="cardHeader">
            <div class="balance">
                <p>Available balance</p>
                <div class="availableBalance">
                    <span>S$</span>
                    <h4>3000</h4>
                </div>
            </div>
            <div class="cardAction">
                <v-btn depressed to="/newCard"> <img src="../assets/box.svg" alt=""> New card </v-btn>
            </div>
        </div>
        <!-- /.cardHeader -->
        <div class="cardContent">
            <template>
                <v-card flat>
                    <v-toolbar light flat >
                        <template v-slot:extension>
                            <v-tabs
                            v-model="tabs"
                            slider-color="cyan"
                            color="black"
                            >
                                <v-tab>
                                    My debit cards 
                                </v-tab>
                                <v-tab>
                                    All company cards
                                </v-tab>
                            </v-tabs>
                        </template>
                    </v-toolbar>

                    <v-tabs-items v-model="tabs">
                        <v-tab-item>
                           <DebitCard />
                        </v-tab-item>
                        <v-tab-item>
                           <DebitCard />
                        </v-tab-item>
                    </v-tabs-items>
                </v-card>
            </template>
        </div>
    </div>
</template>

<script>
import DebitCard from "../components/DebitCard"
    export default{
    name: "Card",
    data() {
        return {
            tabs: null,
        };
    },
    components: { DebitCard }
}
</script>
<style lang="scss">
    .card{
        .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active), .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon, .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn, .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
            color: rgba(0, 0, 0, 0.3);
            font-weight: 300;
        }
        p{
            margin-bottom: 12px;
        }
        .v-sheet{
            height: 85px!important;
        }
        .v-toolbar__content{
            height: 34px!important;
        }
        .cardHeader{
            margin-top: 59px;
            display: flex;
            align-items: end;
            justify-content: space-between;
            width: 100%;
            .balance{
                .availableBalance{
                    display: flex;
                    justify-content: start;
                    align-items: center;
                    span{
                        padding: 2px 13px;
                        background: rgba(1, 209, 103, 1);
                        border-radius: 4px;
                        font-size: 13px;
                        color: #fff;
                        height: 24px;
                        width: 40px;
                        font-weight: 700;
                        display: flex;
                        justify-content: start;
                        align-items: center;
                        
                    }
                    h4{
                        font-size: 24px;
                        font-weight: 700;
                        margin-left: 12px;
                    }
                }
            }
            .cardAction{
                a{
                    background: rgba(50, 91, 175, 1);
                    color: #fff;
                    font-size: 13px;
                    img{
                        margin-right: 8px;
                    }
                }
            }
        }
        .v-tab{
            padding: 0;
            margin-right: 32px;
            &::before{
                    background: #fff!important;
                }
            &:hover{
                &::before{
                    background: #fff!important;
                }
            }
        }
        .v-tabs-slider-wrapper{
            padding: 0px 12px 0px 10px;
        }
        .v-tabs-items{
            margin-top: 16px;
            padding: 32px 40px;
            box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
            margin-bottom: 90px;
        }
    }
    @media only screen and (max-width: 768px){
        .card .v-tabs-items{
            padding: 12px 0px;
            box-shadow: none;
        }
        .balance{
            p{
                color: #fff;
            }
        }
        .availableBalance{
            h4{
                color: #fff;
            }
        }
        .cardAction{
            a{
                background: transparent!important;
                color: #23CEFD!important;
            }
        }
        .theme--light.v-toolbar.v-sheet, .theme--light.v-toolbar.v-sheet, .theme--light.v-card{
            background: #0d365a!important;
            border-color:#0d365a!important;
            box-shadow: none!important;
        }
        .v-tab.v-tab{
            color: #fff!important;
        }
        .card .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active), .card .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon, .card .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn, .card .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled{
            color: rgba(255, 255, 255, 1.5)
        }
    }
</style>