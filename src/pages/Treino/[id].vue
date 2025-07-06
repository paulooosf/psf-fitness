<template>
    <header-paginas :titulo="stringHeader"/>
    <body class="flex flex-col w-full h-full mt-6 px-6 gap-6">
        <timer @onIniciarTimer="treinoIniciado = true" @onFinalizarTimer="finalizarTreino"/>
        <div class="flex flex-row justify-between" v-if="!treinoIniciado">
            <v-btn color="amarelo-secundario" size="small" :to="{ name: '/EditarTreino/[id]', params: { id } }">
                <v-icon icon="mdi-pencil" class="mr-2"/>
                Editar Treino
            </v-btn>
            <v-btn color="red" size="small">
                <v-icon icon="mdi-delete" class="mr-2"/>
                Excluir Treino
            </v-btn>
        </div>
        <div v-for="exercicio in exercicios" :key="exercicio.id">
            <card-exercicio :Exercicio="exercicio" :TreinoIniciado="treinoIniciado"/>
        </div>
    </body>
</template>

<script setup lang="ts">
import { useTreinos } from '@/stores/useTreinos'
import type { Treino } from '@/types/treino'
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute('/Treino/[id]')
const router = useRouter()
const { getTreinoPorId } = useTreinos()
const treinoIniciado = ref(false)
const nomeTreino = ref('')
const exercicios = ref<Treino['exercicios']>([])
const id = Number(route.params.id)

onMounted(() => {
    const treino = getTreinoPorId(id)
    if (!treino) {
        alert('Treino não encontrado.')
        router.push('/Treinos')
        return
    }
    nomeTreino.value = treino.nome
    exercicios.value = JSON.parse(JSON.stringify(treino.exercicios))
})

const stringHeader = computed(() => {
    return `Treino: ${nomeTreino.value || 'Carregando...'}`
})

function finalizarTreino(tempoDecorrido: string): void {
    treinoIniciado.value = false
}
</script>