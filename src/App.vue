<template>
  <div class="App">
    <NavbarComponent :timeline="timeline" />
    <HomeComponent :timeline="timeline" />
  </div>
</template>

<script>
import 'aos/dist/aos.css';
import AOS from 'aos';
import { gsap } from 'gsap';
import HomeComponent from './components/Home.vue';
import NavbarComponent from './components/HomePage.vue'; 
export default {
  components: {
    NavbarComponent,
    HomeComponent
  },
  data() {
    return {
      timeline: gsap.timeline()
    };
  },
  mounted() {
    AOS.init();
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  height: auto;
}
</style>
