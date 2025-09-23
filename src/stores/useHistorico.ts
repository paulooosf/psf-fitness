import { computed, ref, watch } from 'vue'
import type { RegistroTreino } from '@/types/registro-treino'

const historico = ref<RegistroTreino[]>([])

const salvo = localStorage.getItem('historico')
if (salvo) {
    historico.value = JSON.parse(salvo)
}

watch(historico, (val) => {
    localStorage.setItem('historico', JSON.stringify(val))
}, { deep: true })

const historicoInvertido = computed(() => {
  return [...historico.value].reverse()
})

export function useHistorico() {
    return {
        historico,
        historicoInvertido,
        registrar: (registro: RegistroTreino) => {
            historico.value.push(registro)
        },
        limparHistorico: () => {
            historico.value = []
        }
    }
}
