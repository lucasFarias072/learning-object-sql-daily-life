

import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function CaseWhenRequirements() {
    return (
        <>
            <div className="flex column gap-sm">

                <div id="req-title-casewhen" className="mv-1">
                    <h2 className="as-line round-title">Do que precisa?</h2>
                </div>

                <div id="req-body-casewhen" className="flex column gap-xsm theory-layout">
                    <ul className="flex column gap-sm">
                        <li>⬩➤ <Frame cmd='' label='Normalmente (mais comum)'/>, <Frame cmd='' label='existir na linha'/> do <Sql word='select'/>, <Frame cmd='shine i !u' label='caso queira exibir'/>.</li>
                        <li>⬩➤ Cláusulas <Sql word='when'/> e <Sql word='then'/>, já <Sql word='else'/> <Frame cmd='' label='é opcional, mas é recomendada'/>.</li>
                        <li>⬩➤ <Frame cmd='' label='Pelo menos um campo'/> de uma tabela, <Frame cmd='' label='pode ser mais de um'/>, mas a lógica pode se tornar mais complexa.</li>
                        <li>⬩➤ Uso de <Frame cmd='' label='operador condicional'/>, por exemplo: <Sql word='='/>, <Sql word='<'/>, <Sql word='<>'/>, <Sql word='like'/>, <Sql word='in'/>, <Frame cmd='' label='dentre outros'/>.</li>
                        <li>⬩➤ <Frame cmd='' label='Ter um alias/apelido'/> para referenciar a <Frame cmd='' label='coluna customizada'/> é <Frame cmd='shine i !u' label='recomendado'/> por <Frame cmd='' label='legibilidade'/> e <Frame cmd='' label='evitar repetição'/>.</li>
                        <li>⬩➤ Os <Frame cmd='' label='exemplos nos casos de uso'/> cobrirão formas de usar o <Sql word='case when'/>.</li>
                    </ul>
                </div>

            </div>
        </>
    )
}
