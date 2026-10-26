

import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function AggregateUtility() {
    return (
        <>
            <div className="flex column gap-sm">

                <div id="util-title-aggregate" className="mv-1">
                    <h2 className="title-what-is as-line round-title">Qual a utilidade?</h2>
                </div>

                <div id="util-body-aggregate" className="flex column gap-xsm theory-layout">
                    <ul className="flex column gap-sm">
                        <li>⬩➤ <Frame cmd='' label='Responder perguntas' /> de <Frame cmd='shine i !u' label='cunho estatístico'/>: quantidade de registros, total, médio, maior, menor.</li>
                        <li>⬩➤ <Frame cmd='' label='Gerar'/> relatórios para dados agrupados, <Frame cmd='red i !u' label='evita'/> a necessidade de <Frame cmd='' label='contar ou analisar manualmente cada grupo'/> de registros.</li>
                        <li>⬩➤ <Frame cmd='' label='Individualmente'/>, elas <Frame cmd='red i !u' label='são incompletas'/>, <Frame cmd='' label='respondem à uma coluna'/> e <Frame cmd='' label='retornam um resultado'/>.</li>
                        <li>⬩➤ Sua <Frame cmd='shine i !u' label='união com'/> <Sql word='group by'/>, permite <Frame cmd='shine i !u' label='gerar resultados agrupados'/> e aplicar resultados estatísticos em todos, ao mesmo tempo.</li>
                        <li><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 1'/> e <Frame cmd='d-cyan i !u' label='⬩➤ Ex. 2'/> mostram uma <Frame cmd='' label='busca manual e individual'/>, <Frame cmd='red i !u' label='sem a ajuda'/> do <Sql word='group by'/>.</li>
                        <li><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 3'/> <Frame cmd='' label='agrupo tudo de uma só vez'/> <Frame cmd='shine i !u' label='por causa do'/> <Sql word='group by'/>.</li>
                    </ul>
                </div>

                <div className="frame-example mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <div className="flex column gap-xsm">
                            <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                        </div>
                        
                        <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 1'/>
                        <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 2'/>
                        <Frame cmd='ylw p !u' label='busca manual individual'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> <Sql word='count(*)'/> <Sql word='from'/> dono_caracteristica</p>
                        <p><Sql word='where'/> <Frame cmd='ylw i !u' label='dono_fk = 2'/>;</p>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> <Sql word='count(*)'/> <Sql word='from'/> dono_caracteristica</p>
                        <p><Sql word='where'/> <Frame cmd='ylw i !u' label='dono_fk = 5'/>;</p>
                    </div>
                </div>
                
                <div className="frame-example mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                        <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 3'/>
                        <Frame cmd='ylw p !u' label='busca automática agrupada ➜ todos os valores de uma vez'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        
                        <p><Sql word='select'/> dono_fk <Sql word='count(*)'/> <Sql word='from'/> dono_caracteristica</p>
                        <p><Sql word='group by'/> <Frame cmd='ylw i !u' label='dono_fk'/>;</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}
