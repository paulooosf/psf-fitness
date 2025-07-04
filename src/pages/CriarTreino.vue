<template>
    <header-paginas titulo="Criando treino"/>
    <body class="flex flex-col w-full h-full mt-6 px-6 gap-6 pb-24">
        <form class="flex flex-col gap-6">
            <h1 class="text-xl">Como vamos chamar o novo treino?</h1>
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
                <v-fab @click="salvarTreino()"
                icon="mdi-content-save"
                color="green"
                ></v-fab>
            </div>
        </form>
    </body>
</template>

<script setup lang="ts">
import { useTreinos } from '@/stores/useTreinos'
import { ref } from 'vue'

const nomeTreino = ref('')
const exercicios = ref([
    { id: Date.now(), nome: '', repeticoes: '', observacao: '' }
])
const {adicionarTreino } = useTreinos()

function adicionarExercicio() {
    exercicios.value.push({
        id: Date.now() + Math.random(),
        nome: '',
        repeticoes: '',
        observacao: ''
    })
}

function removerExercicio(index: number) {
    if (exercicios.value.length <= 1) {
        return
    }
    exercicios.value.splice(index, 1)
}

function salvarTreino() {
    if (!nomeTreino.value.trim()) {
        alert('Por favor, insira um nome para o treino.')
        return
    }

    if (exercicios.value.some(ex => !ex.nome.trim() || !ex.repeticoes.trim())) {
        alert('Por favor, preencha todos os campos dos exercícios.')
        return
    }

    const novoTreino = {
        id: Date.now(),
        nome: nomeTreino.value,
        exercicios: exercicios.value
    }

    adicionarTreino(novoTreino)
    alert('Treino salvo com sucesso!')
}

</script>