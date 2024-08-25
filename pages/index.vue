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
        <UDivider
          label="our products"
          class="text-gray-500"
        />
        <br>

        <div
          
          class="p_wrapper"
        >
          <ProductCard
            v-for="(product, index) in products"
            :key="index"
            :product="product"
          />
        </div>
        <br>
<!--       
        <UPagination
          v-model="pageNumber"
          class="flex justify-center"
          :active-button="{ variant: 'solid', color: 'primary' }"
          :inactive-button="{ color: 'gray' }"
          :total="totals"
          :page-count="perPage"
          :prev-button="{ icon: 'i-heroicons-arrow-small-left-20-solid', label: 'Prev', color: 'gray' }"
          :next-button="{ icon: 'i-heroicons-arrow-small-right-20-solid', trailing: true, label: 'Next', color: 'gray' }"
        /> -->
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
.home-body{
  margin-top: 3rem;
  position: relative;
  z-index: 3;
}
</style>
