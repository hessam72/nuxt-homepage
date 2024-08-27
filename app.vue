<script setup lang="ts">

const colorMode = useColorMode();
const theme_value = colorMode.value === "dark" ? ref(true) : ref(false);
watch(colorMode, (val) => {
  if (val.value === "light") {
    theme_value.value = false;
  } else {
    theme_value.value = true;
  }
});
</script>

<template>
  <VApp :class="theme_value ? ['dark-background', 'dark'] : 'light-background'">
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
