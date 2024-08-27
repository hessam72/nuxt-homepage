// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr:false,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/global.css", "~/assets/css/var/variables.css"],
  modules: [
    "@nuxtjs/color-mode",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],

  plugins: [
    // '@/plugins/iconify/index.ts',
    // '@/plugins/vuetify/index.ts',

    { src: "~/plugins/jquery", mode: "client" },
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          "@/*": ["../*"],
          // "@layouts/*": ["../@layouts/*"],
          // "@layouts": ["../@layouts"],
          // "@core/*": ["../@core/*"],
          // "@core": ["../@core"],
          "@images/*": ["../assets/images/*"],
          "@videos/*": ["../assets/videos/*"],
          "@styles/*": ["../styles/*"],
        },
      },
    },
  },
});
