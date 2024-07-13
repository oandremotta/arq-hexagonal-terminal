import { terminal } from "terminal-kit";
import { Carro } from "../core/fundamentos/Carro";
import corrida from "../core/fundamentos/Corrida";
import Ferrari from "../core/fundamentos/Ferrari";
import Fusca from "../core/fundamentos/Fusca";
import menuFundamentos from "../menu/menuFundamentos";
import menuPrincipal from "../menu/menuPrincipal";
import TerminalUtil from "../util/TerminalUtil";

export default async function dip() {
    TerminalUtil.titulo("DIP - Dependency Inversion Principle");
    const [tipo] = await TerminalUtil.selecao('Escolha o tipo de carro', ['Ferrari', 'Fusca']);
    let carro: Carro;

    switch (tipo) {
        case 0:
            carro = new Ferrari();
            break;
        case 1:
            carro = new Fusca();
            break;
    }

    corrida(carro!, terminal.red);
    await TerminalUtil.esperarEnter();
    menuFundamentos();
}