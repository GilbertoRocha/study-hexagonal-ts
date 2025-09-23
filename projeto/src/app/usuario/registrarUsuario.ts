import SenhaCripto from "@/adapter/auth/SenhaCripto";
import Usuario from "@/core/usuario/model/Usuario";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";
import TerminalUtil from "../util/TerminalUtil";
import RepositorioUsuarioEmMemoria from "../../adapter/db/RepositorioUsuarioEmMemoria";

export default async function registrarUsuario() {
    TerminalUtil.titulo('Registrar Usuario');

    const nome = await TerminalUtil.campoRequerido('Nome: ', 'Nome teste Padrao');
    const email = await TerminalUtil.campoRequerido('email: ', 'email@padrao.default');
    const senha = await TerminalUtil.campoRequerido('Senha: ', '123');

    const usuario: Usuario = { nome, email, senha }
    const repositorio = new RepositorioUsuarioEmMemoria();

    const provedorCripto = new SenhaCripto(); //new EspacoSenhaCripto(); //new InverterSenhaCript();
    const casoDeUso = new RegistrarUsuario(repositorio, provedorCripto);

    await casoDeUso.executar(usuario);

    TerminalUtil.sucesso('Usuario registrado com sucesso');

    await TerminalUtil.esperarEnter();

    try {
        await casoDeUso.executar(usuario)
    } catch (e: any) {

        await TerminalUtil.erro(e.message);
        await TerminalUtil.esperarEnter();
    }

}