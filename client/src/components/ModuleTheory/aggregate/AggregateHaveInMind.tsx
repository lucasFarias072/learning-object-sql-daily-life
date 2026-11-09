

import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function AggregateHaveInMind() {
    return (
        <>
        <div className="flex column gap-sm">

                <div id="have-in-mind-title-aggregate" className="mv-1">
                    <h2 className="as-line round-title">Tenha em mente!</h2>
                </div>

                <div id="have-in-mind-body-aggregate" className="flex column gap-xsm theory-layout">
                    <ul className="flex column gap-sm">
                        {/* <li>⬩➤ <Frame cmd='u' label='group by'/> trabalha com um <Frame cmd='ui' label='and'/> <Frame cmd='' label='implícito'/>, quanto mais colunas não agregadas, menor o agrupamento se torna.</li> */}
                        <li>⬩➤ As <Frame cmd='shine i !u' label='funções agregadoras'/> <Frame cmd='' label='fazem cálculos'/> para trazer um resultado (sem <Sql word='group by'/>) ou atribuir múltiplos resultados a grupos de dados (com <Sql word='group by'/>).</li>
                        <li>⬩➤ <Sql word='group by'/> <Frame cmd='shine i !u' label='expande a aplicabilidade das funções agregadoras'/>, elas passam a <Frame cmd='shine i !u' label='aplicar cálculos'/> <Frame cmd='' label='em grupos de dados originados de coluna(s) inteira(s)'/>.</li>
                        <li>⬩➤ <Sql word='group by'/> <Frame cmd='red i !u' label='recebe colunas diferentes = rótulo'/> <Frame cmd='shine i !u' label='das colunas passadas à função agregadora = dado estatístico'/>, seja ela: <Sql word='avg'/>, <Sql word='max'/>, <Sql word='min'/>, <Sql word='sum'/>.</li>
                        {/* <li>⬩➤ (editar) Uma coluna usada <Frame cmd='' label='fora da'/> função agregadora <Frame cmd='ui' label='select/having'/> <Frame cmd='' label='precisa'/> estar no <Frame cmd='u' label='group by'/>.</li> */}
                        {/* <li>⬩➤ Na função de agregação <Frame cmd='ui' label='count(*)'/> indica <Frame cmd='' label='contar todas as linhas'/>.</li> */}
                        {/* <li>⬩➤ Na função de agregação <Frame cmd='ui' label='count(campo)'/> indica <Frame cmd='' label='contar todas as linhas não nulas'/> de coluna(s).</li> */}
                        <li>⬩➤ <Sql word='where'/> e/ou <Sql word='having'/> são cláusulas de <Frame cmd='' label='uso comum'/> em conjunto com o <Sql word='group by'/>.</li>
                        <li>⬩➤ <Sql word='where'/> <Frame cmd='' label='filtra antes'/> do <Sql word='group by'/> ➜ filtra da capacidade máxima da(s) tabela(s) que formam grupos resultantes possíveis.</li>
                        <li>⬩➤ <Sql word='having'/> <Frame cmd='' label='filtra após'/> o <Sql word='group by'/> ➜ filtra da quantidade de grupos resultantes já formados ➜ <Frame cmd='shine i !u' label='com ou sem filtragem'/> do <Sql word='where'/>.</li>
                        <li>⬩➤ <Sql word='having'/> <Frame cmd='' label='pode usar função agregadora'/>, <Frame cmd='red i !u' label='não significa'/> que precisa <Frame cmd='' label='aparecer no'/> <Sql word='select'/>.</li>
                        {/* <li>⬩➤ Dentre as funções agregadoras, <Frame cmd='ui' label='count'/> é o <Frame cmd='' label='único que aceita *'/> como argumento.</li> */}
                        <li>⬩➤ As <Frame cmd='' label='colunas não agregadas'/> colocadas no <Sql word='select'/> <Frame cmd='' label='são informativas'/>, <Frame cmd='red i !u' label='não mandatórias'/>. Seu <Frame cmd='shine i !u' label='local obrigatório é no'/> <Sql word='group by'/>.</li>
                    </ul>
                </div>

            </div>
        </>
    )
}
