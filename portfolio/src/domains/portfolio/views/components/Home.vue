<template>
  <div class="container mx-auto px-4 pt-20">
    <div class="flex flex-col md:flex-row items-center justify-between gap-8">
      <!-- Text content section -->
      <div class="md:w-3/5">
        <h1 class="text-3xl font-bold text-primary-600 mb-4">
          Olá, Meu Nome é <br>
          {{ portfolioInfo.name }}
        </h1>

        <div class="space-y-4 text-lg">
          <p class="leading-relaxed">
            Sou um desenvolvedor Fullstack com experiência em Vue.js, Java e outras tecnologias modernas para desenvolvimento web.
          </p>

          <p class="leading-relaxed">
            Como <strong>desenvolvedor Fullstack</strong>, trabalho com dedicação total nos projetos do início ao fim.
          </p>

          <p class="leading-relaxed">
            Minha especialidade é <strong>programar</strong> utilizando Vue.js e Java, mas também tenho experiência com outras tecnologias complementares que ampliam minhas capacidades de desenvolvimento.
          </p>

          <div class="mt-6">
            <Button @click="navegacao.setCurrentIndex(4)" label="Contato" icon="pi pi-envelope" class="p-button-outlined" />
          </div>
        </div>
      </div>

      <!-- Image section -->
      <div class="md:w-2/5 mt-6 md:mt-0">
        <div class="card flex justify-center shadow-lg rounded-lg overflow-hidden">
          <Image
            :src="portfolioInfo.fotoPerfil"
            alt="Foto de perfil"
            width="350"
            class="object-cover"
            preview
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getInfoPortifolio } from '@/stores/portfolio'
import { onMounted } from 'vue'
import { useNavegacaoStore } from '@/stores/navegacao'
import { useRoute } from 'vue-router'

const navegacao = useNavegacaoStore();

const route = useRoute();

const userNameParam = route?.params?.userName;

const portfolioInfo = getInfoPortifolio(userNameParam);
// Você pode adicionar lógica adicional aqui se necessário
onMounted(() => {
  // Qualquer inicialização necessária
});
</script>

<style scoped>
/* Estilos adicionais específicos, se necessário */
</style>
