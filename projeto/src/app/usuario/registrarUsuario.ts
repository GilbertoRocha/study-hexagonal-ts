import Usuario from "@/core/usuario/model/Usuario";
import TerminalUtil from "../util/TerminalUtil";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";

export default async function registrarUsuario() {
    TerminalUtil.titulo('Registrar Usuario');

    const nome = await TerminalUtil.campoRequerido('Nome: ', 'Nome teste Padrao');
    const email = await TerminalUtil.campoRequerido('email: ', 'email@padrao.default');
    const senha = await TerminalUtil.campoRequerido('Senha: ', '123');

    const usuario: Usuario = {nome, email, senha}

    await new RegistrarUsuario().executar(usuario);

    TerminalUtil.sucesso('Usuario registrado com sucesso');

    await TerminalUtil.esperarEnter();

    try {
        await new RegistrarUsuario().executar(usuario)
    } catch (e: any) {

        await TerminalUtil.erro(e.message);
        await TerminalUtil.esperarEnter();
    }

}