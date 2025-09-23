<template>
    <header-paginas titulo="Meus Treinos"/>
    <body class="flex flex-col w-full h-full mt-6 px-6 gap-6 mb-6">
        <div v-if="treinos.length === 0">
            <h2 class="text-xl text-center">Você não tem nenhum treino salvo.</h2>
            <v-btn 
                size="large" 
                to="/CriarTreino"
                color="amarelo-secundario" 
                class="mt-4 mx-auto w-full"
            >
                Criar primeiro treino
            </v-btn>
        </div>
        <div v-for="treino in treinos" :key="treino.id">
            <card-treino :Treino="treino" :to="{ name: '/Treino/[id]', params: { id: treino.id } }"/>
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
