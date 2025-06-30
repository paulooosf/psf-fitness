<template>
    <v-app-bar flat color="background-secundario" scroll-behavior="hide" scroll-threshold="10">
      <v-btn icon="mdi-arrow-left" variant="text" @click="voltar"></v-btn>

      <v-app-bar-title class="text-center">
        {{ titulo }}
      </v-app-bar-title>

      <v-btn icon="mdi-arrow-left" variant="text" class="invisible"></v-btn>
    </v-app-bar>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

defineProps<{
    titulo: string
}>()

const router = useRouter()

const voltar = () => {
  router.back()
}
</script>