<template>
    <v-bottom-navigation
        bg-color="bg-navegacao"
        color="amarelo-secundario">
        <v-btn>
            <v-icon>mdi-home-variant</v-icon>

            <span>Início</span>
        </v-btn>

        <v-btn to="/treinos">
            <v-icon>mdi-dumbbell</v-icon>

            <span>Treinos</span>
        </v-btn>

        <v-btn>
            <v-icon>mdi-history</v-icon>

            <span>Histórico</span>
        </v-btn>
    </v-bottom-navigation>
</template>

<script lang="ts">

</script>