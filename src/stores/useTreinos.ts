import { ref, watch } from 'vue'
import type { Treino } from '@/types/treino'

const treinos = ref<Treino[]>([])

const salvo = localStorage.getItem('treinos')
if (salvo) {
  treinos.value = JSON.parse(salvo)
}

watch(treinos, (val) => {
  localStorage.setItem('treinos', JSON.stringify(val))
}, { deep: true })

export function useTreinos() {
  return {
    treinos,
    adicionarTreino: (novo: Treino) => {
      treinos.value.push(novo)
    },
    removerTreino: (id: number) => {
      treinos.value = treinos.value.filter((t: Treino) => t.id !== id)
    },
    atualizarTreino: (novoTreino: Treino) => {
      const index = treinos.value.findIndex((t: Treino) => t.id === novoTreino.id)
      if (index !== -1) treinos.value[index] = novoTreino
    }
  }
}
