import ProvedorCriptografia from "../../core/usuario/service/ProvedorCriptografia";

export default class InverterSenhaCript implements ProvedorCriptografia {
    criptografar(senha: string): string{
        return senha.split('').reverse().join('');
    }
}