<template>
    <v-card
        :class="exercicioFinalizado ? 'opacity-50' : ''"
        elevation="2"
        color="amarelo-secundario"
    >
        <v-card-text>
            <v-row no-gutters align="center" class="mb-2">
                <v-col class="pr-2">
                    <h1 class="text-xl font-bold leading-tight break-words">
                    {{ Exercicio.nome }}
                    </h1>
                    <p class="text-base text-gray-700">{{ Exercicio.repeticoes }}</p>
                </v-col>

                <v-col class="flex justify-end" cols="auto">
                    <v-checkbox hide-details density="compact" v-model="exercicioFinalizado"/>
                </v-col>
            </v-row>
            <v-row dense class="mt-2" v-if="!exercicioFinalizado">
                <v-col cols="6">
                    <v-text-field 
                        label="Carga (kg)" 
                        density="compact"
                        hide-details
                        variant="underlined"
                        class="max-w-[90px]"
                        v-model="Exercicio.carga"
                        @change="emit('atualizarCarga')"
                    />
                </v-col>
                <v-col cols="6" class="flex items-center justify-end" v-if="Exercicio.observacao">
                    <div
                        class="flex items-start gap-1 text-sm text-white px-3 py-1 rounded-2xl max-w-full bg-gray-700"
                        style="white-space: normal; word-break: break-word; line-height: 1.2;"
                    >
                        <v-icon icon="mdi-note" size="18" class="mt-[2px]" />
                        <span>{{ Exercicio.observacao }}</span>
                    </div>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import type { Exercicio } from '@/types/exercicio'
import { ref } from 'vue'
const emit = defineEmits(['atualizarCarga'])

const exercicioFinalizado = ref(false)
const props = defineProps<{
    Exercicio: Exercicio
}>()
</script>