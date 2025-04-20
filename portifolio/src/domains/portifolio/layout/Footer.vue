<template>
  <div class="bg-primary-500 px-20 py-10 relative text-white">
    <div class="container mx-auto px-4 md:px-20">
      <div class="flex flex-col md:flex-row justify-evenly items-center gap-6">
        <!-- Name and title section -->
        <div class="text-center md:text-left">
          <h1 class="text-2xl text-white">{{portfolioInfo.name}}</h1>
          <h2 class="text-lg text-white">
            Desenvolvedor Fullstack
          </h2>
        </div>

        <!-- Navigation menu -->
        <div class="flex-grow text-xl">
          <ul class="flex flex-wrap justify-center gap-4 md:gap-6">
            <li>
              <a href="#" @click.prevent="navegacao.setCurrentIndex(0)" class="hover:text-primary-300 transition-colors">Home</a>
            </li>
            <li>
              <a href="#" @click.prevent="navegacao.setCurrentIndex(1)" class="hover:text-primary-300 transition-colors">Sobre</a>
            </li>
            <li>
              <a href="#" @click.prevent="navegacao.setCurrentIndex(2)" class="hover:text-primary-300 transition-colors">Habilidades</a>
            </li>
            <li>
              <a href="#" @click.prevent="navegacao.setCurrentIndex(3)" class="hover:text-primary-300 transition-colors">Portifólio</a>
            </li>
            <li>
              <a href="#" @click.prevent="navegacao.setCurrentIndex(4)" class="hover:text-primary-300 transition-colors">Contato</a>
            </li>
          </ul>
        </div>

        <!-- Social media links -->
        <div class="flex gap-4">
          <a :href="portfolioInfo.github" target="_blank" class="hover:text-primary-300 transition-colors">
            <i class="pi pi-github text-4xl"></i>
          </a>
          <a :href="portfolioInfo.linkedin" target="_blank" class="hover:text-primary-300 transition-colors">
            <i class="pi pi-linkedin text-4xl"></i>
          </a>
          <a :href="'mailto:' + portfolioInfo.email" class="hover:text-primary-300 transition-colors">
            <i class="pi pi-envelope text-4xl"></i>
          </a>
        </div>
      </div>

      <!-- Copyright section -->
      <div class="mt-10 text-center text-sm">
        <p>&copy; {{ new Date().getFullYear() }} Fabio De Souza Miranda e Fabricio De Souza Miranda. <br> Todos os direitos reservados.</p>
      </div>

      <!-- Botão para voltar ao topo fixo -->
      <div class="fixed bottom-10 right-10">
        <button
          @click="voltarAoTopo"
          class="bg-white text-primary-600 rounded-full p-3 shadow-lg hover:bg-primary-100 transition-colors duration-300"
          aria-label="Voltar ao topo">
          <i class="pi pi-arrow-up size-arrow"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNavegacaoStore } from '@/stores/navegacao';
import { usePortfolioStore } from '@/stores/portfolio';

const navegacao = useNavegacaoStore();
const portfolio = usePortfolioStore();
const portfolioInfo = portfolio.portfolioIndo;

// Função para voltar ao topo da página
const voltarAoTopo = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  navegacao.setCurrentIndex(0); // Atualiza o índice ativo para o primeiro item
};
</script>

<style scoped>
.pi {
  font-size: 2rem;
}

/* Animação para o botão de "voltar ao topo" */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

button:hover {
  animation: pulse 1s infinite;
}

.size-arrow {
  font-size: 1.5rem;
}
</style>