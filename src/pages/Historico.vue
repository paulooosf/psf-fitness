<template>
    <header-paginas titulo="Histórico"></header-paginas>
    <body class="flex flex-col w-full h-full mt-6 px-6 gap-6 mb-6">
        <div v-for="treino in historico" :key="treino.id">
            <card-historico :RegistroTreino="treino"/>
        </div>
    </body>
</template>

<script setup lang="ts">
import { useHistorico } from '@/stores/useHistorico'

const { historico } = useHistorico()
</script>