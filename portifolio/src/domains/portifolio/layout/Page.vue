<script setup lang="ts">

import Header from '@/domains/portifolio/layout/Header.vue'
import Footer from '@/domains/portifolio/layout/Footer.vue'
import { ref } from 'vue';
import Main from '@/domains/portifolio/layout/Main.vue'

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

