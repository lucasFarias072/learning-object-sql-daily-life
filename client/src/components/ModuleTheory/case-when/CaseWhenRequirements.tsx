

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
                        <li>⬩➤ Cláusulas <Sql word='when'/> e <Sql word='then'/>, já <Sql word='else'/> <Frame cmd='shine i !u' label='é opcional, mas é recomendado'/>.</li>
                        <li>⬩➤ <Sql word='when'/> ➜ inicia uma condição, precisa de pelo menos uma coluna e um valor definido.</li>
                        <li>⬩➤ <Sql word='then'/> ➜ um valor dado para uma condição que for satisfeita.</li>
                        <li>⬩➤ <Sql word='else'/> ➜ último valor possível dentre as condições definidas.</li>
                        <li>⬩➤ <Sql word='end as'/> <b>+ apelido</b> ➜ para <Frame cmd='' label='dar um nome da coluna gerada'/> pelo <Sql word='case'/>.</li>
                        <li>⬩➤ <Frame cmd='shine i !u' label='Operadores condicionais'/>, por exemplo: <Sql word='='/>, <Sql word='<'/>, <Sql word='<>'/>, <Sql word='like'/>, <Sql word='in'/>, <Frame cmd='' label='dentre outros'/>.</li>
                        <li>⬩➤ A <Frame cmd='' label='depender'/> do <Sql word='sgbd'/> que estiver sendo usado:</li>
                        <div className="flex column gap-sm frame-indent">
                            <li className="pl-2">⬩➤ <Frame cmd='red i !u' label='Quando o SGBD não permite'/> ➜ <Frame cmd='' label='alias pode ser criado'/> ➜ <Frame cmd='red i !u' label='não pode ser passado para outras cláusulas'/> ➜ <Frame cmd='shine i !u' label='apenas legibilidade'/></li>
                            <li className="pl-2">⬩➤ <Frame cmd='shine i !u' label='Quando o SGBD permite'/> ➜ <Frame cmd='' label='alias pode ser criado'/> ➜ <Frame cmd='shine i !u' label='pode ser passado para outras cláusulas'/> ➜ <Frame cmd='shine i !u' label='legibilidade'/> ➜ <Frame cmd='shine i !u' label='repasse'/> ➜ ex. ➜ <Sql word='group by'/>.</li>
                        </div>
                        <li>⬩➤ Os <Frame cmd='' label='exemplos nos casos de uso'/> cobrirão <Frame cmd='' label='formas de usar'/> o <Sql word='case when'/>.</li>
                    </ul>
                </div>

            </div>
        </>
    )
}
