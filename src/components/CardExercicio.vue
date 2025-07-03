<template>
    <v-card
        class="mb-4"
        elevation="2"
        color="amarelo-secundario"
    >
        <v-card-text>
            <v-row align="center" justify="space-between">
                <v-col cols="auto">
                    <h1 class="text-xl font-bold leading-tight">Supino Reto</h1>
                    <p class="text-base text-gray-700">3x 12</p>
                </v-col>
                <v-col cols="auto">
                    <v-checkbox hide-details density="compact"/>
                </v-col>
            </v-row>
            <v-row dense class="mt-2">
                <v-col cols="6">
                    <v-text-field 
                        label="Carga (kg)" 
                        density="compact"
                        hide-details
                        variant="underlined"
                        class="max-w-[120px]"
                    />
                </v-col>
                <v-col cols="6" class="flex items-center">
                    <v-chip color="bg-navegacao" prepend-icon="mdi-note" variant="flat" class="ml-auto">
                        Isometria 3s
                    </v-chip>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">

</script>