<script setup lang="ts">
import Home from '@/domains/portfolio/views/components/Home.vue'
import { useNavegacaoStore } from '@/stores/navegacao.js'
import { onMounted, reactive, ref, useTemplateRef, watch } from 'vue'
import { useMouseInElement } from '@vueuse/core'
import Sobre from '@/domains/portfolio/views/components/Sobre.vue'
import Github from '@/domains/portfolio/views/components/Github.vue'
import Habilidade from '@/domains/portfolio/views/components/Habilidade.vue'
import Contatos from '@/domains/portfolio/views/components/Contatos.vue'

const store = useNavegacaoStore()

// Flag para evitar chamadas recursivas entre detecção do mouse e rolagem programática
const isProgrammaticScrolling = ref(false)

const targetHome = useTemplateRef<HTMLElement>('home')
const mouseHome = reactive(useMouseInElement(targetHome))

const targetSobre = useTemplateRef<HTMLElement>('sobre')
const mouseSobre = reactive(useMouseInElement(targetSobre))

const targetHabilidades = useTemplateRef<HTMLElement>('habilidades')
const mouseHabilidades = reactive(useMouseInElement(targetHabilidades))

const targetGithub = useTemplateRef<HTMLElement>('github')
const mouseGithub = reactive(useMouseInElement(targetGithub))

const targetContato = useTemplateRef<HTMLElement>('contato')
const mouseContato = reactive(useMouseInElement(targetContato))

const currentIndex = store.currentIndex

const sections = [
  { name: 'home', mouse: mouseHome, index: 0,target: targetHome },
  { name: 'sobre', mouse: mouseSobre, index: 1, target: targetSobre },
  { name: 'habilidades', mouse: mouseHabilidades, index: 2, target: targetHabilidades },
  { name: 'github', mouse: mouseGithub, index: 3, target: targetGithub },
  { name: 'contato', mouse: mouseContato, index: 4, target: targetContato }
]

// Configurar observadores para o mouse em cada seção
const configurarObservadoresMouse = () => {
  sections.forEach(section => {
    watch(() => section.mouse.isOutside, (isOutside) => {
      // Só atualiza o índice se não estiver em rolagem programática
      if (!isOutside && !isProgrammaticScrolling.value) {
        //da foco html na seção correspondente pelo target
        if (section.target && section.target.value) {
          // Adiciona foco ao elemento (opcional)
          section.target.value.focus({ preventScroll: true })
          }
        store.setCurrentIndexScroll(section.index)
      }
    })
  })
}

// Adicionar listener de rolagem
const configurarObservadorRolagem = () => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  window.addEventListener('scroll', () => {
    // Limpa o timeout anterior se existir
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    // Define um timeout para detectar quando a rolagem parou
    timeoutId = setTimeout(() => {
      isProgrammaticScrolling.value = false
    }, 50) // Espera 50ms depois da última rolagem
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
      rolarParaSecao('#github')
      break
    case 4:
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
      <Habilidade v-motion-slide-visible-once-left ></Habilidade>
    </section>
    <!-- Seção GitHub -->
    <section id="github" ref="github" class="flex items-center py-16">
      <Github v-motion-slide-visible-once-left></Github>
    </section>
    <section id="contato" ref="contato" class="flex items-center py-16">
      <Contatos v-motion-slide-visible-once-left></Contatos>
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
