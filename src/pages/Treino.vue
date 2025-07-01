<template>
    <header-paginas titulo="Treino"/>
    <body class="flex flex-col p-6">
        <timer @onFinalizarTimer="finalizarTreino"/>
    </body>
</template>

<script setup lang="ts">
    function finalizarTreino(tempoDecorrido: string): void {

    }
</script>