<template>
  <div class="w-full max-w-3xl mx-auto p-6">
    <div class="text-center text-primary-600 mb-10">
      <h1 class="text-4xl text-primary-600 font-bold mb-2">{{ title }}</h1>
      <p class="text-lg">{{ subtitle }}</p>
    </div>

    <div>
      <!-- Informações de contato -->
      <div class="space-y-8">
        <!-- Email -->
        <div class="flex items-center">
          <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full">
            <i class="pi pi-envelope text-xl"></i>
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-medium">Email</h3>
            <p class="mt-1">{{ contactInfo.email }}</p>
          </div>
        </div>

        <!-- Localização -->
        <div class="flex items-center">
          <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full">
            <i class="pi pi-map-marker text-xl"></i>
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-medium">Localização</h3>
            <p class="mt-1">{{ contactInfo.location }}</p>
          </div>
        </div>

        <!-- Links sociais -->
        <div class="pt-6 border-t border-gray-200">
          <h3 class="text-lg font-medium mb-4">Me encontre online</h3>
          <div class="flex space-x-4">
            <a :href="contactInfo.github" target="_blank"
               class="flex items-center justify-center w-12 h-12 rounded-full transition-colors">
              <i class="pi pi-github text-xl"></i>
            </a>
            <a :href="contactInfo.linkedin" target="_blank"
               class="flex items-center justify-center w-12 h-12 rounded-full transition-colors">
              <i class="pi pi-linkedin text-xl"></i>
            </a>
            <a :href="'mailto:' + contactInfo.email"
               class="flex items-center justify-center w-12 h-12 rounded-full transition-colors">
              <i class="pi pi-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getInfoPortifolio } from '@/stores/portfolio'
import { useRoute } from 'vue-router'

// Props do componente
const props = defineProps({
  title: {
    type: String,
    default: 'Contato'
  },
  subtitle: {
    type: String,
    default: 'Entre em contato comigo!'
  }
});

// Informações de contato

const route = useRoute();

const userNameParam = route?.params?.userName;

const portfolioInfo = getInfoPortifolio(userNameParam);
const contactInfo = ref({
  name: portfolioInfo.name,
  email: portfolioInfo.email,
  location: portfolioInfo.local,
  github: portfolioInfo.github,
  linkedin: portfolioInfo.linkedin,
});
</script>
