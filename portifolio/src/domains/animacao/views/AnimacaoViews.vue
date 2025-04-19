<script setup>
  import { useMotion } from '@vueuse/motion'
  import { ref } from 'vue'
  const targetElt = ref()

  useMotion(targetElt, {
    initial: { opacity: 0, y: 100 },
    visibleOnce: { opacity: 1, y: 0, delay: 200 }
  });
</script>

<template>
    <div
  class="target"
  v-motion
  :initial="{
    scale: 1,
  }"
  :enter="{
    scale: 1.5,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      delay: 1000,

    },
  }"
>
 1
</div>
  <div class="target" v-motion-slide-visible-once-left>2</div>
  <div class="target"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visibleOnce="{ opacity: 1, y: 0, scale: 1.2 }"
    :hovered="{ scale: 1.5 }"
    :delay="200"
    >3</div>
  <div class="target" ref="targetElt">4</div>

</template>

<style>

.target {
  width: 100px;
  height: 100px;
  margin: 300px auto 500px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 10px;
  background-color: #43b883;
  font-weight: bold;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}
</style>
