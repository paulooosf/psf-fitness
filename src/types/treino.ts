import type { Exercicio } from "./exercicio";

export interface Treino {
    id: number,
    nome: string,
    exercicios: Exercicio[],
    tempo?: string
}