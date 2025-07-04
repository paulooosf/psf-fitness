<template>
    <header-paginas titulo="Meus Treinos"/>
    <body class="flex flex-col w-full h-full mt-6 px-6 gap-6">
        <div v-for="treino in treinos" :key="treino.id">
            <card-treino :Treino="treino" to="/treino"/>
        </div>
        <div class="fixed right-5 bottom-17">
            <v-fab to="/criartreino"
            icon="mdi-plus"
            color="green"
            ></v-fab>
        </div>
    </body>
    
</template>

<script setup lang="ts">
import { useTreinos } from '@/stores/useTreinos';

const { treinos } = useTreinos()
</script>
