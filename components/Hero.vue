<script setup lang="ts">
import { ref } from "vue";

const colorMode = useColorMode();
const theme_value = colorMode.value == "dark" ? ref(true) : ref(false);
const show_animate = ref(false);
const bg_show_animate = ref(false);

function activate_txt_animate() {
  show_animate.value = true;
  bg_show_animate.value = true;
  setTimeout(() => {
    show_animate.value = false;
  }, 1500);
}

onMounted(() => {
  console.log(colorMode.value);
  // useNuxtApp().$bus.$on('toggle_home_theme', val => {
  //   theme_value.value = val
  //   activate_txt_animate()
  // })
  activate_txt_animate();
});
watch(colorMode, (val) => {
   if(val.value === "light"){
    theme_value.value =false
   }else{
    theme_value.value =true

   }

  // theme_value.value = val == "light" ? true : false;
  // console.log(theme_value.value)
  activate_txt_animate();
  //   useNuxtApp().$bus.$emit('toggle_home_theme', is_dark)
});
</script>

<template>
  <div
    class="hero-container"
    :class="[theme_value ? 'dark-background' : 'light-background']"
  >
    <div v-show="!theme_value">
      <img
        class="hero-bg hero-1"
        :class="[bg_show_animate ? 'animation_left_enter' : '']"
        src="/assets/images/hero/draw_1.jpg"
      />
      <img
        class="hero-bg hero-2"
        :class="[bg_show_animate ? 'animation_left_enter' : '']"
        src="/assets/images/hero/3d-illustration-of-building-project-vector (2).jpg"
      />
      <img
        class="hero-bg hero-3"
        :class="[bg_show_animate ? 'animation_left_enter' : '']"
        src="/assets/images/hero/3d-illustration-of-building-project-vector (5).jpg"
      />

      <img
        class="hero-bg hero-4"
        :class="[bg_show_animate ? 'animation_right_enter' : '']"
        src="/assets/images/hero/draw_3.jpg"
      />
      <img
        class="hero-bg hero-5"
        :class="[bg_show_animate ? 'animation_right_enter' : '']"
        src="/assets/images/hero/3d-illustration-of-building-project-vector (2).jpg"
      />
      <img
        class="hero-bg hero-6"
        :class="[bg_show_animate ? 'animation_right_enter' : '']"
        src="/assets/images/hero/draw_4.jpg"
      />
    </div>

    <div v-show="theme_value">
      <img
        class="hero-bg hero-1"
        :class="[bg_show_animate ? 'animation_left_enter' : '']"
        src="/assets/images/hero/dark/dark_1.png"
      />
      <img
        class="hero-bg hero-2"
        :class="[bg_show_animate ? 'animation_left_enter' : '']"
        src="/assets/images/hero/dark/dark_2.png"
      />
      <img
        class="hero-bg hero-3"
        :class="[bg_show_animate ? 'animation_left_enter' : '']"
        src="/assets/images/hero/dark/dark_3.png"
      />

      <img
        class="hero-bg hero-4"
        :class="[bg_show_animate ? 'animation_right_enter' : '']"
        src="/assets/images/hero/dark/dark_2.png"
      />
      <img
        class="hero-bg hero-5"
        :class="[bg_show_animate ? 'animation_right_enter' : '']"
        src="/assets/images/hero/dark/dark_1.png"
      />
      <img
        class="hero-bg hero-6"
        :class="[bg_show_animate ? 'animation_right_enter' : '']"
        src="/assets/images/hero/dark/dark_3.png"
      />
    </div>

    <div class="hero-title heading">
      <div>
        <p
          v-if="!theme_value"
          class="slide-up"
          :class="[show_animate ? 'animation_up' : '']"
        >
          All The
        </p>
        <p
          v-else
          class="slide-up"
          :class="[show_animate ? 'animation_up' : '']"
        >
          Looking For
        </p>
      </div>
      <div>
        <p
          v-if="!theme_value"
          class="slide-up with_color"
          :class="[show_animate ? 'animation_up' : '']"
        >
          Design Archive
        </p>
        <p
          v-else
          class="slide-up with_color"
          :class="[show_animate ? 'animation_up' : '']"
        >
          Customized Design,
        </p>
      </div>
      <div>
        <p
          v-if="!theme_value"
          class="slide-up"
          :class="[show_animate ? 'animation_up' : '']"
        >
          You Need
        </p>
        <p
          v-else
          class="slide-up"
          :class="[show_animate ? 'animation_up' : '']"
        >
          We Have It!
        </p>
      </div>
    </div>
    <p class="hero-p">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ten ectetur
      adipisicing elit. Tenetur molestias, doloribus ab quis, ipsa praesentium
      consequatur veli tipsa praesentium consequatur velit asperiores harum
      laudantium?
    </p>

    <HeroToggle @toggle_hero="toggle" />
  </div>
</template>

<!--
  <script lang="ts">
  export default {
  mounted() {

  this.$bus.$on("toggle_home_theme", (data) => {

  });
  },
  };
  </script>
-->
<style lang="scss" scoped>
.hero-bg {
  max-width: 17%;
  position: absolute;
  // transition: all 3s;

  opacity: 0.8;
}

.hero-1 {
  left: 6%;
  top: 23%;
}
.hero-2 {
  top: 52%;
  left: 1%;
}
.hero-3 {
  top: 6%;
  left: 1%;
}
.hero-4 {
  right: 4%;
  top: 30%;
  max-width: 22%;
}
.hero-5 {
  top: 52%;
  right: 1%;
}
.hero-6 {
  top: 6%;
  right: 1%;
}

.light-background {
  background: #fff;
}
.dark-background {
  background: #383838;
  color: #fff !important;
  p {
    color: #eee !important;
  }
  .with_color {
    color: var(--color-primary) !important;
  }
  .hero-bg {
    filter: brightness(15) grayscale(1);
  }
  .hero-1 {
    left: 6%;
    top: 21%;
  }
  .hero-2 {
    top: 58%;
    left: 1%;
    max-width: 14%;
  }
  .hero-3 {
    top: -1%;
    left: 1%;
  }
  .hero-4 {
    right: 6%;
    top: 30%;
    max-width: 14%;
  }
  .hero-5 {
    top: 52%;
    right: 1%;
  }
  .hero-6 {
    top: -5%;
    right: 1%;
  }
}
.hero-container {
  // margin:auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-left: -1rem;
  margin-top: 2rem;
  transition: transform 0.5s cubic-bezier(0.694, 0.048, 0.335, 1),
    background 0.3s;
  height: 91vh;
  position: relative;
  .hero-title {
    div {
      text-align: center;
      display: flex;
      justify-items: center;
      justify-content: center;

      align-items: center;
      .with_color {
        color: var(--color-primary);
      }
    }
    .slide-up {
      font-size: 90px;
      font-weight: 600;
      letter-spacing: -3px;
      line-height: 83px;
      margin: 0.5rem;
    }

    margin: 3rem;
    margin-top: 7rem;
  }
  .hero-p {
    max-width: 60vw;
    line-height: 2.5rem;
    font-size: 1.3rem;
    letter-spacing: 0.6px;
    color: #666;
    text-align: center;
    margin-bottom: 3rem;
  }
}

::-moz-selection {
  background: rgba(170, 170, 170, 0.3);
}

::selection {
  background: rgba(170, 170, 170, 0.3);
}

.heading > div {
  overflow: hidden;
}
.heading > div > p {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  white-space: nowrap;
  margin: 0;
  line-height: 117%;
}

.green {
  color: #32c267;
}

div.heading > div {
  -webkit-animation-delay: 0;
  animation-delay: 0;
}
div.heading > div:nth-child(2) > p {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

div.heading > div:nth-child(3) > p {
  -webkit-animation-delay: 0.45s;
  animation-delay: 0.45s;
}

.animation_up {
  -webkit-animation: slide-up 0.85s cubic-bezier(0.65, 0, 0.35, 1) both;
  animation: slide-up 0.85s cubic-bezier(0.65, 0, 0.35, 1) both;
}
.animation_left_enter {
  -webkit-animation: left-enter 0.85s cubic-bezier(0.65, 0, 0.35, 1) both;
  animation: left-enter 0.85s cubic-bezier(0.65, 0, 0.35, 1) both;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
.animation_right_enter {
  -webkit-animation: right-enter 0.85s cubic-bezier(0.65, 0, 0.35, 1) both;
  animation: right-enter 0.85s cubic-bezier(0.65, 0, 0.35, 1) both;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}

@-webkit-keyframes slide-up {
  0% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes slide-up {
  0% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes left-enter {
  0% {
    transform: translateX(-30vw);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes right-enter {
  0% {
    transform: translateX(30vw);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
