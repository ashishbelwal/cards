<template>
    <div class="navWrapper">
      <Navigation />
    </div>
</template>

<script>
  import Navigation from '../../components/Navigation'

  export default {
    name: 'Sidebar',

    components: {
      Navigation,
    },
  }
</script>
<style lang="scss">
  .v-btn, .v-tab{
    text-transform:none!important;
  }
  .home{
    display: flex;
    .navWrapper{
      max-width: 340px;
      width: 100%;
    }
    .contentWrapper{
      padding: 0px 60px;
      width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    .navWrapper{
      position: fixed;
      bottom: 0;
      max-width: 100%!important;
      height: 70px;
      z-index: 999;
    }
  }
</style>
