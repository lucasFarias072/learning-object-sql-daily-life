

import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function CaseWhenHaveInMind() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="have-in-mind-title-casewhen" className="mv-1">
                    <h2 className="title-what-is as-line round-title">Tenha em mente!</h2>
                </div>

                <div id="have-in-mind-body-casewhen" className="flex column gap-xsm theory-layout">
                    <ul className="flex column gap-sm">
                        <li>⬩➤ Seu <Frame cmd='shine i !u' label='uso é bem mais comum'/> ao <Sql word='select'/>, para <Frame cmd='' label='rotular coisas'/> que <Frame cmd='red i !u' label='não estão claras para todos'/>.</li>
                        <li>⬩➤ Permite <Frame cmd='shine i !u' label='configurar ordenação customizada'/> de maneira <Frame cmd='' label='que o'/> <Sql word='order by'/> <Frame cmd='' label='não faz nativamente'/>.</li>
                        <li>⬩➤ Oferece <Frame cmd='shine i !u' label='agrupamentos com dados customizados'/> ao <Sql word='group by'/>, <Frame cmd='' label='derivados'/> de colunas com <Frame cmd='' label='dados reais'/>.</li>
                        <li>⬩➤ <Frame cmd='' label='Se quiser'/> que colunas tenham <Frame cmd='' label='valores'/> customizados <Frame cmd='' label='nulos'/>, <Frame cmd='red i !u' label='retire'/> o <Sql word='else'/>, pois é opcional.</li>
                        <li>⬩➤ A cláusulo de filtro <Sql word='where'/> funciona com <Sql word='case when'/> mas é <Frame cmd='red i !u' label='complicado e contraintuitivo'/>.</li>
                    </ul>
                </div>

            </div>
        </>
    )
}
