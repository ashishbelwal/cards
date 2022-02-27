<template>
    <div class="cardContainer">
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                     <!-- CardSlider -->

                    <CardSlider />

                </v-col>
                <v-col cols="12" md="6" style="padding-top: 22px;" class="mobileView">
                    <CardDetails />
                    <RecentTransaction />
                </v-col>
            </v-row>
        </v-container>
    </div>
    <!-- /.cardContainer -->
</template>
<script>
import CardSlider from "./CardSlider.vue";
import CardDetails from "./CardDetails.vue";
import RecentTransaction from "./RecentTransaction.vue";
    export default{
    name: "DebitCard",
    components: { CardSlider, CardDetails, RecentTransaction },
    data: () => ({
        showCard: true,
    }),
}
    
</script>
<style lang="scss">
    .showCardBtn{
        display: flex;
        justify-content: end;
        .v-btn{
            padding: 0!important;
            img{
                margin-right: 6px;
            }
        }
    }
    @media only screen and (max-width: 768px){
        .mobileView{
            margin-top: calc(100vh - 122px);
            background: #fff;
            z-index: 7;
            padding: 12px 32px;

        }
    }
    
</style>