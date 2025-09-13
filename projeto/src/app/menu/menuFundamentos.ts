import TerminalUtil from "@/util/TerminalUtil";
import { terminal } from "terminal-kit";

export default async function menuFundamentos() {
    TerminalUtil.titulo('Fundamentos');

    const resposta = await terminal.singleColumnMenu([
        '1. Poliformismo',
        '2. Voltar'
    ]).promise

    switch(resposta.selectedIndex){
        case 1:
            return        
    }

    await menuFundamentos();
}