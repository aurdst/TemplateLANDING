<template>
  <v-app>
    <v-main class="main">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style >
div.v-container{
  padding: 0;
  max-width: 100%!important;
}
.main{
  overflow-x: hidden;
}
</style>
