<template>
  <Menubar
    class="menubar"
    :pt="{
      root: {
        style: {
          padding: '2rem',
          border: 'none',
          borderRadius: '0',
          borderBottom: '1px solid var(--p-menubar-border-color)',
          justifyContent: 'center',
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          zIndex: '1000',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        },
      },
      itemLabel: (options) => ({
        style: {
          color: options.context.index === indexActive ? 'var(--primary-color)' : 'inherit',
          fontSize: '1.2rem',
        },
      }),
    }"
    :model="items"
  />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useNavegacaoStore} from '@/stores/navegacao.js'


const navegacao = useNavegacaoStore();

const isDarkTheme = ref(false);
const indexActive = ref(0);

// Definir item ativo inicialmente
onMounted(() => {
  // Define o primeiro item como ativo por padrão
  if (items.value.length > 0) {
    items.value[0].class = 'p-focus';
  }
});

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  items.value[5].icon = isDarkTheme.value ? 'pi pi-sun' : 'pi pi-moon';
  document.documentElement.classList.toggle('my-app-dark');
};

// Criar uma função auxiliar para lidar com as atualizações de classe
const updateItemClasses = (newIndex) => {
  // Remover classe p-focus de todos os itens
  items.value.forEach(item => {
    if (item.class) {
      item.class = item.class.replace('p-focus', '').trim();
    }
  });

  // Adicionar classe ao item selecionado
  const selectedItem = items.value[newIndex];
  if (selectedItem) {
    selectedItem.class = selectedItem.class
      ? `${selectedItem.class} p-focus custom-class`.trim()
      : 'p-focus custom-class';
  }

  // Atualizar o índice ativo
  indexActive.value = newIndex;
};

// Observar mudanças na propriedade do store navegacao.currentIndex

watch(() => navegacao.currentIndex, (newIndex) => {
  if (newIndex !== undefined && newIndex !== null) {
    updateItemClasses(newIndex);
  }
});

// observa mudanças no índice auxiliar do scroll do mouse
watch( () =>  navegacao.correntIndexScroll, (newIndex) => {
  if (newIndex !== undefined && newIndex !== null) {
    updateItemClasses(newIndex);
  }
});

const handleMenuClick = (event) => {
  const selectedItem = items.value.find(item => item.label === event.item.label);
  if (selectedItem) {
    const newIndex = items.value.indexOf(selectedItem);
    updateItemClasses(newIndex);
    navegacao.setCurrentIndex(newIndex);
  }
};

const items = ref([
  {
    label: 'Home',
    command: handleMenuClick,
    class: 'p-focus'  // Item inicial ativo
  },
  {
    label: 'Sobre',
    command: handleMenuClick
  },
  {
    label: 'Habilidades',
    command: handleMenuClick
  },
  {
    label: 'Portfólio',
    command: handleMenuClick
  },
  {
    label: 'Contato',
    command: handleMenuClick
  },
  {
    label: '',
    icon: 'pi pi-moon',
    command: toggleTheme
  }
]);
</script>
