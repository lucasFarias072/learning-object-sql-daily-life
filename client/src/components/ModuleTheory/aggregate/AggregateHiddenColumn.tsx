

import { Hint } from "../../shared/Hint"
import { Sql } from "../../shared/Sql"
import { Frame } from "../../shared/Frame"

export function AggregateHiddenColumn() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="case-hidden-column-title-aggregate" className="mv-1">
                    <h2 className="case-header">Caso: coluna ausente</h2>
                </div>

                <div id="case-hidden-column-body-aggregate" className="flex column gap-sm theory-layout">
                    <p>⬩➤ <Frame cmd='' label='Quem faz o agrupamento'/> é a cláusula <Sql word='group by'/>, o <Sql word='select'/> <Frame cmd='red i !u' label='não tem a ver com isso'/>.</p>
                    <p>⬩➤ Portanto, a cláusula <Sql word='select'/> serve para <Frame cmd='' label='dar visibilidade'/> e <Frame cmd='' label='coerência'/> ao que foi pedido numa consulta.</p>
                    <p>⬩➤ Para <Frame cmd='' label='quem monta'/> a consulta, <Frame cmd='' label='está evidente'/> quem são <Frame cmd='' label='os campos agrupados'/>.</p>
                    <p>⬩➤ Para <Frame cmd='' label='quem visualiza'/> o resultado, <Frame cmd='' label='não está claro'/>.</p>
                    <p>⬩➤ A <Frame cmd='' label='omissão dos campos'/> no <Sql word='select'/> aqui serve de <Frame cmd='' label='exemplo'/> para saber que <Frame cmd='' label='isso é possível'/>.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example ex-aggregate mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <h3 className="shine">Legenda ⬩➤</h3>
                        <Frame cmd='ylw p !u' label='palavra não referenciada no select'/> 
                        <Frame cmd='blue p !u' label='significado (1 e 2)'/>  
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> <Frame cmd='ylw i !u' label=''/> <Sql word='count(*)'/> <Sql word='as'/> <Frame cmd='blue i !u' label='qtd_avistamentos'/>, <Sql word='sum'/>(hora_visto) <Sql word='as'/> <Frame cmd='blue i !u' label='soma_horarios'/></p>
                        <p><Sql word='from'/> avistamento</p>
                        <p><Sql word='group by'/> <Frame cmd='ylw i !u' label='local_tipo_visto_fk'/>;</p>
                    </div>
                </div>

            </div>
        </>
    )
}
