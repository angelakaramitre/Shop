
<template>
  <div class="fh5co-loader"></div>
  
  <div id="page">
    <Navbar></Navbar>
    <router-view :key="$route.fullPath"></router-view>
    <Footer></Footer>
  </div>

  <div class="gototop js-top">
    <a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue"

export default {
name: 'App',
components:{
  Navbar,
  Footer,
}
}
</script>