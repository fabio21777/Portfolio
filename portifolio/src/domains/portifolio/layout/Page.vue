<script setup lang="ts">

import Header from '@/domains/portifolio/layout/Header.vue'

import Main from '@/domains/portifolio/layout/Main.vue'

import Footer from '@/domains/portifolio/layout/Footer.vue'

const handleIndexChange = (index) => {
  console.log('Índice atual selecionado:', index);
  // Faça algo com o índice
};

</script>

<template>

  <Header @current-index-select="handleIndexChange" :index-active-change="0" />
  <Main />
  <Footer />

</template>

