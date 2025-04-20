<script setup lang="ts">
import Home from '@/domains/portifolio/views/components/Home.vue'
import { useNavegacaoStore } from '@/stores/navegacao.js'
import { reactive, useTemplateRef, watch, onMounted, ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'
import Sobre from '@/domains/portifolio/views/components/Sobre.vue'

const store = useNavegacaoStore()

// Flag para evitar chamadas recursivas entre detecção do mouse e rolagem programática
const isProgrammaticScrolling = ref(false)

const targetHome = useTemplateRef<HTMLElement>('home')
const mouseHome = reactive(useMouseInElement(targetHome))

const targetSobre = useTemplateRef<HTMLElement>('sobre')
const mouseSobre = reactive(useMouseInElement(targetSobre))

const targetHabilidades = useTemplateRef<HTMLElement>('habilidades')
const mouseHabilidades = reactive(useMouseInElement(targetHabilidades))

const targetServicos = useTemplateRef<HTMLElement>('servicos')
const mouseServicos = reactive(useMouseInElement(targetServicos))

const targetPortifolio = useTemplateRef<HTMLElement>('portifolio')
const mousePortifolio = reactive(useMouseInElement(targetPortifolio))

const targetContato = useTemplateRef<HTMLElement>('contato')
const mouseContato = reactive(useMouseInElement(targetContato))

const currentIndex = store.currentIndex

const sections = [
  { name: 'home', mouse: mouseHome, index: 0 },
  { name: 'sobre', mouse: mouseSobre, index: 1 },
  { name: 'habilidades', mouse: mouseHabilidades, index: 2 },
  { name: 'servicos', mouse: mouseServicos, index: 3 },
  { name: 'portifolio', mouse: mousePortifolio, index: 4 },
  { name: 'contato', mouse: mouseContato, index: 5 }
]

// Configurar observadores para o mouse em cada seção
const configurarObservadoresMouse = () => {
  sections.forEach(section => {
    watch(() => section.mouse.isOutside, (isOutside) => {
      // Só atualiza o índice se não estiver em rolagem programática
      if (!isOutside && !isProgrammaticScrolling.value) {
        store.setCurrentIndexScroll(section.index)
      }
    })
  })
}

// Adicionar listener de rolagem
const configurarObservadorRolagem = () => {
  let timeoutId = null

  window.addEventListener('scroll', () => {
    // Limpa o timeout anterior se existir
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    // Define um timeout para detectar quando a rolagem parou
    timeoutId = setTimeout(() => {
      isProgrammaticScrolling.value = false
    }, 500) // Espera 500ms depois da última rolagem
  })
}

// Configurar observadores quando o componente for montado
onMounted(() => {
  configurarObservadoresMouse()
  configurarObservadorRolagem()
})

// Monitorando o index atual
watch(() => store.currentIndex, (novoIndice) => {
  // Define que está em rolagem programática
  isProgrammaticScrolling.value = true

  // Função para rolagem para a seção correspondente ao índice
  const rolarParaSecao = (seletor) => {
    if (seletor === '#home'){
      // Se for a seção home, rola para o topo da página
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      return
    }else {
      const elemento = document.querySelector(seletor)
      if (elemento) {
        elemento.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

  // Rolagem com base no índice selecionado
  switch (novoIndice) {
    case 0:
      rolarParaSecao('#home')
      break
    case 1:
      rolarParaSecao('#sobre')
      break
    case 2:
      rolarParaSecao('#habilidades')
      break
    case 3:
      rolarParaSecao('#servicos')
      break
    case 4:
      rolarParaSecao('#portifolio')
      break
    case 5:
      rolarParaSecao('#contato')
      break
  }
})
</script>

<template>
  <div class="main">
    <!-- Seção Home -->
    <section id="home" ref="home" class="flex items-center py-15">
      <Home v-motion-slide-visible-once-left  />
    </section>

    <!-- Seção Sobre -->
    <section id="sobre" ref="sobre" class="flex items-center py-16">
      <Sobre v-motion-slide-visible-once-left></Sobre>
    </section>

    <!-- Seção Habilidades -->
    <section id="habilidades" ref="habilidades" class="min-h-screen flex items-center py-16">
      <div class="w-full bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 class="text-3xl font-bold text-primary-600 mb-4">Habilidades</h2>
        <p class="text-lg mb-4">Minhas habilidades técnicas e ferramentas que utilizo aparecerão aqui.</p>
        <div class="h-64 bg-gray-200 flex items-center justify-center rounded">
          <span class="text-gray-500">Conteúdo da seção Habilidades</span>
        </div>
      </div>
    </section>

    <!-- Seção Serviços -->
    <section id="servicos" ref="servicos" class="min-h-screen flex items-center py-16">
      <div class="w-full bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 class="text-3xl font-bold text-primary-600 mb-4">Serviços</h2>
        <p class="text-lg mb-4">Os serviços que ofereço como desenvolvedor aparecerão aqui.</p>
        <div class="h-64 bg-gray-200 flex items-center justify-center rounded">
          <span class="text-gray-500">Conteúdo da seção Serviços</span>
        </div>
      </div>
    </section>

    <!-- Seção Portifólio -->
    <section id="portifolio" ref="portifolio" class="min-h-screen flex items-center py-16">
      <div class="w-full bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 class="text-3xl font-bold text-primary-600 mb-4">Portfólio</h2>
        <p class="text-lg mb-4">Meus projetos e trabalhos realizados aparecerão aqui.</p>
        <div class="h-64 bg-gray-200 flex items-center justify-center rounded">
          <span class="text-gray-500">Conteúdo da seção Portfólio</span>
        </div>
      </div>
    </section>

    <!-- Seção Contato -->
    <section id="contato" ref="contato" class="min-h-screen flex items-center py-16">
      <div class="w-full bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 class="text-3xl font-bold text-primary-600 mb-4">Contato</h2>
        <p class="text-lg mb-4">Informações de contato e formulário para mensagens aparecerão aqui.</p>
        <div class="h-64 bg-gray-200 flex items-center justify-center rounded">
          <span class="text-gray-500">Conteúdo da seção Contato</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.main {
  margin-top: 10rem;
  padding: 0 35rem;
}

/* Mantendo o padding original mas adicionando responsividade */
@media (max-width: 1700px) {
  .main {
    padding: 0 20rem;
  }
}

@media (max-width: 1440px) {
  .main {
    padding: 0 10rem;
  }
}

@media (max-width: 768px) {
  .main {
    padding: 0 2rem;
  }
}
</style>