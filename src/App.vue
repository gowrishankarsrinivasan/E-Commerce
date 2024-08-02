<template>
  <div class="App">

    <HomeComponent />
  </div>
</template>

<script>
import HomeComponent from './components/HomePage.vue'; // Import HomeComponent correctly

export default {
  components: {
    HomeComponent // Register the component
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  /* height: 100vh;
  width: 100vw; */
  box-sizing: border-box;
  background-color: aqua;
}
</style>
