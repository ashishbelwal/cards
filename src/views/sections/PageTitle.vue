<template>
  <div class="pageTitle">
    <slot>

    </slot>
    <v-divider></v-divider>
  </div>
</template>

<script>

  export default {
    name: 'PageTitle',

    components: {
    },
  }
</script>
<style lang="scss">
  .pageTitle{
    margin-top: 40px;
  }
</style>
