<template>
  <div class=" min-h-screen flex justify-center items-center p-4">
    <div class="w-full  rounded-lg shadow-md p-8">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold mb-1">Sobre Mim</h1>
        <p >Minha introdução</p>
      </div>

      <div class="flex flex-col md:flex-row gap-8 items-center">
        <!-- Logo/Imagem -->
        <div class="w-full md:w-1/3 flex justify-center">
          <div
            style="background: var(--primary-color); width: 300px; height: 300px;"
            class="rounded-full flex items-center justify-center overflow-hidden">
            <div
              class="w-full h-full bg-cover bg-center rounded-full"
              style="background-image: url('/asserts/Lucille.webp'); background-position: top center;">
            </div>
          </div>
        </div>

        <!-- Informações Pessoais -->
        <div class="w-full md:w-2/3">
          <div class="mb-6">
            <p class="mb-4">
              Olá, meu nome é <span class="font-semibold">{{portfolio.portfolioIndo.firstName}}</span> e sou
              apaixonado em criar coisas e desenvolver apps! Meu interesse em
              desenvolvimento web surgiu em 2021 com o desejo de criar meus próprios sites. Comecei com Django e Python, e com o tempo conheci SPAs (Single Page Applications) com Vue, que é
              minha tecnologia favorita para criar aplicações web. Contudo, trabalho ativamente com Angular TS e React. No mesmo período, conheci o Java e o Spring Boot, stacks que gosto muito e são as tecnologias em que tenho maior expertise para criação de APIs de backend. Essas ferramentas me ajudaram a entender melhor o funcionamento de aplicações web como um todo, desde a concepção dos modelos de dados até a criação da página final disponibilizada para o usuário.
            </p>
            <p class="mb-4">
              Trazendo para o presente, eu tenho o prazer
              de trabalhar em uma <span class="font-semibold">Consultoria</span> sensacional!
              Meu foco atual é desenvolver aplicações, sites
              responsivos, acessibilidade, interfaces gráficas
              e aplicações web, atuando no backend e front-end.
            </p>
          </div>

          <!-- Estatísticas -->
          <div class="flex flex-wrap justify-between gap-4">
            <div class="text-center">
              <h2 class="text-2xl font-bold"><span style="color: var(--primary-color)">+</span>3</h2>
              <p>Anos<br/>de experiência</p>
            </div>
          </div>

          <!-- Botão de Download -->
          <div class="mt-8">
            <button style="background-color: var(--primary-color)" class="p-button p-component text-white px-6 py-3 rounded-md flex items-center justify-center transition-colors duration-300 hover:opacity-90">
              <span>Download CV</span>
              <i class="pi pi-download ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '@/stores/portfolio'

const portfolio = usePortfolioStore();
const portfolioInfo = portfolio.portfolioIndo;

// Não são necessárias importações adicionais se o PrimeVue já estiver configurado no projeto
</script>

<style scoped>
/* Estilos adicionais podem ser adicionados aqui se necessário */
</style>