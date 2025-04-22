<template>
  <div class="about">
    <form>
      <div class="card flex justify-center">
        <InputText type="text" v-model="value" />
      </div>
    </form>
    <Button label="Toggle Dark Mode" @click="toggleDarkMode()" />
    <h1>This is an about page</h1>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const value = ref(null);

function toggleDarkMode() {
  document.documentElement.classList.toggle('my-app-dark');
}
</script>

<style>
</style>
