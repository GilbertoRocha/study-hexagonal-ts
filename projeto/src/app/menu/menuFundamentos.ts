import TerminalUtil from "@/app/util/TerminalUtil";
import { terminal } from "terminal-kit";
import polimorfismo from "../fundamentos/polimorfismo";

export default async function menuFundamentos() {
    TerminalUtil.titulo('Fundamentos');

    const [indice] = await TerminalUtil.menu([
        '1. Poliformismo',
        '2. Voltar'
    ]);

    switch(indice){
        case 0: await polimorfismo(); break;
        case 1:
            return        
    }

    await menuFundamentos();
}