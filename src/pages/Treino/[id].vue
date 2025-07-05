<template>
    <header-paginas :titulo="stringHeader"/>
    <body class="flex flex-col w-full h-full mt-6 px-6 gap-6">
        <timer @onIniciarTimer="treinoIniciado = true" @onFinalizarTimer="finalizarTreino"/>
        <div class="flex flex-row justify-between" v-if="!treinoIniciado">
            <v-btn color="amarelo-secundario" size="small">
                <v-icon icon="mdi-pencil" class="mr-2"/>
                Editar Treino
            </v-btn>
            <v-btn color="red" size="small">
                <v-icon icon="mdi-delete" class="mr-2"/>
                Excluir Treino
            </v-btn>
        </div>
        <div v-for="exercicio in treino!.exercicios" :key="exercicio.id">
            <card-exercicio :Exercicio="exercicio" :TreinoIniciado="treinoIniciado"/>
        </div>
    </body>
</template>

<script setup lang="ts">
import { useTreinos } from '@/stores/useTreinos'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute('/Treino/[id]')
const { treinos } = useTreinos()
const treino = computed(() =>
  treinos.value.find(t => t.id === Number(route.params.id))
)
const stringHeader = `Treino: ${treino.value?.nome || 'Carregando...'}`
const treinoIniciado = ref(false)

function finalizarTreino(tempoDecorrido: string): void {
    treinoIniciado.value = false
}
</script>