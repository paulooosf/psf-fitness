<template>
    <header-paginas titulo="Histórico"></header-paginas>
    <body class="flex flex-col w-full h-full mt-6 px-6 gap-6 mb-6">
        <div v-if="historicoInvertido.length === 0">
            <h2 class="text-xl text-center">Você ainda não registrou nenhum treino.</h2>
        </div>
        <div v-for="treino in historicoInvertido" :key="treino.id">
            <card-historico :RegistroTreino="treino"/>
        </div>
    </body>
</template>

<script setup lang="ts">
import { useHistorico } from '@/stores/useHistorico'

const { historicoInvertido } = useHistorico()
</script>