<script setup lang="ts">
import { ref } from 'vue'


const colorMode = useColorMode()

// eslint-disable-next-line camelcase
const theme_value = colorMode.value === 'dark' ? ref(true) : ref(false)

function initNavbar() {
  // TOGGLE HAMBURGER & COLLAPSE NAV
  $('.nav-toggle').on('click', function () {
    $(this).toggleClass('open')
    $('.menu-left').toggleClass('collapse')
  })

  // REMOVE X & COLLAPSE NAV ON ON CLICK
  $('.menu-left a').on('click', () => {
    $('.nav-toggle').removeClass('open')
    $('.menu-left').removeClass('collapse')
  })
}
function initHideNavOnScroll() {
  let prevScrollpos = window.pageYOffset
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
      // scroll up
      $('header').removeClass('hide-nav').addClass('show-nav')
    }
    else {
      // scroll down
      $('header').removeClass('show-nav').addClass('hide-nav')
      $('.nav-toggle').removeClass('open')
      $('.menu-left').removeClass('collapse')
    }
    prevScrollpos = currentScrollPos
  }
}
onMounted(() => {
  initNavbar()
  initHideNavOnScroll()
})
</script>

<template>
  <header :class="theme_value ? 'dark-background' : 'light-background'">
    <div class="container">
      <nav id="navigation">
        <a
          href="/"
          class="logo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="logo_svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 640 640"
          >
            <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
          </svg>
          <p>Architect Store</p></a>
        <div
          aria-label="mobile menu"
          class="nav-toggle"
        >
          <span />
          <span />
          <span />
        </div>
        <ul class="menu-left">
          <li>
            <a
              class="menu_item"
              href="#"
            >Blog</a>
          </li>
          <li>
            <NuxtLink
              class="menu_item"
              to="/products"
            >
              Our Products
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              class="menu_item"
              to="/user/DesignOrder/create"
            >
              Request A Design
            </NuxtLink>
          </li><li>
            <RouterLink
              class="login-btn flex items-center align-center"
              to="#authurl"
            >
              <svg
                id="Layer_1"
                class="login-icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 88.363 122.879"
                enable-background="new 0 0 88.363 122.879"
                xml:space="preserve"
              >
                <g>
                  <path d="M42.078,64.589H3.118C1.396,64.589,0,63.179,0,61.439s1.396-3.149,3.118-3.149h38.958L29.405,43.778 c-1.137-1.298-1.017-3.281,0.268-4.429c1.285-1.148,3.248-1.027,4.385,0.271l17.238,19.742c1.059,1.208,1.027,3.009-0.02,4.179 L34.057,83.26c-1.137,1.298-3.1,1.419-4.385,0.271c-1.284-1.148-1.404-3.132-0.268-4.43L42.078,64.589L42.078,64.589z M47.434,122.786c-1.77,0.428-3.55-0.659-3.978-2.428s0.659-3.55,2.427-3.978c4.258-1.032,7.932-1.761,11.303-2.428 c15.99-3.168,24.566-4.866,24.566-27.147V34.258c0-20.817-9.068-22.512-24.086-25.318c-3.596-0.672-7.498-1.401-11.783-2.441 c-1.768-0.428-2.855-2.208-2.427-3.978c0.428-1.769,2.208-2.855,3.978-2.428c4.02,0.976,7.885,1.698,11.447,2.363 c18.383,3.436,29.482,5.51,29.482,31.801v52.548c0,27.705-10.443,29.773-29.912,33.63 C54.986,121.121,51.215,121.869,47.434,122.786L47.434,122.786z" />
                </g>
              </svg>
             
              <p>SingIn</p>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
.light-background {
  background: #f6f6f6;
}
.dark-background {
  background: var(--color-navbar-dark);
  color: #fff !important;
  nav {
    .logo {
      color: #fff;
      fill: #fff;
    }
  }
  .menu_item {
    color: #fff !important;
  }
  .menu_item:before,
  .menu_item:after {
    background: var(--color-primary) !important;
  }
}
// section {
//     height: 100vh;
// }
section#about {
  text-align: center;
}
section h1 {
  text-align: center;
}

.container {
  padding: 1rem 15px 0px 15px;
  position: relative;
}
.panel-icon{
color: #555;
}
@media (min-width: 0) {
  .container {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .container:after {
    content: ' ';
    display: block;
    clear: both;
  }
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
    margin-left: auto;
    margin-right: auto;
  }
  .container:after {
    content: ' ';
    display: block;
    clear: both;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  }
  .container:after {
    content: ' ';
    display: block;
    clear: both;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
  }
  .container:after {
    content: ' ';
    display: block;
    clear: both;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1250px;
    margin-left: auto;
    margin-right: auto;
  }
  .container:after {
    content: ' ';
    display: block;
    clear: both;
  }
}

.menu_item {
  text-decoration: none;
  color: rgba(34, 34, 34, 0.8);
}
.menu_item:hover,
.menu_item :focus {
  color: black;
}

.menu-left .menu_item {
  display: inline-block;
  position: relative;
  padding-bottom: 0.4rem;
  transition: color 0.35s ease;
}
.menu-left .menu_item:before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  transition: width 0s ease, background 0.35s ease;
}
.menu-left .menu_item:after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background: var(--color-primary);
  transition: width 0.35s ease;
}
.menu-left .menu_item:hover:before {
  width: 100%;
  background: var(--color-primary);
  transition: width 0.35s ease;
}
.menu-left .menu_item:hover:after {
  width: 100%;
  background: transparent;
  transition: all 0s ease;
}
.login-btn {
  background-color: #fff;
  border: 1px solid #ededed;
  color: black !important;
  border-radius: 20px;
  box-shadow: 0px 18px 13px -6px rgba(0, 0, 0, 0.2);
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
  display: inline-block;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 9;
  position: absolute;
  overflow: hidden;
  transition: all 0.2s ease;
  cursor: pointer;
  p {
    padding: 0;
    margin: 0.7rem;
  }
  .login-icon {
    width: 1rem;
  }
  display: flex;
  flex-direction: row-reverse;
  gap: 0.4rem;
  padding: 0 1.5rem;

  margin: 0.8rem 0.8rem;
  border-radius: 100rem;
  margin-top: -0.3rem;
}

.login-btn::before {
  content: '';
  width: 0;
  height: 3em;
  border-radius: 30em;
  position: absolute;
  top: 0;
  left: 0;
  //  background-image: linear-gradient(to right, #0fd850 0%, #f9f047 100%);
  background: var(--color-primary);
  transition: 0.5s ease;
  display: block;
  z-index: -1;
}
.login-btn:hover {
  p {
    color: #fff;
  }
  .login-icon {
    fill: #fff;
  }
  .panel-icon{
    color: #fff;
  }
}
.login-btn:hover::before {
  width: 100%;
}
header {
  z-index: 7;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 0;
  background: rgba(255, 255, 255, 0.92);
  // z-index: 3;
  will-change: transform;
  transition: background 0.3s, -webkit-transform 0.5s cubic-bezier(0.694, 0.048, 0.335, 1);
  transition: transform 0.5s cubic-bezier(0.694, 0.048, 0.335, 1), background 0.3s;
  transition: transform 0.5s cubic-bezier(0.694, 0.048, 0.335, 1), background 0.3s,
    -webkit-transform 0.5s cubic-bezier(0.694, 0.048, 0.335, 1);
  transform: translateY(0);
  -webkit-transform: translateY(0);
}
header nav .logo {
  float: left;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  font-weight: 500;
  color: black;
  display: flex;
  text-decoration: none;
  font-weight: 700;
  gap: 1rem;
  padding: 0 1.5rem;
  letter-spacing: 0.3rem;
  margin-top: -0.5rem;
  align-items: center;
  .logo_svg {
    width: 2.7rem;
  }
  p{
    margin: 0;
  }
}
header nav .logo:after {
  content: '';
  display: table;
  clear: both;
}
header nav ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
header nav ul li {
  float: none;
  margin-left: 0;
  // padding-top:2rem;
}
@media (min-width: 768px) {
  header nav ul li {
    float: left;
    margin-left: 3rem;
  }
}
header nav ul li a {
  display: block;
}
@media (min-width: 576px) {
  header nav ul li a {
    display: block;
    padding: 0.425rem 0rem;
  }
}

@media (max-width: 768px) {
  ul {
    clear: both;
  }
  ul li {
    padding: 0.5em 0;
  }
}
.hide-nav {
  transform: translateY(-120% !important);
  -webkit-transform: translateY(-120%) !important;
}

ul.menu-left {
  display: block;
  padding-bottom: 1rem;
  max-height: 0;
  overflow: hidden;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  z-index: 10;
}
@media (min-width: 768px) {
  ul.menu-left {
    display: block !important;
    float: right;
    max-height: none;
    margin-right: 9rem;
  }
}
ul.menu-left:before {
  content: '';
  display: table;
  clear: both;
}
ul.menu-left.collapse {
  max-height: 15em !important;
}

.nav-toggle {
  display: block;
  border-radius: 5px;
  background-color: transparent;
  float: right;
  height: 38px;
  width: 38px;
  cursor: pointer;
  padding: 8px 8px;
}
.nav-toggle.open span:first-child {
  transform: rotate(45deg) translate(4.4px, 4.4px);
}
.nav-toggle.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}
.nav-toggle.open span:last-child {
  transform: rotate(-45deg) translate(4.4px, -4.4px);
}
@media (min-width: 768px) {
  .nav-toggle {
    display: none;
  }
}
.nav-toggle span {
  position: relative;
  display: block;
  height: 2px;
  width: 100%;
  margin-top: 4px;
  background-color: #000;
  transition: all 0.25s;
}

.signature {
  position: fixed;
  font-weight: 100;
  bottom: 10px;
  color: #000;
  left: 0;
  letter-spacing: 4px;
  font-size: 10px;
  width: 100vw;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
}
</style>
