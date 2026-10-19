

import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function JoinRepresentation() {
    return (
        <>
            <div className="flex column gap-sm">

                <div id="rep-title-join" className="mv-1">
                    <h2 className="title-what-is as-line round-title">Representação</h2>
                </div>

                <div id="rep-body-join" className="flex column gap-xsm theory-layout">
                    <ul className="flex column gap-sm">
                        <li>⬩➤ <Frame cmd='' label='Imagine'/> uma <Frame cmd='shine i !u' label='folha de papel'/> como se fosse uma <Frame cmd='' label='tabela'/>.</li>
                        <li>⬩➤ <Frame cmd='' label='Imagine'/> que existam <Frame cmd='' label='traços verticais'/> distribuídos nessa folha.</li>
                        <li>⬩➤ <Frame cmd='' label='Cada área tracejada'/> é uma <Frame cmd='' label='coluna'/> dessa tabela.</li>
                        <li>⬩➤ Para <Frame cmd='' label='realizar'/> um <Sql word='join'/>, imagine uma <Frame cmd='' label='colagem horizontal'/> entre <Frame cmd='' label='folhas de papel'/>.</li>
                        <li>⬩➤ A <Frame cmd='' label='cola'/> que juntou as duas folhas é uma <Frame cmd='' label='coluna da folha 1'/> que se <Frame cmd='' label='repete na folha 2'/>.</li>
                    </ul>
                </div>

            </div>
        </>
    )
}
