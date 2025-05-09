import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNavegacaoStore = defineStore('navegacao', () => {

  const  correntIndex = ref(0)
  const correntIndexScroll = ref(0);

  function setCurrentIndex(index: number) {
    correntIndex.value = index
    correntIndexScroll.value = index
  }

  function setCurrentIndexScroll(index: number) {
    correntIndexScroll.value = index
    correntIndex.value = -1;
  }

  return { currentIndex: correntIndex, setCurrentIndex, correntIndexScroll, setCurrentIndexScroll }
})