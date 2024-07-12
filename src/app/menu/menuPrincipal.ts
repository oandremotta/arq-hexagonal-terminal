import TerminalUtil from "../util/TerminalUtil";
import menuFundamentos from "./menuFundamentos";

export default async function menuPrincipal() {
    TerminalUtil.titulo("Menu Principal");


    const [indice] = await TerminalUtil.menu([
        '1. Fundamentos',
        '2. Sair'
    ]);

    switch (indice) {
        case 0:
            menuFundamentos();
            break;
        case 1:
            console.log('Sair');
    }
}