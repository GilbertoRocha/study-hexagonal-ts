import TerminalUtil from "@/app/util/TerminalUtil";
import { terminal } from "terminal-kit";
import polimorfismo from "../fundamentos/polimorfismo";
import dip from "../fundamentos/dip";

export default async function menuFundamentos() {
    TerminalUtil.titulo('Fundamentos');

    const [indice] = await TerminalUtil.menu([
        '1. Poliformismo',
        '2. DIP',
        'Voltar'
    ]);

    switch(indice){
        case 0: await polimorfismo(); break;
        case 1: await dip(); break;
        case 2:
            return        
    }

    await menuFundamentos();
}