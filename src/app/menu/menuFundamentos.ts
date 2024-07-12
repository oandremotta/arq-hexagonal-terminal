import TerminalUtil from "../util/TerminalUtil";
import menuPrincipal from "./menuPrincipal";
import polimorfismo from "../fundamentos/polimorfismo";

export default async function menuFundamentos() {
    TerminalUtil.titulo("Fundamentos")

    const [indice] = await TerminalUtil.menu(['1. Polimorfismo', '2. Voltar']);

    switch (indice) {
        case 0:
            await polimorfismo();
            break;
        case 1:
            return menuPrincipal();
    }
}