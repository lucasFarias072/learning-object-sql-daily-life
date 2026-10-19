



import { Hint } from "../../shared/Hint"
import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function SubqueryHelpJoin() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="case-join-helper-title-subquery" className="mv-1">
                    <h2 className="case-header">Caso: ajudante do join</h2>
                </div>

                <div id="case-join-helper-body-subquery" className="flex column gap-sm theory-layout">
                    <p>⬩➤ Subconsultas podem ser <Frame cmd='shine i !u' label='úteis para reduzir o uso'/> do <Sql word='join'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 1'/> a consulta pode ser <Frame cmd='' label='resolvida inteira com'/> <Sql word='join'/>.</p>
                    <p>⬩➤ Mas a <Frame cmd='shine i !u' label='subconsulta'/> pode <Frame cmd='' label='ser chamada'/> nesse cenário para <Frame cmd='shine i !u' label='economizar junções'/></p>
                    <p>⬩➤ <Sql word='join'/> <Frame cmd='' label='junta tabelas'/> que precisam de <Frame cmd='' label='dados emprestados'/> para <Frame cmd='' label='usá-los'/> no <Sql word='select'/> <Frame cmd='' label='e/ou resolver algo'/> na consulta (ex.: uso em condições).</p>
                    <p><Frame cmd='shine i !u' label='⬩➤ Obs.'/> Se <Frame cmd='' label='uma tabela'/> precisar ser <Frame cmd='' label='chamada'/> para <Frame cmd='' label='resolver uma consulta'/>, mas <Frame cmd='' label='sem exibir dados'/> dessa tabela no <Sql word='select'/>: <Frame cmd='shine i !u' label='subconsulta é viável'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 2'/> <Frame cmd='' label='precisa da sigla'/> do estado do guia <Frame cmd='shine i !u' label='para resolver a consulta'/>, <Frame cmd='red i !u' label='mas não será mostrado'/> nada dele no <Sql word='select'/>.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example ex-subquery mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <h3 className="shine">Legenda ⬩➤</h3>
                        <Frame cmd='ylw p !u' label='tabela que poderia trocar join por subconsulta'/>
                        <Frame cmd='blue p !u' label='onde o join foi evitado'/>
                        <Frame cmd='d-blue p !u' label='subconsulta ao invés do join'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 1'/></p>
                        <p><Sql word='select'/> descricao_ponto, avaliacao_guia</p>
                        <p><Sql word='from'/> passeio pass</p>
                        <p><Sql word='join'/> ponto_turistico ptur <Sql word='on'/> ptur.ponto_id = pass.ponto_fk</p>
                        <p><Sql word='join'/> <Frame cmd='ylw i !u' label='guia'/> <Sql word='on'/> guia.guia_id = pass.guia_fk</p>
                        <p><Sql word='where'/> sigla_estado = 'rj';</p>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 2'/></p>
                        <p><Sql word='select'/> descricao_ponto, avaliacao_guia</p>
                        <p><Sql word='from'/> passeio pass</p>
                        <p><Sql word='join'/> ponto_turistico ptur <Sql word='on'/> ptur.ponto_id = pass.ponto_fk</p>
                        <p><Frame cmd='blue i u' label='where'/> guia_fk <Sql word='in'/> <Frame cmd='blue i !u' label='('/></p>
                        <p className="pl-2"><Frame cmd='d-blue i u' label='select'/> guia_id <Sql word='from'/> guia <Sql word='where'/> sigla_estado = 'rj'</p>
                        <p><Frame cmd='blue i !u' label=')'/>;</p>
                    </div>

                </div>
    
            </div>
        </>
    )
}
