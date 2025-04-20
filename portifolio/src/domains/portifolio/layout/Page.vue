<script setup lang="ts">

import Header from '@/domains/portifolio/layout/Header.vue'
import Footer from '@/domains/portifolio/layout/Footer.vue'
import { ref } from 'vue';
import Main from '@/domains/portifolio/layout/Main.vue'

const currentIndex = ref(0);

const handleIndexChange = (index) => {
  console.log('Índice atual selecionado:', index);
  // Faça algo com o índice
};

</script>

<template>
  <div class="page">
    <Header />
    <Main class="main" />
    <Footer />
  </div>



</template>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    height: 90vh;
  }
</style>
