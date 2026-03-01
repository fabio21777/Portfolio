<script setup lang="ts">

import Header from '@/domains/portfolio/layout/Header.vue'
import Footer from '@/domains/portfolio/layout/Footer.vue'
import { ref } from 'vue';
import Main from '@/domains/portfolio/layout/Main.vue'

const currentIndex = ref(0);

const handleIndexChange = (index) => {
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

