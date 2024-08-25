<script>
export default {
  components: {
  },
  head: {
    script: [{ src: 'https://kit.fontawesome.com/561f8f861b.js', async: true, crossorigin: 'anonymous' }],
  },

}

</script>

<template>
 
  <!-- public layout  -->
  <div>
    <UNotifications />

    <Header />
    <div class="main-container">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
/*Reset*/
@import 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css';

html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
  color: #1f4568;
}

body {
  // background-image: url('https://image.ibb.co/de6JzG/bitmap_1_1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
* {
  box-sizing: border-box;
}

body {
  padding: 50px;
  // background-color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: #000;
  font-weight: 100;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}
.main-container {
  // margin-top: 7rem;
}
</style>

<style lang="scss">
.layout-page-content {
  padding: 6rem 2rem 0 2rem;
}
.layout-navbar {
  background: #0000;
}
</style>
