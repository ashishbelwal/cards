<template>
  <div class="home">
   <Sidebar />
    <Main />
  </div>
</template>

<script>
import Sidebar from './sections/Sidebar.vue'
import Main from './sections/Main.vue'

  export default {
    name: 'Index',

    components: {
    Sidebar,
    Main
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
    }
  }
</style>
