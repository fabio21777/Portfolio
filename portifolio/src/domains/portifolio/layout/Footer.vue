<template>
  <div class="bg-primary-500 px-20 py-10">
    <div class="container mx-auto px-20">
      <div class="flex flex-col md:flex-row justify-evenly items-center gap-6">
        <!-- Name and title section -->
        <div class="text-center md:text-left">
          <h1 class="text-2xl">Fabio De Souza Miranda</h1>
          <h2 class="text-lg ">
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
              <a href="#" @click.prevent="navegacao.setCurrentIndex(3)" class="hover:text-primary-300 transition-colors">Serviços</a>
            </li>
            <li>
              <a href="#" @click.prevent="navegacao.setCurrentIndex(4)" class="hover:text-primary-300 transition-colors">Portifólio</a>
            </li>
            <li>
              <a href="#" @click.prevent="navegacao.setCurrentIndex(5)" class="hover:text-primary-300 transition-colors">Contato</a>
            </li>
          </ul>
        </div>

        <!-- Social media links -->
        <div class="flex gap-4">
          <a :href="socialMedia.github" target="_blank" class="hover:text-primary-300 transition-colors">
            <i class="pi pi-github text-4xl"></i>
          </a>
          <a :href="socialMedia.linkedin" target="_blank" class="hover:text-primary-300 transition-colors">
            <i class="pi pi-linkedin text-4xl"></i>
          </a>
          <a :href="socialMedia.email" target="_blank" class="hover:text-primary-300 transition-colors">
            <i class="pi pi-envelope text-4xl"></i>
          </a>
        </div>
      </div>

      <!-- Copyright section -->
      <div class="mt-10 text-center text-sm">
        <p>&copy; {{ new Date().getFullYear() }} Fabio De Souza Miranda e Fabricio De Souza Miranda. <br> Todos os direitos reservados.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNavegacaoStore } from '@/stores/navegacao';
import { reactive } from 'vue';

const navegacao = useNavegacaoStore();
const socialMedia =  reactive<SocialMedia>({
  name: 'Fabio De Souza Miranda',
  email: 'fabiosouza21777@gmial.com',
  github: 'https://github.com/fabio21777',
  linkedin: 'https://linkedin.com/in/fabio-miranda-501937215',
})



</script>

<style scoped>
/* You can still use scoped CSS for specific overrides if needed */
.pi {
  font-size: 2rem;
}
</style>