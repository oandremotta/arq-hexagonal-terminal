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

    static async campoRequerido(label: string, valorPadrao: string): Promise<string> {
        terminal.yellow(`\n${label}`);
        const res = await terminal.inputField({ default: valorPadrao }).promise;

        if (res) return res;

        return TerminalUtil.campoRequerido(label, valorPadrao);

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

    static async sucesso(texto: string) {
        terminal.green(`\n${texto}\n`);
    }

    static async error(texto: string) {
        terminal.red(`\n${texto}\n`);
    }
}