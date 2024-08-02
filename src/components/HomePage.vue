<template>
  <div class="home">
    <nav class="navbar">
      <div class="menu"><i class="fas fa-bars"></i></div>
      <div class="logo"><i class="fas fa-home">Inventory</i></div>
      <div class="search"><i class="fas fa-search"></i></div>
      <div class="cart"><i class="fas fa-shopping-cart"></i></div>
      <div class="profile">
        <img class="profile-img" :src="img" alt="Profile Image" />
      </div>
    </nav>
    <!-- 
    <section class="content">
      <div class="split left">
        <div class="text">
          <h2>cruiser skateboard</h2>
          <h1>mmm ahhh<br />...push it!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam itaque aspernatur, nobis quis asperiores
            corporis fuga dolores repellendus facere quae dolorem inventore harum tempora. Dolorem, sequi.
            Necessitatibus eveniet provident autem.</p>
          <button>Discover more</button>
        </div>
        <img class="skateBoard" :src="img" alt="Skateboard Image">
      </div>
      <div class="split right">
        <div class="text">
          <h2>adidas pharrel williams tennis hu</h2>
          <h1>because<br />i'm happy<br />again</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam itaque aspernatur, nobis quis asperiores
            corporis fuga dolores repellendus facere quae dolorem inventore harum tempora. Dolorem, sequi.
            Necessitatibus eveniet provident autem.</p>
          <button>Discover more</button>
        </div>
        <img class="shoes" :src="img2" alt="Shoes Image" />
      </div>
    </section> -->
  </div>
</template>

<script>
import img from '../assets/car.jpg';
import img2 from '../assets/sam.jpg';


export default {
  
  name: 'NavbarComponent',

  data() {
    return {
      img,
      img2
    }
  }
}
</script>

<style scoped>
.home {
  padding: 0;
  margin: 0;
  height: 10vh;
  width: 100%;
  font-family: 'Courier New', Courier, monospace;
  overflow: hidden;
  background-color: black;
}

.fas {
  font-size: 25px;
}

.navbar>div {
  padding: 0 30px;
  color: white;
}

.logo {
  margin: auto;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.navbar {
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  font-size: 20px;
  display: flex;
  align-items: center;
}
 
.profile-img {
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
}
h2 {
  font-size: 1.2em;
  margin: 0;
  text-transform: uppercase;
}

/*
.content {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
}

.split {
  position: relative;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.split.left {
  background-color: #0098db;
  color: #ffffff;
}

.split.right {
  background-color: #ffa500;
  color: #000000;
}

.text {
  position: absolute;
  top: 20px;
  left: 20px;
}

h1 {
  font-size: 2em;
  margin: 0;
}


p {
  font-size: 1em;
  margin: 10px 0;
}

button {
  background-color: #ffffff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

img.skateBoard,
img.shoes {
  width: 80%;
  max-width: 300px;
  height: auto;
} */

</style>
