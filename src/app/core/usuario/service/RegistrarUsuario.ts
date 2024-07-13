import CasoDeUso from "../../shared/CasoDeUso";
import Id from "../../shared/Id";
import Usuario from "../model/Usuario";
import ProvedorCriptografia from "./ProvedorCriptografia";
import RepositorioUsuarioEmMemoria from "./RepositorioUsuarioEmMemoria";

export default class RegistrarUsuario implements CasoDeUso<Usuario, void>{

    constructor(private provedorCripto: ProvedorCriptografia) {

    }
    async executar(usuario: Usuario): Promise<void> {
        const repo = new RepositorioUsuarioEmMemoria();

        const senhaCripto = this.provedorCripto.criptografar(usuario.senha);


        let usuarioExists = await repo.buscarPorEmail(usuario.email);

        if (usuarioExists) {
            throw new Error("Já existe um usuário com esse e-mail" + usuario.email);
        }

        const novoUsuario = {
            id: Id.gerar(),
            nome: usuario.nome,
            email: usuario.email,
            senha: senhaCripto
        }

        repo.inserir(novoUsuario);
    }

}