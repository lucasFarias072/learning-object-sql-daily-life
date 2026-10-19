

import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function JoinRequirements() {
    return (
        <>
            <div className="flex column gap-sm">

                <div id="req-title-join" className="mv-1">
                    <h2 className="title-what-is as-line round-title">Do que precisa?</h2>
                </div>

                <div id="req-body-join" className="flex column gap-xsm theory-layout">
                    <ul className="flex column gap-sm">
                        <li>⬩➤ <Frame cmd='' label='Duas ou mais tabelas'/>, para que <Frame cmd='' label='sejam juntadas'/> em busca de dados.</li>
                        <li>⬩➤ Pelo menos um <Frame cmd='' label='dado único'/> que exista <Frame cmd='' label='entre tabelas'/> <Frame cmd='shine i !u' label='[copia] ➜ [cola]'/>.</li>
                        <li>⬩➤ A <Frame cmd='' label='cláusula'/> <Sql word='join'/> usa <Sql word='on'/> como <Frame cmd='shine i !u' label='ponto de junção'/> entre as tabelas.</li>
                    </ul>
                </div>

            </div>
        </>
    )
}
