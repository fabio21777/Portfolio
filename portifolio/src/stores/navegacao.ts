import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNavegacaoStore = defineStore('navegacao', () => {

  const  correntIndex = ref(0)
  const correntIndexScroll = ref(0);

  function setCurrentIndex(index: number) {
    console.log(correntIndex)
    correntIndex.value = index
  }

  function setCurrentIndexScroll(index: number) {
    console.log('scroll',correntIndexScroll.value)
    correntIndexScroll.value = index
  }

  return { currentIndex: correntIndex, setCurrentIndex, correntIndexScroll, setCurrentIndexScroll }
})