import TerminalUtil from "../util/TerminalUtil";
import menuFundamentos from "../menu/menuFundamentos";
import { Carro } from "../core/fundamentos/Carro";
import Ferrari from "../core/fundamentos/Ferrari";
import Fusca from "../core/fundamentos/Fusca";

export default async function polimorfismo() {
    TerminalUtil.titulo("Polimorfismo");

    const [tipoCarro] = await TerminalUtil.selecao('Tipo de carro', ['Ferrari', 'Fusca']);

    const carro: Carro = tipoCarro === 0 ? new Ferrari() : new Fusca();

    while (true) {
        TerminalUtil.limpar();
        TerminalUtil.exibirChaveValor('Velocidade máxima', carro.velocidadeMaxima.toString());
        TerminalUtil.exibirChaveValor('Velocidade atual', carro.velocidadeAtual.toString());
        const [opcao] = await TerminalUtil.selecao('Escolha uma opção', ['Acelerar', 'Frear', 'Sair']);

        opcao === 0 ? carro.acelerar() : carro.frear();

        const continuar = await TerminalUtil.confirmacao("Deseja continuar?");
        if (!continuar) menuFundamentos();
    }
}