

import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function CaseWhenRepresentation() {
    return (
        <>
            <div className="flex column gap-sm">
                
                <div id="rep-title-casewhen" className="mv-1">
                    <h2 className="title-what-is as-line round-title">Representação</h2>
                </div>

                <div id="rep-body-casewhen" className="flex column gap-xsm theory-layout">
                    <ul className="flex column gap-sm">
                        <li>⬩➤ Imagine o contexto de <Frame cmd='shine i !u' label='descendência'/>.</li>
                        <li>⬩➤ Uma descendência é quando se <Frame cmd='' label='herda algo de outra fonte'/>.</li>
                        <li>⬩➤ O <Frame cmd='u' label='case when'/> <Frame cmd='' label='gera coluna customizada'/> com <Frame cmd='' label='valores configurados'/> <Frame cmd='' label='baseados'/> em <Frame cmd='' label='condições'/>.</li>
                        <li>⬩➤ Essas colunas são <Frame cmd='' label='configuradas junto'/> no <Sql word='select'/> e <Frame cmd='' label='usáveis comumente em'/> locais como: <Sql word='group by'/>, <Sql word='order by'/></li>
                        <li>⬩➤ Os <Frame cmd='' label='dados reais'/> de colunas das tabelas <Frame cmd='' label='são usados como base'/>.</li>
                        <li>⬩➤ O <Sql word='case when'/> <Frame cmd='' label='gera descendência'/> a partir <Frame cmd='' label='de algo que já existe'/>.</li>
                        <li>⬩➤ A <Frame cmd='shine i !u' label='descendência'/> ➜ coluna customizada + valores definidos nas condições.</li>
                    </ul>
                </div>

            </div>
        </>
    )
}
