<template>
    <!-- <v-card
        prepend-icon="mdi-dumbbell"
        title="Treino 1"
        subtitle="5 Exercícios"
        link
        color="amarelo-secundario"
    ></v-card> -->
    <v-card
        class="mb-4"
        elevation="2"
        color="amarelo-secundario"
    >
        <v-card-text>
            <v-row align="center" justify="space-between">
                <v-col cols="auto">
                    <h1 class="text-2xl">
                        Supino Reto
                    </h1>
                    <p class="text-md">(3x 12)</p>
                </v-col>
                <v-col cols="auto">
                    <v-checkbox hide-details density="compact"/>
                </v-col>
            </v-row>

            <v-row dense class="mt-3">
                <v-col cols="4">
                    <v-text-field 
                        label="Carga (kg)" 
                        density="compact"
                        hide-details
                        variant="underlined"
                    />
                </v-col>

                <v-col cols="12" class="mt-3">
                    <h3 class="text-lg">Observações:</h3>
                    <p class="italic">Isometria 3s</p>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">

</script>