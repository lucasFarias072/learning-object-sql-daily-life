

import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function CaseWhenWhatIsIt() {
    return (
        <>
            <div className="flex column gap-sm">
                
                <div id="what-is-title-casewhen" className="mv-1">
                    <h2 className="as-line round-title">O que é 'Case When'?</h2>
                </div>

                <div id="what-is-body-casewhen" className="flex column gap-xsm theory-layout">
                    <ul className="flex column gap-sm">
                        <li>⬩➤ É uma <Frame cmd='' label='expressão condicional'/> dentro do <Sql word='sql'/>.</li>
                        <li>⬩➤ Representa as expressões "se/senão" <Frame cmd='' label='usadas para gerar valores customizados'/> com base em condições montadas na sua estrutura.</li>
                        <li>⬩➤ Os <Frame cmd='' label='valores gerados nas condições'/>, passam a <Frame cmd='' label='existir temporariamente'/> de uma <Frame cmd='' label='coluna customizada'/>.</li>
                        <li>⬩➤ Essa coluna só existe em memória, ela <Frame cmd='' label='não é parte fixa gravada da tabela'/>, é uma <Frame cmd='' label='conveniência temporária'/>.</li>
                    </ul>
                </div>  

            </div>
        </>
    )
}
