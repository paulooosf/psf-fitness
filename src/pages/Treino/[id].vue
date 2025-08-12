<template>
    <header-paginas :titulo="stringHeader"/>
    <body class="flex flex-col w-full h-full mt-6 px-6 gap-6">
        <v-btn @click="registrarTreino" color="green" v-if="!registrado">Registrar</v-btn>
        <div class="flex flex-row justify-between">
            <v-btn color="amarelo-secundario" size="small" :to="{ name: '/EditarTreino/[id]', params: { id } }">
                <v-icon icon="mdi-pencil" class="mr-2"/>
                Editar Treino
            </v-btn>
            <v-btn color="red" size="small" @click="mostrarModalExclusao = true">
                <v-icon icon="mdi-delete" class="mr-2"/>
                Excluir Treino
            </v-btn>
        </div>
        <div v-for="exercicio in exercicios" :key="exercicio.id">
            <card-exercicio :Exercicio="exercicio"/>
        </div>
        <v-dialog v-model="mostrarModalExclusao" width="400">
            <v-card>
                <v-card-title class="text-h6">Confirmar exclusão</v-card-title>
                <v-card-text>Tem certeza que deseja excluir este treino?</v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="grey" variant="text" @click="mostrarModalExclusao = false">
                        Cancelar
                    </v-btn>
                    <v-btn color="red" variant="elevated" @click="excluirTreino">
                        Excluir
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </body>
</template>

<script setup lang="ts">
import { useTreinos } from '@/stores/useTreinos'
import type { Treino } from '@/types/treino'
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHistorico } from '@/stores/useHistorico'

const route = useRoute('/Treino/[id]')
const router = useRouter()
const { getTreinoPorId, removerTreino } = useTreinos()
const { registrar } = useHistorico()
const nomeTreino = ref('')
const mostrarModalExclusao = ref(false)
const registrado = ref(false)
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

function registrarTreino(): void {
    registrar({
        id: id,
        nomeTreino: nomeTreino.value,
        data: new Date()
    })
    registrado.value = true
}

function excluirTreino(): void {
    removerTreino(id)
    mostrarModalExclusao.value = false
    router.push('/Treinos')
}
</script>