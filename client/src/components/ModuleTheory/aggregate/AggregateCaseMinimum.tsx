

import { Hint } from "../../shared/Hint"
import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function AggregateCaseMinimum() {
    return (
        <>
        <div className="flex column gap-sm case">
            
            <div id="case-minimum-title-aggregate" className="mv-1">
                <h2 className="case-header">Caso mínimo</h2>
            </div>

            <div id="case-minimum-body-aggregate" className="flex column gap-sm theory-layout">
                <p>⬩➤ O caso mínimo <Frame cmd='' label='se resume'/> basicamente apenas a <Frame cmd='' label='aplicação de função agregadora'/> de <Frame cmd='' label='forma direta'/>.</p>
                <p>⬩➤ A <Frame cmd='' label='lógica'/> do <Frame cmd='d-blue i !u' label='dicionário'/> ➜ <Frame cmd='ylw i !u' label='seção/palavra'/> ➜ <Frame cmd='blue i !u' label='significado'/> <Frame cmd='red i !u' label='não se aplica nesse caso'/>.</p>
                <p>⬩➤ A <Frame cmd='ylw i !u' label='palavra'/>, que é a <Frame cmd='' label='coluna passada'/> na cláusula <Sql word='group by'/>, <Frame cmd='red i !u' label='não existe'/>.</p>
                <p>⬩➤ O caso mínimo <Frame cmd='' label='é sobre gerar um dado em linha'/> ➜ <Frame cmd='red i !u' label='grupos não serão criados'/>.</p>
                {/* <p>⬩➤ Funções agregadoras podem vir <Frame cmd='' label='sem'/> <Sql word='group by'/>.</p>
                <p>⬩➤ Sabe-se que <Frame cmd='' label='essa ausência é intencional'/> para <Frame cmd='' label='gerar um dado totalizado'/>.</p>
                <p><span className="shine upper">⬩➤ count(*)</span> conta todas as linhas <Frame cmd='' label='da tabela'/> (incluindo as nulas).</p>
                <p><span className="shine upper">⬩➤ count(campo)</span> conta todas as linhas <Frame cmd='' label='de uma coluna'/> (sem as nulas).</p>
                <p><span className="shine upper">⬩➤ max(campo)</span> obtém maior valor de um campo, seja numérico, de tamanho do texto, se for datas, pega a data menos atual.</p>
                <p><span className="shine upper">⬩➤ min(campo)</span> obtém menor valor de um campo, seja numérico, de tamanho do texto, se for datas, pega a data mais atual.</p>
                <p><span className="shine upper">⬩➤ avg(campo)</span> obtém a média total de algum campo numérico agregado.</p>
                <p><span className="shine upper">⬩➤ sum(campo)</span> obtém a soma total de algum campo numérico agregado.</p> */}
                <Hint/>
            </div>
            
            <div className="frame-example ex-aggregate mt-1">
                <div className="flex row go-left gap-sm subtitles">
                    <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                    <Frame cmd='ylw p !u' label='função agregadora'/>
                    <Frame cmd='blue p !u' label='coluna de onde os valores são extraídos'/>
                </div>

                <div className="sql-code flex column gap-sm">
                    <p><Sql word='select'/> <Frame cmd='ylw i u' label='max'/><Frame cmd='blue i u' label='(apelido)'/> <Sql word='as'/> ordem_alfabetica_maior <Sql word='from'/> sinuquista;</p>
                </div>
                
                <div className="sql-code flex column gap-sm">
                    <p><Sql word='select'/> <Frame cmd='ylw i u' label='min'/><Frame cmd='blue i u' label='(apelido)'/> <Sql word='as'/> ordem_alfabetica_menor <Sql word='from'/> sinuquista;</p>
                </div>
                
                <div className="sql-code flex column gap-sm">
                    <p><Sql word='select'/> <Frame cmd='ylw i u' label='count(*)'/> <Sql word='as'/> todas_partidas_linhas <Sql word='from'/> partida_sinuca;</p>
                </div>
                
                <div className="sql-code flex column gap-sm">
                    <p><Sql word='select'/> <Frame cmd='ylw i u' label='avg'/><Frame cmd='blue i u' label='(duracao_seg)'/> <Sql word='as'/> media_duracao_partida <Sql word='from'/> partida_sinuca;</p>
                </div>
                
                <div className="sql-code flex column gap-sm">
                    <p><Sql word='select'/> <Frame cmd='ylw i u' label='sum'/><Frame cmd='blue i u' label='(duracao_seg)'/> <Sql word='as'/> segundos_acumulados_partidas <Sql word='from'/> partida_sinuca;</p>
                </div>
                
                <div className="sql-code flex column gap-sm">
                    <p><Sql word='select'/> <Frame cmd='ylw i u' label='count(*)'/> <Sql word='as'/> quartos_com_mes_lembrado, <Frame cmd='ylw i u' label='count'/><Frame cmd='blue i u' label='(mes_adesao)'/> <Sql word='as'/> quartos_sem_mes_lembrado <Sql word='from'/> quarto_relatorio;</p>
                </div>
            </div>
            
        </div>
        </>
    )
}
