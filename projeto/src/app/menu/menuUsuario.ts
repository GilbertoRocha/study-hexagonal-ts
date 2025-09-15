import TerminalUtil from "@/app/util/TerminalUtil";
import registrarUsuario from "../usuario/registrarUsuario";

export default async function menuUsuario() {
    TerminalUtil.titulo('usuario');

    const [indice] = await TerminalUtil.menu([
        '1. Registrar',        
        'Voltar'
    ]);

    switch(indice){
        case 0: await registrarUsuario(); break;
        case 1:
            return        
    }

    await menuUsuario();
}