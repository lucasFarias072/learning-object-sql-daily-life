

import { Sql } from "../../shared/Sql"
import { Frame } from "../../shared/Frame"

export function SubqueryRequirements() {
    return (
        <>
            <div className="flex column gap-sm">

                <div id="red-title-subquery" className="mv-1">
                    <h2 className="title-what-is as-line round-title">Do que precisa?</h2>
                </div>

                <div id="req-body-subquery" className="flex column gap-xsm theory-layout">
                    <ul className="flex column gap-sm">
                        <li>⬩➤ De <Frame cmd='' label='pelo menos duas tabelas'/>: <Frame cmd='shine i !u' label='tabela inicial sem dados filtrados'/> (recebe o resultado dos filtros), <Frame cmd='shine i !u' label='tabelas intermediárias'/> (gera resultado filtrado).</li>
                        <li>⬩➤ <Frame cmd='' label='Chaves compartilhadas entre as tabelas relacionadas'/>, para acessar tabelas externas e conseguir responder ao que a consulta externa pede.</li>
                        <li>⬩➤ <Frame cmd='' label='Cláusulas'/> <Sql word='where'/>, <Sql word='in'/> ou o operador de igualdade <Sql word='='/>.</li>
                    </ul>
                </div>

            </div>
        </>
    )
}
