<template>
  <div class="navigation">
      <div class="brand">
          <div class="logo">
              <img src="../assets/Aspire Logo.svg" alt="Aspire">
          </div>
          <div class="content">
              <p>Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
          </div>
          <!-- /.content -->
      </div>
      <!-- /.brand -->
      <NavContent />
  </div>
</template>

<script>
  import NavContent from './NavContent.vue'
  export default {
    name: 'Navigation',
    components: {
      NavContent,
    },

  }
</script>

<style lang="scss">
  .navigation{
    background: #0C365A;
    min-height: 100vh;
    height: 100%;
    padding: 48px;
    position: fixed;
    max-width: 340px;
    width: 100%;
    .brand{
      .content{
        margin-top: 19px;
        p{
          margin: 0;
          color: rgba(255, 255, 255, .3);
        }
      }
    }
  }
  @media only screen and (max-width: 768px){
    .navigation{
      background: #fff!important;
      min-height: 56px;
      padding: 9px;
      box-shadow: 0px -3px 6px #00000014;
      max-width: 100%;
      .brand{
        display: none;
      }
    }
  }
</style>
