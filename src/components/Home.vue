<template>
    <section class="content">
        <div class="conten-inside">
            <h1 data-aos="fade-up">Shop Now!</h1>
            <p>New Arrivals!</p>
            <img class="skateBoard" :src="img" alt="img" />
        </div>
    </section>
</template>

<script>
import img from '../assets/car.jpg';
import img2 from '../assets/sam.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
//   import { gsap } from 'gsap/gsap-core';

export default {
    name: 'HomeComponent',

    data() {
        return {
            img,
            img2,

        };
    },
    mounted() {
        AOS.init({
            duration: 1000, // Duration of the animation in milliseconds
            easing: 'ease-in-out', // Easing function for the animation
        });
    }
};
</script>

<style scoped>
img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-150%, -30%); /* Start off-screen to the left */
    opacity: 0;
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
    height: 50%;
    width: 50%;
}

.content:hover img {
    opacity: 1;
    transform: translate(-10%, -10%); /* Move to final position */
}
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 100%;
    z-index: 100;
    flex-direction: column;
    background-color: black;
}

.conten-inside{
    margin-left: 100px;
    background-color: aliceblue;
}

.content h1 {
    z-index: 100;
    font-size: 180px;
    text-transform: capitalize;
    font-style: italic;
    letter-spacing: -5px;
    font-weight: lighter;
    transition: 1s ease-in-out;
    color: white;
}

.content h1:hover {
    transition: 1s ease-in-out;
    color: rgba(136, 255, 0);
}

.content p {
    z-index: 100;
    margin-top: 50px;
    font-size: 20px;
    display: block;
    font-family: 'Courier New', Courier, monospace;
    font-weight: lighter;
    cursor: pointer;
    text-transform: uppercase;
    color: rgb(180, 180, 180);
    position: relative;
    /* Needed for the pseudo-element to position correctly */
}

.content p::after {
    content: "";
    position: absolute;
    bottom: -10px;
    /* Adjust this as needed */
    left: 0;
    width: 50%;
    height: 2px;
    background: rgba(136, 255, 0);
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 0.3s cubic-bezier(0.2, 1, 0.3, 1);
}

.content p:hover::after {
    transform: scaleX(1);
}
</style>