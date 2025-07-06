<template>
    <header-paginas :titulo="stringHeader"/>
    <body class="flex flex-col w-full h-full mt-6 px-6 gap-6 pb-24">
        <form class="flex flex-col gap-6">
            <h1 class="text-xl">Renomear treino:</h1>
            <v-text-field
                label="Nome do Treino"
                variant="outlined"
                density="compact"
                class="mb-4"
                v-model="nomeTreino"
            />
            <div class="flex flex-row justify-between items-center">
                <h1 class="text-xl">Exercícios:</h1>
                <v-btn
                    color="green"
                    size="small"
                    variant="elevated"
                    prepend-icon="mdi-plus"
                    class="ml-auto"
                    @click.prevent="adicionarExercicio"
                >Adicionar</v-btn>
            </div>
            <div class="mb-6">
                <div v-for="(exercicio, index) in exercicios" :key="exercicio.id">
                    <v-card
                        class="mb-6"
                        elevation="2"
                        color="amarelo-secundario"
                        :title="`Exercício ${index + 1}`"
                    >
                        <v-card-text class="pb-0">
                            <v-text-field
                                label="Nome do Exercício"
                                variant="outlined"
                                density="compact"
                                class="mb-2"
                                v-model="exercicio.nome"
                            />
                            <v-text-field
                                label="Repetições"
                                variant="outlined"
                                density="compact"
                                class="mb-2"
                                v-model="exercicio.repeticoes"
                            />
                            <v-text-field
                                label="Observação (opcional)"
                                variant="outlined"
                                density="compact"
                                v-model="exercicio.observacao"
                            />
                        </v-card-text>
                        <v-card-actions class="pt-0">
                            <v-btn
                                color="red"
                                size="small"
                                variant="elevated"
                                prepend-icon="mdi-minus"
                                class="ml-auto"
                                @click.prevent="removerExercicio(index)"
                            >Remover</v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </div>
            <div class="fixed right-5 bottom-17">
                <v-fab
                    @click="salvarAlteracoes"
                    icon="mdi-content-save"
                    color="green"
                />
            </div>
        </form>
        <v-snackbar v-model="mostrarToast" color="red" timeout="2000">
            {{ mensagemErro }}
            <template #actions>
                <v-btn icon @click="mostrarToast = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </template>
        </v-snackbar>
    </body>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTreinos } from '@/stores/useTreinos'
import type { Treino } from '@/types/treino'

const route = useRoute('/EditarTreino/[id]')
const router = useRouter()
const { getTreinoPorId, atualizarTreino } = useTreinos()

const nomeTreino = ref('')
const exercicios = ref<Treino['exercicios']>([])
const mensagemErro = ref('')
const mostrarToast = ref(false)
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
    return `Editando treino: ${nomeTreino.value || 'Carregando...'}`
})

function adicionarExercicio() {
    exercicios.value.push({
        id: Date.now() + Math.random(),
        nome: '',
        repeticoes: '',
        observacao: ''
    })
}

function removerExercicio(index: number) {
    if (exercicios.value.length <= 1) return
    exercicios.value.splice(index, 1)
}

function salvarAlteracoes() {
    if (!nomeTreino.value.trim()) {
        mensagemErro.value = 'Insira um nome válido.'
        mostrarToast.value = true
        return
    }

    if (exercicios.value.some(e => !e.nome.trim() || !e.repeticoes.trim())) {
        mensagemErro.value = 'Preencha todos os campos dos exercícios.'
        mostrarToast.value = true
        return
    }

    atualizarTreino({
        id,
        nome: nomeTreino.value,
        exercicios: exercicios.value
    })

    router.push('/Treinos')
}
</script>
