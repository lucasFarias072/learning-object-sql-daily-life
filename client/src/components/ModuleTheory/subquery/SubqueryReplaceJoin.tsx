



import { Hint } from "../../shared/Hint"
import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function SubqueryReplaceJoin() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="case-join-avoider-title-subquery" className="mv-1">
                    <h2 className="case-header">Caso: substituto do join</h2>
                </div>

                <div id="case-join-avoider-body-subquery" className="flex column gap-sm theory-layout">
                    <p>⬩➤ Subconsultas podem ser <Frame cmd='red i !u' label='úteis para evitar'/> o uso do <Sql word='join'/>.</p>
                    <p>⬩➤ O <Sql word='join'/> é majoritariamente usado para buscar <Frame cmd='' label='dados de outros locais'/>, para <Frame cmd='' label='resolver uma consulta'/>.</p>
                    <p>⬩➤ A <Frame cmd='shine i !u' label='subconsulta'/> faz a <Frame cmd='' label='mesma coisa'/>.</p>
                    <p>⬩➤ Só que o <Sql word='join'/> <Frame cmd='' label='também é usado'/> para <Frame cmd='' label='exibir dados de mais de uma tabela'/>, com o <Frame cmd='red i !u' label='custo de juntá-las'/>.</p>
                    <p>⬩➤ Na <Frame cmd='shine i !u' label='subconsulta'/>, é <Frame cmd='' label='possível eliminar esse custo'/> de juntar e usar apenas para resolver.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example ex-aggregate mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <h3 className="shine">Legenda ⬩➤</h3>
                        <Frame cmd='ylw p !u' label='subconsulta que substituiu join'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> descricao_fruta <Sql word='from'/> frutaria_produto</p>
                        <p><Sql word='where'/> frutaria_produto_id <Sql word='in'/> <Frame cmd='' label='('/></p>
                        <p className="pl-2"><Frame cmd='ylw i u' label='select'/> frutaria_produto_fk <Sql word='from'/> estoque</p>
                        <p className="pl-2"><Sql word='where'/> qtd &gt; 0</p>
                        <p><Frame cmd='' label=')'/>;</p> 
                    </div>
                </div>
    
            </div>
        </>
    )
}
