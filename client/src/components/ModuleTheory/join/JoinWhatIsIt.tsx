

import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function JoinWhatIsIt() {
    return (
        <>
            <div className="flex column gap-sm case">
                
                <div id="what-is-title-join" className="mv-1">
                    <h2 className="as-line round-title">O que é JOIN?</h2>
                </div>

                <div id="what-is-body-join" className="flex column gap-xsm theory-layout">
                    <ul className="flex column gap-sm">
                        <li>⬩➤ É uma <Frame cmd='' label='cláusula'/> <Frame cmd='u' label='sql' /> que <Frame cmd='' label='junta' />, numa única consulta, <Frame cmd='' label='colunas' /> que vêm de <Frame cmd='' label='tabelas diferentes' />.</li>
                        <li>⬩➤ Uma tabela sozinha só enxerga suas próprias colunas.</li>
                        <li>⬩➤ Quando a <Frame cmd='' label='informação' /> que se precisa está <Frame cmd='' label='espalhada' /> em mais de uma tabela, o <Sql word='join'/> <Frame cmd='shine i !u' label='une todas' /> essas tabelas <Frame cmd='' label='numa só'/>.</li>
                    </ul>
                </div>

            </div>
        </>
    )
}
