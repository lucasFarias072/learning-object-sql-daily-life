

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
                        <li>⬩➤ Seu uso é bem <Frame cmd='' label='mais comum'/> ao <Sql word='select'/>, para <Frame cmd='' label='rotular coisas que não são claras'/> para todos.</li>
                        <li>⬩➤ Usado na <Frame cmd='' label='ordenação'/> de maneira <Frame cmd='' label='que o'/> <Sql word='order by'/> <Frame cmd='' label='não faz nativamente'/>.</li>
                        <li>⬩➤ Oferece <Frame cmd='' label='agrupamentos'/> ao <Sql word='group by'/> com <Frame cmd='' label='dados customizados'/>/derivados de colunas com dados reais.</li>
                        <li>⬩➤ Pode ser usado junto ao filtro where, mas é complicado e contraintuitivo.</li>
                        <li>⬩➤ <Frame cmd='' label='Se quiser'/> que colunas tenham <Frame cmd='' label='valores'/> customizados <Frame cmd='' label='nulos'/>, <Frame cmd='' label='retire'/> o <Sql word='else'/>, pois é opcional.</li>
                    </ul>
                </div>

            </div>
        </>
    )
}
