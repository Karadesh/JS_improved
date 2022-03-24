<template>
  <div id="app">
    <img src="./assets/images/img-style/gen_logo.png" alt="genshin-logo">
    <img class="logo" src="./assets/images/img-style/logo.png" alt="shop-logo">
    <v-main></v-main>
  </div>
</template>

<script>
import vMain from './components/v-main.vue'

export default {
  name: 'app',
  components: {
    vMain
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url(./assets/images/img-style/nature_2.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}

.logo{
  width:50%;
}


</style>
