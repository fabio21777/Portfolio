<template>
  <div class="p-4 rounded-lg shadow-md surface-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4" :class="borderClass">
    <div class="flex items-center mb-3">
      <i class="pi pi-check-circle text-xl mr-2" :class="textClass"></i>
      <h3 class="text-xl font-medium m-0">{{ title }}</h3>
    </div>

    <ul class="mt-3 space-y-2">
      <li v-for="skill in skills" :key="skill" class="flex items-center">
        <i class="pi pi-check mr-2" :class="textClass"></i>
        <span>{{ skill }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  skills: string[]
  accent: string
}>()

// Mapa estático pra Tailwind não purgar as classes no build.
const accentMap: Record<string, { border: string; text: string }> = {
  'purple-500': { border: 'border-purple-500', text: 'text-purple-500' },
  'green-500': { border: 'border-green-500', text: 'text-green-500' },
  'red-500': { border: 'border-red-500', text: 'text-red-500' },
  'blue-500': { border: 'border-blue-500', text: 'text-blue-500' },
  'blue-700': { border: 'border-blue-700', text: 'text-blue-700' },
  'cyan-500': { border: 'border-cyan-500', text: 'text-cyan-500' },
  'green-600': { border: 'border-green-600', text: 'text-green-600' },
  'orange-400': { border: 'border-orange-400', text: 'text-orange-400' }
}

const palette = computed(() => accentMap[props.accent] ?? accentMap['purple-500'])
const borderClass = computed(() => palette.value.border)
const textClass = computed(() => palette.value.text)
</script>
