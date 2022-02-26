<template>
    <div class="contentWrapper">
      <router-view />
    </div>
</template>

<script>

  export default {
    name: 'Main',

  }
</script>
<style lang="scss">
    .v-btn, .v-tab{
        text-transform:none!important;
    }
    .contentWrapper{
        padding: 0px 60px;
        width: 100%;
    }
    @media only screen and (max-width: 768px){
      .contentWrapper{
        padding: 0px 16px!important;
        background: #0C365A;
      }
    }
</style>
