<template>
    <h1 class="text-2xl font-bold">{{ tempoDecorrido }}</h1>
    <v-btn @click="iniciarTimer" :disabled="timerAtivo">Iniciar</v-btn>
    <v-btn @click="finalizarTimer" :disabled="!timerAtivo">Finalizar</v-btn>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

    const tempoEmSegundos = ref(0)
    const timer = ref(0)
    const timerAtivo = ref(false)

    const tempoDecorrido = computed(() => {
        return new Date(tempoEmSegundos.value * 1000).toISOString().substring(11, 19)
    })

    const emit = defineEmits(['onFinalizarTimer'])

    function iniciarTimer() {
        timer.value = setInterval(() => {
            tempoEmSegundos.value += 1
        }, 1000)
        timerAtivo.value = true
    }

    function finalizarTimer() {
        timerAtivo.value = false
        clearInterval(timer.value)
        emit('onFinalizarTimer', tempoDecorrido)
    }
</script>