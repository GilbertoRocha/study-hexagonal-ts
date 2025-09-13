import TerminalUtil from "../util/TerminalUtil";

export default async function polimorfismo() {
    TerminalUtil.titulo('Polimorfismo');

    const tipoCarro = await TerminalUtil.selecao('Escolha o tipo do carro:', ['Ferrai', 'Fusca']);
    
    while (true) {
        const continuar = await TerminalUtil.confirmacao('Deseja continuar?');
        TerminalUtil.limpar();
        if(!continuar) break;
    }

}