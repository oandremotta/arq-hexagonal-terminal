import { error } from "console";
import Usuario from "../core/usuario/model/Usuario";
import RegistrarUsuario from "../core/usuario/service/RegistrarUsuario";
import menuPrincipal from "../menu/menuPrincipal";
import TerminalUtil from "../util/TerminalUtil";
import InverterSenhaCripto from "../adapter/auth/InverterSenhaCripto";

export default async function registrarUsuario() {
    TerminalUtil.titulo("Registrar usuário");


    const nome = await TerminalUtil.campoRequerido("Nome", "");
    const email = await TerminalUtil.campoRequerido("Email", "");
    const senha = await TerminalUtil.campoRequerido("Senha", "");

    const usuario: Usuario = {
        nome,
        email,
        senha
    };

    const provedorCripto = new InverterSenhaCripto();

    const casoDeUso = new RegistrarUsuario(provedorCripto);

    try {
        await casoDeUso.executar(usuario);
    } catch (e: any) {
        TerminalUtil.error(e.message);
    } finally {
        await TerminalUtil.esperarEnter();
    }


    await menuPrincipal();
}