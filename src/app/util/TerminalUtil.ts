import { terminal } from 'terminal-kit';

export default class TerminalUtil {

    static titulo(texto: string) {
        terminal.clear();
        terminal.magenta(`${texto}\n`);
        terminal.magenta(`-`.repeat(texto.length) + '\n');
    }

    static async selecao(texto: string, opcoes: string[]): Promise<[number, string]> {
        terminal.yellow(`\n${texto}`);
        const res = await terminal.singleColumnMenu(opcoes).promise;
        return [res.selectedIndex, res.selectedText]
    }

    static async confirmacao(texto: string): Promise<boolean> {
        terminal.yellow(`\n${texto}`);
        const res = await terminal.singleLineMenu(['Sim', 'Não']).promise;

        return res.selectedIndex === 0;
    }

    static exibirChaveValor(chave: string, valor: string) {
        terminal.yellow(`\n${chave}: `).cyan(`${valor}\n`);
    }


    static async menu(opcoes: string[]): Promise<[number, string]> {
        const res = await terminal.singleColumnMenu(opcoes).promise;
        return [res.selectedIndex, res.selectedText];
    }

    static limpar() {
        terminal.clear();
    }

    static async esperarEnter(): Promise<void> {
        terminal.white('\nPressione ENTER para continuar...');
        await terminal.inputField({ echo: false }).promise;

    }
}