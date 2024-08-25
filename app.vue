<script setup lang="ts">

</script>

<template>
  <VApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </VApp>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 1s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
a{
  text-decoration: none;
  
}
a:hover , a:active , a:visited{
  color: inherit;
}
</style>
