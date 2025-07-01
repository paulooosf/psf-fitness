import type { Exercicio } from "./Exercicio";

export interface Treino {
    id: number,
    nome: string,
    exercicios: Exercicio[],
    tempo?: string
}