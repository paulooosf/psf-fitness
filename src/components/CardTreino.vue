<template>
    <v-card
        prepend-icon="mdi-dumbbell"
        :title="Treino.nome"
        :subtitle="descricao"
        link
        color="amarelo-secundario"
    ></v-card>
</template>

<script setup lang="ts">
import type { Treino } from '@/types/treino';

const props = defineProps<{
  Treino: Treino
}>()

const descricao = `${props.Treino.exercicios.length + 1} exercícios`;
</script>