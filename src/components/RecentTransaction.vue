<template>
  <div class="cardDetailss">
    <v-expansion-panels  v-model="panel" multiple>
        <v-expansion-panel>
            <v-expansion-panel-header>
                <div class="iconWrapper">
                    <img src="../assets/Group 11889-1.svg" alt="">
                    <span>Recent transactions</span>
                </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-container>
                    <v-row>
                        <v-col cols="2" class="icon">
                            <span>
                                <img src="../assets/file-storage.svg" alt="">
                            </span>
                        </v-col>
                        <v-col cols="6" class="shortDetail">
                            <h3>Hamleys</h3>
                            <p>20 May 2020</p>
                        </v-col>
                        <v-col cols="4">
                            <div  class="amount">
                                <h3 style="color: rgba(1, 209, 103, 1)">+ S$ 150</h3>
                                <img src="../assets/next.svg" alt="">
                            </div>
                        </v-col>
                        <v-col col="12" style="margin-top: -30px;">
                            <a href="" class="refund">
                                <span class="imgWrap">
                                    <img src="../assets/business-and-finance.svg" alt="">
                                </span>
                                 Refund on debit card
                            </a>
                        </v-col>
                    </v-row>
                </v-container>
                <v-divider></v-divider>
                <v-container>
                    <v-row>
                        <v-col cols="2" class="icon">
                            <span style="background: rgba(0, 214, 181, 0.1);">
                                <img src="../assets/flights.svg" alt="">
                            </span>
                        </v-col>
                        <v-col cols="6" class="shortDetail">
                            <h3>Hamleys</h3>
                            <p>20 May 2020</p>
                        </v-col>
                        <v-col cols="4">
                            <div  class="amount">
                                <h3>- S$ 150</h3>
                                <img src="../assets/next.svg" alt="">
                            </div>
                        </v-col>
                        <v-col col="12" style="margin-top: -30px;">
                            <a href="" class="refund">
                                <span class="imgWrap">
                                    <img src="../assets/business-and-finance.svg" alt="">
                                </span>
                                 Charged to debit card
                            </a>
                        </v-col>
                    </v-row>
                </v-container>
                <v-divider></v-divider>
                <v-container>
                    <v-row>
                        <v-col cols="2" class="icon">
                            <span style="background: rgba(242, 81, 149, 0.1);">
                                <img src="../assets/megaphone.svg" alt="">
                            </span>
                        </v-col>
                        <v-col cols="6" class="shortDetail">
                            <h3>Hamleys</h3>
                            <p>20 May 2020</p>
                        </v-col>
                        <v-col cols="4">
                            <div  class="amount">
                                <h3>- S$ 150</h3>
                                <img src="../assets/next.svg" alt="">
                            </div>
                        </v-col>
                        <v-col col="12" style="margin-top: -30px;">
                            <a href="" class="refund">
                                <span class="imgWrap">
                                    <img src="../assets/business-and-finance.svg" alt="">
                                </span>
                                 Charged to debit card
                            </a>
                        </v-col>
                    </v-row>
                </v-container>
                <v-divider></v-divider>
                <v-container>
                    <v-row>
                        <v-col cols="2" class="icon">
                            <span>
                                <img src="../assets/file-storage.svg" alt="">
                            </span>
                        </v-col>
                        <v-col cols="6" class="shortDetail">
                            <h3>Hamleys</h3>
                            <p>20 May 2020</p>
                        </v-col>
                        <v-col cols="4">
                            <div  class="amount">
                                <h3 >- S$ 150</h3>
                                <img src="../assets/next.svg" alt="">
                            </div>
                        </v-col>
                        <v-col col="12" style="margin-top: -30px;">
                            <a href="" class="refund">
                                <span class="imgWrap">
                                    <img src="../assets/business-and-finance.svg" alt="">
                                </span>
                                 Charged to debit card
                            </a>
                        </v-col>
                    </v-row>
                </v-container>
                
            </v-expansion-panel-content>
            <div class = "v-expansion-panel-footer">
                <v-btn plain>View all card transactions</v-btn>
            </div>
        </v-expansion-panel>
    </v-expansion-panels>
  </div>
  <!-- /.cardDetails -->
</template>

<script>
    export default{
        name: 'RecentTransaction',
        data: () => ({
        panel: [0],
        }),
    }
</script>

<style lang="scss">
    .cardDetailss{
        margin-top: 24px;
        margin-bottom: 60px;

        .container{
            padding: 16px;
        }
    }
    .theme--light.v-divider {
        border-color: rgba(245, 245, 245, 1);
        width: 95%;
        margin: 0 auto;
        margin-bottom: 20px;
    }
    .iconWrapper{
        display: flex;
        align-items: center;
        font-size: 14px;
        color: rgba(12, 54, 90, 1);
        img{
            margin-right: 12px;
        }
    }
    .refund{
        font-size: 12px;
        text-decoration: none;
        color: rgba(50, 91, 175, 1)!important;
        margin-left: 60px;
        span{
            background: #325baf;
            border-radius: 15px;
            width: 26px;
            height: 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-right: 8px;
            img{
                width: 10px;
            }
            
        }
    }
    .v-expansion-panels{
        border: 1px solid rgba(245, 245, 245, 1);
        border-radius: 12px!important;
        overflow: hidden;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.04)!important;

        .icon{
            span{
                background: rgba(0, 157, 255, 0.1);
                border-radius: 50%;
                width: 48px;
                height: 48px;
                display: inline-flex;
                padding: 16px;
            }
        }
        .shortDetail{
            padding-top: 18px;
            cursor: pointer;
            h3{
                font-size: 14px;
            }
            p{
                font-size: 13px;
                color: rgba(170, 170, 170, 1);
            }
        }
        .amount{
            display: flex;
            justify-content: end;
            align-items: baseline;
            margin-top: 5px;
            cursor: pointer;
            h3{
                font-size: 16px;
                margin-right: 10px;
                text-align: right;
            }
        }
    }
    .v-expansion-panel::before{
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.04)!important;
    }
    .v-expansion-panel-header__icon{
        i{
            background: rgba(0, 0, 0, 0.15);
            border-radius: 50%;
            color: #fff!important;
        }
    }
    .v-expansion-panel-header{
        background: rgba(245, 249, 255, 1);
        padding: 24px!important;
    }
    .v-expansion-panel-footer{
        background: rgba(245, 249, 255, 1);
        padding: 16px!important;
        text-align: center;
        display: flex;
        justify-content: center;
        .v-btn{
            height: 20!important;
            span{
                color: rgba(1, 209, 103, 1);
            }
        }
    }
    .v-expansion-panel-content__wrap{
        padding: 24px!important;
        h4{
            color: rgb(88 88 88);
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 10px;
        }
    }
    @media only screen and (max-width: 768px){
        .v-expansion-panel-content__wrap {
            padding: 24px 0px !important;
        }
    }
</style>