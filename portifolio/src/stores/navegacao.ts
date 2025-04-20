import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNavegacaoStore = defineStore('navegacao', () => {

  const  currentIndex = ref(0)

  function setCurrentIndex(index: number) {
    currentIndex.value = index
  }

  return { currentIndex, setCurrentIndex }
})