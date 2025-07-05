<template>
    <header-paginas titulo="Treino"/>
    <body class="flex flex-col w-full h-full mt-6 px-6 gap-6">
        <timer @onFinalizarTimer="finalizarTreino"/>
        <div v-for="exercicio in treino!.exercicios" :key="exercicio.id">
            <card-exercicio :Exercicio="exercicio"/>
        </div>
    </body>
</template>

<script setup lang="ts">
import { useTreinos } from '@/stores/useTreinos';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute('/Treino/[id]')
const { treinos } = useTreinos()
const treino = computed(() =>
  treinos.value.find(t => t.id === Number(route.params.id))
)

function finalizarTreino(tempoDecorrido: string): void {

}
</script>