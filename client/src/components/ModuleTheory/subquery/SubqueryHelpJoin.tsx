



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
                    <p>⬩➤ Subconsultas podem ser <Frame cmd='shine i !u' label='úteis para reduzir o uso'/> do <Sql word='join'/> ➜ <Frame cmd='shine i !u' label='economizar junções'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Quando uma subconsulta pode ser viável para o JOIN?'/></p>
                    <div className="flex column gap-sm frame-indent">
                        <p className="pl-2">⬩➤ <Sql word='join'/> <Frame cmd='' label='junta tabelas'/> para <Frame cmd='' label='coletar dados emprestados'/> para <Frame cmd='' label='usá-los para resolver algo'/> <Frame cmd='shine i !u' label='e/ou'/> <Frame cmd='' label='exibir informações'/> no <Sql word='select'/>.</p>
                        <p className="pl-2">⬩➤ <Frame cmd='' label='uma tabela essencial para a resposta'/> precisar ser <Frame cmd='' label='chamada'/>, mas <Frame cmd='red i !u' label='que não precisa exibir dados'/> dessa tabela no <Sql word='select'/>.</p>
                    </div>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 1'/> ➜ a consulta pode ser <Frame cmd='' label='resolvida inteira com'/> <Sql word='join'/> ➜ <Frame cmd='red i !u' label='só que a junção poderia ser evitada'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 2'/> ➜ <Frame cmd='' label='precisa da sigla do estado do guia'/> <Frame cmd='shine i !u' label='para resolver a consulta'/>, <Frame cmd='red i !u' label='mas não será mostrado'/> no <Sql word='select'/> ➜ <Frame cmd='red i !u' label='junção pode ser evitada'/>.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example ex-subquery mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                        <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 1'/>
                        <Frame cmd='ylw p !u' label='tabela que poderia trocar join por subconsulta'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> descricao_ponto, avaliacao_guia</p>
                        <p><Sql word='from'/> passeio pass</p>
                        <p><Sql word='join'/> ponto_turistico ptur <Sql word='on'/> ptur.ponto_id = pass.ponto_fk</p>
                        <p><Sql word='join'/> <Frame cmd='ylw i !u' label='guia'/> <Sql word='on'/> guia.guia_id = pass.guia_fk</p>
                        <p><Sql word='where'/> sigla_estado = 'rj';</p>
                    </div>
                </div>
                
                <div className="frame-example ex-subquery mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                        <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 2'/>
                        <Frame cmd='blue p !u' label='onde o join foi evitado'/>
                        <Frame cmd='d-blue p !u' label='subconsulta ao invés do join'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        
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
