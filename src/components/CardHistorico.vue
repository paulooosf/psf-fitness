<template>
    <v-card
        prepend-icon="mdi-history"
        :title="RegistroTreino.nomeTreino"
        :subtitle="dataFormatada"
        color="amarelo-secundario"
    ></v-card>
</template>

<script setup lang="ts">
import type { RegistroTreino } from '@/types/registro-treino'
import { computed } from 'vue'

const props = defineProps<{
    RegistroTreino: RegistroTreino
}>()

const dataFormatada = computed(() => {
  const data = new Date(props.RegistroTreino.data)
  return data.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
})
</script>