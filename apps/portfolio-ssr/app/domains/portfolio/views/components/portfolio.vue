<template>
  <div class="w-full py-16">
    <!-- Cabeçalho -->
    <div class="text-center mb-12 text-primary-600">
      <h1 class="text-4xl font-bold text-primary-600 mb-2">Portfólio</h1>
      <p >Trabalhos mais recentes</p>
    </div>

    <!-- Carrossel -->
    <div class="max-w-5xl mx-auto px-4">
      <Carousel
        :value="projects"
        :numVisible="1"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
        :autoplayInterval="5000"
        :circular="true"
      >
        <template #item="slotProps">
          <div class="flex flex-col md:flex-row gap-6 p-4">
            <!-- Imagens do projeto (esquerda) -->
            <div v-if="slotProps.data.hasImage" class="flex w-full md:w-1/2 gap-4">
              <img
                :src="slotProps.data.image1"
                :alt="slotProps.data.title"
                class="w-1/2 h-64 object-contain shadow-md rounded-md border border-gray-200"
              />
              <img
                :src="slotProps.data.image2"
                :alt="slotProps.data.title"
                class="w-1/2 h-64 object-contain shadow-md rounded-md border border-gray-200"
              />
            </div>

            <!-- Descrição do projeto (direita) -->
            <div class="w-full md:w-1/2 flex flex-col justify-center">
              <h2 class="text-2xl font-bold mb-3">{{ slotProps.data.title }}</h2>
              <p class="mb-6 ">{{ slotProps.data.description }}</p>
              <a
                :href="slotProps.data.demoLink"
                target="_blank"
                class="p-button p-component inline-flex items-center justify-center w-32 py-3 px-4 rounded-md transition-all"
              >
                <span>Repositorio</span>
                <i class="pi pi-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </template>

        <!-- Navegação personalizada -->
        <template #itemNavigators="{ onNavigate }">
          <div class="flex justify-between absolute w-full top-1/2 -translate-y-1/2 z-10 px-4">
            <button
              @click="onNavigate(-1)"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            >
              <i class="pi pi-chevron-left"></i>
            </button>
            <button
              @click="onNavigate(1)"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            >
              <i class="pi pi-chevron-right"></i>
            </button>
          </div>
        </template>

        <template #indicators="{ onPageChange, page }">
          <div class="flex justify-center gap-2 mt-6">
            <button
              v-for="(_, index) in projects"
              :key="index"
              @click="onPageChange(index)"
              :class="[
                'w-3 h-3 rounded-full transition-all',
                index === page ? 'scale-125 bg-primary' : 'bg-gray-300 hover:bg-gray-400'
              ]"
            ></button>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Carousel from 'primevue/carousel'

import { getInfoPortifolio } from '@/stores/portfolio'
import { useRoute } from 'vue-router'


// Dados de exemplo para o portfólio

const route = useRoute();

const userNameParam = route?.params?.userName;

const portifolio = getInfoPortifolio(userNameParam)

const projects = ref(portifolio.portifolios);

// Configurações de responsividade para o carrossel
const responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '768px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1
  }
]);
</script>

<style scoped>
/* Classe para o botão Demo - Usando a classe bg-primary que deve ser definida no tema PrimeVue */
.p-button {
  background-color: var(--primary-color);
  color: white;
}

.p-button:hover {
  background-color: var(--primary-color);
  opacity: 0.9;
}

/* Ajustes adicionais para o carrossel */
:deep(.p-carousel-container) {
  position: relative;
}

:deep(.p-carousel-items-content) {
  overflow: visible;
}
</style>
