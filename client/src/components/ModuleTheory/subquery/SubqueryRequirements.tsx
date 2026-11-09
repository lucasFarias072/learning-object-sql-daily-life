

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
                        <li>⬩➤ De <Frame cmd='' label='pelo menos duas tabelas'/>:</li>
                        <li className="pl-2">⬩➤ <Frame cmd='shine i !u' label='tabela inicial sem dados filtrados'/> ➜ <Frame cmd='shine i !u' label='tabelas intermediárias'/></li>
                        <li className="pl-2">⬩➤ <Frame cmd='shine i !u' label='tabela inicial sem dados filtrados'/> ➜ <Frame cmd='shine i !u' label='tabela externa'/> (no <Sql word='select'/>) que <Frame cmd='' label='recebe o resultado'/> da subconsulta imediatamente abaixo.</li>
                        <li className="pl-2">⬩➤ <Frame cmd='shine i !u' label='tabelas intermediárias'/> ➜ <Frame cmd='shine i !u' label='tabela interna'/> que <Frame cmd='' label='gera resultado filtrado'/> para a consulta imediatamente acima, até chegar à consulta externa.</li>
                        <li>⬩➤ <Frame cmd='' label='Chaves compartilhadas entre as tabelas relacionadas'/>, para acessar tabelas externas e conseguir responder ao que a consulta externa pede.</li>
                        <li>⬩➤ <Frame cmd='' label='Cláusulas'/> <Sql word='where'/>, <Sql word='in'/> ou <Sql word='='/> ➜ operador de igualdade.</li>
                    </ul>
                </div>

            </div>
        </>
    )
}
