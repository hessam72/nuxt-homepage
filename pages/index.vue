<script lang="ts" setup>
import products from "../data/products.json";

</script>

<template>
  <div>
    <div class="hero-wrapper">
      <Hero />
    </div>
    <div class="home-body">
      <div class="m_container">
        <UDivider label="our products" class="text-gray-500" />
        <br />
        <hr />
        <div class="p_wrapper">
          <ProductCard
            v-for="(product, index) in products"
            :key="index"
            :product="product"
          />
        </div>
        <br />
      
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.m_container {
  min-height: 50vh;
  width: 100vw;
  padding: 3rem 6rem;
  margin-top: 2rem;

  .p_wrapper {
    margin-top: 2rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 3rem;
  }
}
.home-body {
  margin-top: 3rem;
  position: relative;
  z-index: 3;
}
</style>
