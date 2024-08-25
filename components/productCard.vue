<script lang="ts" setup>
import placeHolder from '../assets/images/placeholder/placeholder-2.webp'
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const is_saved = ref(true)


</script>

<template>
  <NuxtLink
   
    :to="'#'"
  >
    <div class="card-wrapper bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800 rounded-lg shadow-md relative">
      <div
        class="save-icon show_on_hover"
        @click="is_saved = !is_saved"
      >
        <SaveIcon
          :is_saved="is_saved"
          @toggle-bookmark="is_saved=!is_saved"
        />
      </div>
      <div class="cat-tag show_on_hover">
        <p>{{ product.category.title }}</p>
      </div>

      <div class="main-section">
       
        <img
          alt="this is a building map image"
          :src="placeHolder"
        >
      </div>
      <UDivider />

      <div class="footer">
        <div class="flex align-items-center justify-between gap-3">
          <h4 class="p-title mr-auto text-gray-800 dark:text-gray-100">
            {{ product.title }}
          </h4>

          <div class="f-icon like flex align-items-center gap-1">
            <p>{{ product.like_count }}</p>
            <svg
              id="Layer_1"
              class="fill-gray-800 dark:fill-gray-100 cursor-pointer"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 122.88 109.57"
              style="enable-background: new 0 0 122.88 109.57"
              xml:space="preserve"
            >
              <g>
                <path d="M65.46,19.57c-0.68,0.72-1.36,1.45-2.2,2.32l-2.31,2.41l-2.4-2.33c-0.71-0.69-1.43-1.4-2.13-2.09 c-7.42-7.3-13.01-12.8-24.52-12.95c-0.45-0.01-0.93,0-1.43,0.02c-6.44,0.23-12.38,2.6-16.72,6.65c-4.28,4-7.01,9.67-7.1,16.57 c-0.01,0.43,0,0.88,0.02,1.37c0.69,19.27,19.13,36.08,34.42,50.01c2.95,2.69,5.78,5.27,8.49,7.88l11.26,10.85l14.15-14.04 c2.28-2.26,4.86-4.73,7.62-7.37c4.69-4.5,9.91-9.49,14.77-14.52c3.49-3.61,6.8-7.24,9.61-10.73c2.76-3.42,5.02-6.67,6.47-9.57 c2.38-4.76,3.13-9.52,2.62-13.97c-0.5-4.39-2.23-8.49-4.82-11.99c-2.63-3.55-6.13-6.49-10.14-8.5C96.5,7.29,91.21,6.2,85.8,6.82 C76.47,7.9,71.5,13.17,65.46,19.57L65.46,19.57z M60.77,14.85C67.67,7.54,73.4,1.55,85.04,0.22c6.72-0.77,13.3,0.57,19.03,3.45 c4.95,2.48,9.27,6.1,12.51,10.47c3.27,4.42,5.46,9.61,6.1,15.19c0.65,5.66-0.29,11.69-3.3,17.69c-1.7,3.39-4.22,7.03-7.23,10.76 c-2.95,3.66-6.39,7.44-10,11.17C97.2,74.08,91.94,79.12,87.2,83.66c-2.77,2.65-5.36,5.13-7.54,7.29L63.2,107.28l-2.31,2.29 l-2.34-2.25l-13.6-13.1c-2.49-2.39-5.37-5.02-8.36-7.75C20.38,71.68,0.81,53.85,0.02,31.77C0,31.23,0,30.67,0,30.09 c0.12-8.86,3.66-16.18,9.21-21.36c5.5-5.13,12.97-8.13,21.01-8.42c0.55-0.02,1.13-0.03,1.74-0.02C46,0.48,52.42,6.63,60.77,14.85 L60.77,14.85z" />
              </g>
            </svg>
        
          </div>
          <div class="f-icon view flex align-items-center gap-1">
            <p>{{ product.view_count }}</p>
            <svg
              class="fill-gray-800 dark:fill-gray-100"
              xmlns="http://www.w3.org/2000/svg"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 512 282.68"
            >
              <path
                fill-rule="nonzero"
                d="M3.14 132.9c14.51-17.53 29.53-33.35 44.94-47.39 60.17-54.78 127.69-84 197.43-85.45 69.61-1.46 141.02 24.79 209.14 80.95 18.45 15.21 36.6 32.54 54.3 52 3.82 4.19 4.02 10.42.78 14.81-19.73 27.91-41.98 51.4-65.97 70.56-53.57 42.77-115.96 63.9-179.2 64.29-63.05.39-126.84-19.87-183.44-59.83-28.31-20-54.85-44.93-78.58-74.67-3.65-4.59-3.29-11.1.6-15.27zM256 83.24c32.09 0 58.1 26.01 58.1 58.1s-26.01 58.1-58.1 58.1-58.1-26.01-58.1-58.1c0-5.97.9-11.74 2.57-17.16 4.25 11.15 15.04 19.07 27.68 19.07 16.35 0 29.61-13.26 29.61-29.61 0-12.7-7.98-23.52-19.2-27.73 5.5-1.73 11.36-2.67 17.44-2.67zm107.24-33.52a141.453 141.453 0 0 1 23.1 37.7c6.92 16.67 10.74 34.9 10.74 53.92 0 19.03-3.82 37.26-10.73 53.94a141.479 141.479 0 0 1-30.6 45.8l-1.92 1.89c26.4-9.83 51.79-24.09 75.37-42.91 20.12-16.07 38.96-35.49 55.99-58.27-15-15.93-30.16-30.18-45.38-42.73-25.22-20.8-50.84-37.2-76.57-49.34zm-212.08 185.9c-10.65-11.81-19.33-25.44-25.5-40.32a140.518 140.518 0 0 1-10.74-53.96c0-19.01 3.81-37.22 10.72-53.87 6.85-16.52 16.75-31.46 28.96-44.1-31.5 13.33-61.97 33.25-90.76 59.44-12.7 11.57-25.04 24.3-36.95 38.17 20.74 24.71 43.54 45.64 67.69 62.71 18.19 12.84 37.15 23.5 56.58 31.93zM300.95 32.58c-13.78-5.71-28.98-8.88-44.94-8.88-15.94 0-31.12 3.17-44.93 8.9-14.34 5.95-27.32 14.73-38.23 25.64-10.88 10.89-19.64 23.85-25.6 38.2-5.71 13.79-8.88 28.97-8.88 44.9 0 15.96 3.17 31.17 8.9 44.98a117.654 117.654 0 0 0 25.58 38.19c10.86 10.84 23.84 19.6 38.24 25.57 13.8 5.72 28.98 8.88 44.92 8.88 15.95 0 31.15-3.17 44.96-8.88 14.36-5.93 27.32-14.7 38.2-25.57 10.88-10.88 19.64-23.84 25.57-38.16 5.72-13.85 8.89-29.05 8.89-45.01 0-15.95-3.17-31.14-8.89-44.95-5.93-14.37-14.69-27.33-25.57-38.21-10.86-10.86-23.84-19.63-38.22-25.6z"
              />
            </svg>
          </div>
        </div>
        <div class="desc">
          <p class="text-gray-500 dark:text-gray-400">
            {{ product.short_desc }}
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.card-wrapper {
    max-width: 21rem;
    height: 20rem;
    padding: 1rem;
    overflow: hidden;
    .cat-tag {
        clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
        background: var(--color-primary);
        position: absolute;
        height: 2rem;
        width: 7rem;
        border-radius: 8px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 0.7rem;
        top: 1rem;
        p {
            font-size: 0.8rem;
            letter-spacing: 1px;
            color: #fff;
            font-weight: 800;
            padding: 0;
            margin: 0;
        }
    }
    .save-icon {
        // width: 2.5rem;

        // fill: #fefefe;

        svg {
            width: .75rem;
        }
        p {
            font-size: 0.8rem;
            font-weight: 500;
            letter-spacing: 1px;
        }
    }
    .show_on_hover {
        transform: translateY(-5rem);
        transition: all 0.3s ease-in-out;
    }
    .main-section {
        height: 80%;
        display: flex;
        justify-content: center;
        .p-img {
            transition: all 0.3s;
            max-width: 100%;
            max-height: 100%;
            border-radius: 7px;
        }
    }
    .footer {
        height: 20%;
        margin-top: 0.6rem;

        .f-icon {
            p {
                margin: 0;
                padding: 0;
            }
            svg {
                width: 1rem;
                margin: 0;
                padding: 0;
                // margin-top: -1.1rem;
            }
        }
        .desc {
            p {
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1; /* number of lines to show */
                line-clamp: 1;
                -webkit-box-orient: vertical;
                margin-top: 0.2rem;
                font-size: 0.9rem;
            }
        }
    }
}
.card-wrapper:hover {
    .show_on_hover {
        transform: translateY(0);
        z-index: 1;
    }
    .main-section {
        .p-img {
            // filter: blur(.5px) contrast(0.85);
        }
    }
}
</style>
