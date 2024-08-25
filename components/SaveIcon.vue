<script setup lang="ts">
import { reactive } from 'vue'

const props = defineProps({
  is_saved: {
    type: Boolean,

    default: false,
  },
})

const saved = reactive({
  val: false,
})

const { is_saved } = props

onMounted(() => {
  saved.val = is_saved
})
</script>

<template>
  <div class="save-icon">
    <label class="save-container">
      <input
        v-model="saved.val"
        type="checkbox"
        @click="$emit('toggleBookmark')"
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 75 100"
        class="pin"
      >
        <line
          stroke-width="12"
          stroke="#fff"
          y2="100"
          x2="37"
          y1="64"
          x1="37"
        />
        <path
          stroke-width="10"
          stroke="#fff"
          d="M16.5 36V4.5H58.5V36V53.75V54.9752L59.1862 55.9903L66.9674 67.5H8.03256L15.8138 55.9903L16.5 54.9752V53.75V36Z"
        />
      </svg>
    </label>
    <p
      v-if="!saved.val"
      style="margin: 0"
    >
      save
    </p>
    <p
      v-else
      style="margin: 0"
    >
      saved
    </p>
  </div>
</template>

<style lang="scss" scoped>
.save-icon {
  // width: 2.5rem;
  position: absolute;
  // fill: #fefefe;
  background: #fff0; // for saved p
  border-radius: 3px;
  border-bottom-left-radius: 9px;
  cursor: pointer;
  background: #00000096;
  padding: 0.4rem 0.8rem;
  border-radius: 40px;
  color: #fff;
  display: flex;
  gap: 0.5rem;
  svg {
    width: 0.75rem;
  }
  p {
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 1px;
  }
}
.save-container input {
  display: none;
  width:0px;
}
.pin {
  //   width: 15px;
  height: auto;
  transform: rotate(35deg);
}
.save-container {
  //   width: 45px;
  //   height: 45px;
  p {
    margin: 0;
  }
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
}
.save-container input:checked ~ .pin {
  fill: #fff;
  stroke: white;
}
.save-container input:checked ~ .pin line {
  stroke: #fff;
}
.save-container input:checked ~ .pin path {
  stroke: #fff;
}
.save-container:hover {
  //   background-color: rgb(244, 238, 255);
  //   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.041);
}
.save-container:active {
  transform: scale(0.9);
}
</style>
