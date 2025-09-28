import SenhaCripto from "@/adapter/auth/SenhaCripto";
import Usuario from "@/core/usuario/model/Usuario";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";
import TerminalUtil from "../util/TerminalUtil";
import RepositorioUsuarioPg from "@/adapter/db/repositorioUsuarioPg";

export default async function registrarUsuario() {
    TerminalUtil.titulo('Registrar Usuario');

    const { campoRequerido, sucesso, erro, esperarEnter } = TerminalUtil;

    const nome = await campoRequerido('Nome: ');
    const email = await campoRequerido('email: ');
    const senha = await campoRequerido('Senha: ');

    const usuario: Usuario = { nome, email, senha }
    const repositorio = new RepositorioUsuarioPg();// new RepositorioUsuarioEmMemoria();

    const provedorCripto = new SenhaCripto(); //new EspacoSenhaCripto(); //new InverterSenhaCript();
    const casoDeUso = new RegistrarUsuario(repositorio, provedorCripto);

    try {
        await casoDeUso.executar(usuario);

        sucesso('Usuario registrado com sucesso');
    } catch (e: any) {
        await erro(e.message);
    }
    finally {
        await esperarEnter();
    }

}