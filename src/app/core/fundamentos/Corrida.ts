import { Carro } from "./Carro";

export default function corrida(carro: Carro, logger: (str: string) => void) {

    Array.from({ length: 10 }).forEach(() => {
        carro.acelerar();
        logger(`Velocidade atual: ${carro.velocidadeAtual}\n`);
    });

    Array.from({ length: 10 }).forEach(() => {
        carro.frear();
        logger(`Velocidade atual: ${carro.velocidadeAtual}\n`);
    });
}