<template>
    <body class="flex flex-col text-center justify-center w-full h-full mt-6 px-6 gap-6">
        <h1 class="text-3xl font-bold">Olá!</h1>
        <h2 class="text-2xl">
            <template v-if="ultimoTreino">
                O seu último treino foi <span class="text-yellow-300">{{ ultimoTreino.nomeTreino }}</span>.
            </template>
            <template v-else>
                Você ainda não registrou nenhum treino.
            </template>
        </h2>
        <h2 class="text-2xl font-bold" v-if="ultimoTreino">O que vamos treinar hoje?</h2>
        <h2 class="text-2xl font-bold" v-else>Vamos começar hoje?</h2>
        <v-btn
            v-if="ultimoTreino && treinos.find(t => t.id === ultimoTreino!.id)"
            color="amarelo-secundario"
            :to="{ name: '/Treino/[id]', params: { id: ultimoTreino.id } }"
            class="mt-4 mx-auto w-full"
            size="large"
        >
            Visualizar Treino
        </v-btn>
        <v-btn
            v-if="proximoTreino"
            color="amarelo-secundario"
            :to="{ name: '/Treino/[id]', params: { id: proximoTreino.id } }"
            class="mx-auto w-full"
            size="large"
        >
            Próximo treino: {{ proximoTreino.nome }}
        </v-btn>
        <v-btn 
            v-else 
            size="large" 
            to="/CriarTreino"
            color="amarelo-secundario" 
            class="mt-4 mx-auto w-full"
        >
            Criar primeiro treino
        </v-btn>
    </body>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useHistorico } from '@/stores/useHistorico'
import { useTreinos } from '@/stores/useTreinos'

const { historico } = useHistorico()
const { treinos } = useTreinos()

const ultimoTreino = computed(() => {
    if (!historico.value.length) return null
    return historico.value[historico.value.length - 1]
})

const proximoTreino = computed(() => {
    if (!treinos.value.length) return null
    if (!ultimoTreino.value) return treinos.value[0]
    const index = treinos.value.findIndex(t => t.id === ultimoTreino.value!.id)
    if (index === -1 || index === treinos.value.length - 1) return treinos.value[0]
    return treinos.value[index + 1]
})
</script>