<template>
  <div class="cardDetails">
    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-header>
                <div class="iconWrapper">
                    <img src="../assets/Group 11889.svg" alt="">
                    <span>Card Details</span>
                </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <h4>Name : <span>Mark Henry</span></h4>
                <h4>Card Number : <span>4444 3333 2222 1111</span></h4>
                <h4>Thru : <span>12/20</span></h4>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
  </div>
  <!-- /.cardDetails -->
</template>

<script>
    export default{
        name: 'CardDetails',
    }
</script>

<style lang="scss">
    .cardDetails{
        margin-top: 34px;
        @media only screen and (max-width: 768px){
        .v-expansion-panel-content__wrap {
            padding: 24px 20px !important;
        }
    }
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
    .v-expansion-panels{
        border: 1px solid rgba(245, 245, 245, 1);
        border-radius: 12px!important;
        overflow: hidden;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.04)!important;
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
    .v-expansion-panel-content__wrap{
        padding: 24px!important;
        h4{
            color: rgb(88 88 88);
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 10px;
        }
    }
</style>