export interface Carro {
    readonly velocidadeMaxima: number;
    velocidadeAtual: number;
    acelerar(): void;
    frear(): void;
}