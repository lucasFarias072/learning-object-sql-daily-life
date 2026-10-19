

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
                        <li>⬩➤ As <Frame cmd='shine i !u' label='funções agregadoras'/> tem função de <Frame cmd='' label='fazer cálculos e atribuir eles a grupos de dados'/>.</li>
                        <li>⬩➤ <Sql word='group by'/> <Frame cmd='' label='ajuda'/> as <Frame cmd='shine i !u' label='funções agregadoras'/> a <Frame cmd='' label='terem dados'/> para onde distribuir seus cálculos.</li>
                        <li>⬩➤ <Sql word='group by'/> <Frame cmd='' label='recebe colunas'/>, e <Frame cmd='red i !u' label='não deve ser'/> <Frame cmd='' label='a passada na função agregadora'/>, seja ela: <Sql word='avg'/>, <Sql word='max'/>, <Sql word='min'/>, <Sql word='sum'/>.</li>
                        <li>⬩➤ <Sql word='having'/> pode <Frame cmd='' label='usar uma função agregadora'/>, <Frame cmd='red i !u' label='não significa'/> que precisa <Frame cmd='' label='aparecer no'/> <Sql word='select'/>.</li>
                        {/* <li>⬩➤ (editar) Uma coluna usada <Frame cmd='' label='fora da'/> função agregadora <Frame cmd='ui' label='select/having'/> <Frame cmd='' label='precisa'/> estar no <Frame cmd='u' label='group by'/>.</li> */}
                        {/* <li>⬩➤ Na função de agregação <Frame cmd='ui' label='count(*)'/> indica <Frame cmd='' label='contar todas as linhas'/>.</li> */}
                        {/* <li>⬩➤ Na função de agregação <Frame cmd='ui' label='count(campo)'/> indica <Frame cmd='' label='contar todas as linhas não nulas'/> de coluna(s).</li> */}
                        <li>⬩➤ As cláusulas <Sql word='where'/> e/ou <Sql word='having'/> são de <Frame cmd='' label='uso comum'/> em conjunto com o <Sql word='group by'/>.</li>
                        <li>⬩➤ O <Sql word='where'/> filtra <Frame cmd='' label='antes'/> do <Sql word='group by'/> agrupar as linhas em grupos (reduz linhas antes de agrupar = da tabela).</li>
                        <li>⬩➤ O <Sql word='having'/> filtra <Frame cmd='' label='após'/> o <Sql word='group by'/> agrupar as linhas em grupos (reduz linhas do agrupamento = do resultado).</li>
                        {/* <li>⬩➤ Dentre as funções agregadoras, <Frame cmd='ui' label='count'/> é o <Frame cmd='' label='único que aceita *'/> como argumento.</li> */}
                        <li>⬩➤ As <Frame cmd='' label='colunas não agregadas'/> colocadas no <Sql word='select'/> <Frame cmd='' label='são informativas'/>, <Frame cmd='red i !u' label='não mandatórias'/>.</li>
                    </ul>
                </div>

            </div>
        </>
    )
}
