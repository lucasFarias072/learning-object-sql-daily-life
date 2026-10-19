

import { Frame } from "../../shared/Frame"
// import { Sql } from "../../shared/Sql"

export function SubqueryWhatIsIt() {
    return (
        <>
            <div className="flex column gap-sm">

                <div id="what-is-title-subquery" className="mv-1">
                    <h2 className="as-line round-title">O que é Subconsulta?</h2>
                </div>

                <div id="what-is-body-subquery" className="flex column gap-xsm theory-layout">
                    <ul className="flex column gap-sm">
                        <li>⬩➤ É uma <Frame cmd='' label='consulta SQL completa, usada dentro de outra consulta'/>.</li>
                        <li>⬩➤ São <Frame cmd='' label='consultas aninhadas'/> (uma dentro da outra) que <Frame cmd='' label='produzem valores'/> que serão <Frame cmd='' label='usados'/> pela <Frame cmd='' label='consulta imediatamente acima'/> dela.</li>
                    </ul>
                </div>
                
            </div>                  
        </>
    )
}
