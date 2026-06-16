<template>
  <div class="w-full py-16">
    <div class="text-center mb-12 text-primary-600">
      <h1 class="text-4xl font-bold text-primary-600 mb-2">GitHub</h1>
      <p>Meu código open source</p>
    </div>

    <div class="max-w-3xl mx-auto px-4">
      <!-- Loading -->
      <div v-if="isFetching" class="flex justify-center py-12">
        <ProgressSpinner />
      </div>

      <!-- Error / Fallback -->
      <div v-else-if="error" class="text-center py-12">
        <i class="pi pi-github text-6xl text-primary-600 mb-4 block"></i>
        <p class="mb-6">Não foi possível carregar o perfil ao vivo.</p>
        <a :href="portfolioInfo.github"
           target="_blank"
           class="inline-flex items-center gap-2 px-6 py-3 rounded-md text-white transition-opacity hover:opacity-90"
           style="background-color: var(--primary-color)">
          <i class="pi pi-github"></i>
          <span>Ver meu GitHub</span>
        </a>
      </div>

      <!-- Perfil ao vivo -->
      <div v-else-if="data"
           class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
        <div class="flex-shrink-0">
          <img
            :src="data.avatar_url"
            :alt="data.login"
            class="w-40 h-40 rounded-full shadow-md border-4"
            style="border-color: var(--primary-color)"
          />
        </div>

        <div class="flex-1 text-center md:text-left">
          <h2 class="text-2xl font-bold mb-1">{{ data.name || data.login }}</h2>
          <p class="text-gray-500 dark:text-gray-400 mb-3">@{{ data.login }}</p>
          <p v-if="data.bio" class="mb-4">{{ data.bio }}</p>
          <p v-if="data.location" class="mb-4 text-sm text-gray-600 dark:text-gray-300">
            <i class="pi pi-map-marker mr-2"></i>{{ data.location }}
          </p>

          <div class="flex justify-center md:justify-start gap-6 mb-6">
            <div class="text-center">
              <h3 class="text-2xl font-bold" style="color: var(--primary-color)">{{ data.public_repos }}</h3>
              <p class="text-sm">Repositórios</p>
            </div>
            <div class="text-center">
              <h3 class="text-2xl font-bold" style="color: var(--primary-color)">{{ data.followers }}</h3>
              <p class="text-sm">Seguidores</p>
            </div>
            <div class="text-center">
              <h3 class="text-2xl font-bold" style="color: var(--primary-color)">{{ data.following }}</h3>
              <p class="text-sm">Seguindo</p>
            </div>
          </div>

          <a :href="data.html_url"
             target="_blank"
             class="inline-flex items-center gap-2 px-6 py-3 rounded-md text-white transition-opacity hover:opacity-90"
             style="background-color: var(--primary-color)">
            <i class="pi pi-github"></i>
            <span>Ver perfil completo</span>
            <i class="pi pi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFetch } from '@vueuse/core'
import ProgressSpinner from 'primevue/progressspinner'
import { getInfoPortifolio } from '@/stores/portfolio'
import { useRoute } from 'vue-router'
import { extractGithubUsername, type GitHubUser } from '@/domains/portfolio/dto/Github'

const route = useRoute()
const userNameParam = route?.params?.userName
const portfolioInfo = getInfoPortifolio(userNameParam)

// computed: se portfolioInfo.github um dia virar reativo, o useFetch refaz a req.
const githubUsername = computed(() => extractGithubUsername(portfolioInfo.github))

const apiUrl = computed(() => `https://api.github.com/users/${githubUsername.value}`)

const { data, error, isFetching } = useFetch(apiUrl).json<GitHubUser>()
</script>

<style scoped>
</style>
