<template>
    <header-paginas titulo="Treino"/>
    <body class="flex flex-col w-full h-full mt-6 px-6 gap-6">
        <timer @onFinalizarTimer="finalizarTreino"/>
        <card-exercicio/>
        <card-exercicio/>
        <card-exercicio/>
        <card-exercicio/>
        <card-exercicio/>
        <card-exercicio/>
        <card-exercicio/>
        <card-exercicio/>
    </body>
</template>

<script setup lang="ts">
    function finalizarTreino(tempoDecorrido: string): void {

    }
</script>