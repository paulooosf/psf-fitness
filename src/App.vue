<template>
  <v-app>
    <v-main>
      <router-view />
      <barra-navegacao/>
    </v-main>

    <v-dialog v-model="mostrarAviso" max-width="400">
      <v-card>
        <v-card-title class="headline">Aviso</v-card-title>
        <v-card-text>
          Esta aplicação foi projetada para dispositivos móveis. Para a melhor experiência, por favor, acesse-a em um smartphone ou tablet.
        </v-card-text>
        <v-card-actions>
          <v-btn color="amarelo-secundario" text @click="mostrarAviso = false">Entendi</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue'

  const mostrarAviso = ref(false)

  onMounted(() => {
    if (window.innerWidth > 1024) {
      mostrarAviso.value = true
    }
  })
</script>
