<template>
  <Menubar
    :pt="{
      root: {
        style: {
          padding: '2rem',
          background: 'inherit',
          border: 'none',
          borderRadius: '0',
          borderBottom: '1px solid var(--p-menubar-border-color)',
          justifyContent: 'center',
        },
      },
      itemLabel: (options) => ({
        style: {
          color: options.context.index === indexActive ? 'var(--primary-color)' : 'inherit',
          fontSize: '1.3rem',
        },
      }),
    }"
    :model="items"
  />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  indexActiveChange: {
    type: Number,
    default: 0
  }
});

// Definir o evento que será emitido
const emit = defineEmits(['currentIndexSelect']);

const isDarkTheme = ref(false);
const indexActive = ref(0);

// Definir item ativo inicialmente
onMounted(() => {
  // Define o primeiro item como ativo por padrão
  if (items.value.length > 0) {
    items.value[0].class = 'p-focus';
    // Emitir evento inicial
    emit('currentIndexSelect', 0);
  }
});

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  items.value[6].icon = isDarkTheme.value ? 'pi pi-sun' : 'pi pi-moon';
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

  // Emitir o evento com o novo índice
  emit('currentIndexSelect', newIndex);
};

// Observar mudanças na prop indexActiveChange
watch(() => props.indexActiveChange, (newIndex) => {
  updateItemClasses(newIndex);
});

// Manipular evento de clique no menu
const handleMenuClick = (event) => {
  const selectedItem = items.value.find(item => item.label === event.item.label);
  if (selectedItem) {
    const newIndex = items.value.indexOf(selectedItem);
    updateItemClasses(newIndex);
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
    label: 'Serviços',
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
