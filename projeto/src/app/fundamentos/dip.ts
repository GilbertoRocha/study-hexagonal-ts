import Fusca from "@/core/fundamentos/Fusca";
import TerminalUtil from "../util/TerminalUtil";
import corrida from "./corrida";
import Ferrari from "@/core/fundamentos/Ferrari";
import Civic from "@/core/fundamentos/Civic";
import { terminal } from "terminal-kit";

export default async function dip () {
    TerminalUtil.titulo('DIP');

    const [tipo] = await TerminalUtil.selecao('Qual carro deseja usar?', [
        'Fusca',
        'Civic',
        'Ferrari'
    ]);
    let carro;
    
    switch (tipo) {
        case 0: carro = new Fusca(); break;
        case 1: carro = new Civic(); break;
        default: carro = new Ferrari(); break;
    }

    corrida(carro, terminal.red);
    await TerminalUtil.esperarEnter();
}