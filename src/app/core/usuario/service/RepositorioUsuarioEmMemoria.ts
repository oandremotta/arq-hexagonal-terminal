import Errors from "../../shared/Errors";
import Usuario from "../model/Usuario";

export default class RepositorioUsuarioEmMemoria {
    private static readonly items: Usuario[] = [];

    async inserir(usuario: Usuario) {
        const items = RepositorioUsuarioEmMemoria.items;
        this.buscarPorEmail(usuario.email).then((usuarioExistente) => {
            if (usuarioExistente) {
                throw new Error(Errors.USUARIO_JA_EXISTE);
            }
            console.log("Inserindo usuário", usuario);
            RepositorioUsuarioEmMemoria.items.push(usuario);
        });

    }

    async buscarPorEmail(email: string): Promise<Usuario | null> {
        const items = RepositorioUsuarioEmMemoria.items;
        return items.find(item => item.email === email) ?? null;
    }
}