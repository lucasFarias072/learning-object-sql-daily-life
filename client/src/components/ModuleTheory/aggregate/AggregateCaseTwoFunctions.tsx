

import { Hint } from "../../shared/Hint"
import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function AggregateCaseTwoFunctions() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="case-aggregate-functions-comb-title-aggregate" className="mv-1">
                    <h2 className="case-header">Caso: funções agregadoras combinadas</h2>
                </div>

                <div id="case-aggregate-functions-comb-body-aggregate" className="flex column gap-sm theory-layout">
                    <p>⬩➤ Foi <Frame cmd='' label='visto no caso mínimo'/> que <Frame cmd='ylw i !u' label='palavras'/> podem ser <Frame cmd='' label='agrupadas'/> no <Sql word='group by'/>.</p>
                    <p>⬩➤ Lembrando que <Frame cmd='ylw i !u' label='palavras = coluna'/> ➜ <Frame cmd='' label='todos seus valores únicos existentes'/>.</p>
                    <p>⬩➤ Lembrando que <Frame cmd='blue i !u' label='significado = função agregadora'/> ➜ <Frame cmd='' label='operação aplicada à cada grupo (valor único extraído)'/>.</p>
                    <p>⬩➤ <Frame cmd='' label='Da mesma forma que'/> se pode agrupar múltiplas colunas ➜ <Sql word='group by'/> <Frame cmd='ylw i !u' label='palavra A'/>, <Frame cmd='ylw i !u' label='palavra B'/>, ...</p>
                    <p>⬩➤ <Frame cmd='' label='Também é possível'/> aplicar diversas funções agregadoras ➜ <Sql word='select'/> <Frame cmd='blue i !u' label='significado A'/>, <Frame cmd='blue i !u' label='significado B'/>, ...</p>
                    {/* <p>⬩➤ Se <Frame cmd='ylw i !u' label='colunas/palavras'/> podem ser <Frame cmd='' label='agrupadas em mais de 1'/>, isso <Frame cmd='' label='também acontece'/> com os <Frame cmd='blue i !u' label='operações/significados'/>.</p> */}
                    <p>⬩➤ Isso é <Frame cmd='' label='muito comum'/> de acontecer, tanto <Frame cmd='' label='no'/> <Sql word='select'/> quanto <Frame cmd='' label='no'/> <Sql word='having'/> (será abordado futuramente).</p>
                    {/* <p>⬩➤ O <Frame cmd='' label='exemplo abaixo'/>, demonstra isso.</p> */}
                    <p>⬩➤ Cada valor único da <Frame cmd='ylw i !u' label='palavra ➜ membro_visto_fk'/> passa por <Frame cmd='blue i !u' label='significado ➜ hora_visto'/>.</p>
                    
                    <p>⬩➤ <Frame cmd='blue i !u' label='Significado 1'/> = contar as ocorrências únicas de cada linha/valor em <Frame cmd='ylw i !u' label='membro_visto_fk'/>.</p>
                    <p>⬩➤ <Frame cmd='blue i !u' label='Significado 2'/> = de todas as linhas de <Frame cmd='ylw i !u' label='membro_visto_fk'/> únicas agrupadas ➜ tirar a média <Frame cmd='blue i !u' label='hora_visto'/>.</p>
                    <p>⬩➤ <Frame cmd='blue i !u' label='Significado 3'/> = de todas as linhas de <Frame cmd='ylw i !u' label='membro_visto_fk'/> únicas agrupadas ➜ filtrar o maior valor de <Frame cmd='blue i !u' label='hora_visto'/>.</p>
                    <p>⬩➤ <Frame cmd='blue i !u' label='Significado 4'/> = de todas as linhas de <Frame cmd='ylw i !u' label='membro_visto_fk'/> únicas agrupadas ➜ filtrar o menor valor de <Frame cmd='blue i !u' label='hora_visto'/>.</p>
                    
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Como se consegue extrair dados de uma outra coluna externa à'/> ⬩➤ <Frame cmd='ylw i !u' label='membro_visto_fk'/>?</p>
                    <p>⬩➤ <Sql word='group by'/> <Frame cmd='shine i !u' label='tem acesso a linha inteira'/>, <Frame cmd='red i !u' label='não apenas'/> à <Frame cmd='' label='coluna agrupada como'/> <Frame cmd='ylw i !u' label='membro_visto_fk'/>.</p>
                    <p>⬩➤ <Frame cmd='' label='Ou seja'/>, se <Frame cmd='' label='existe acesso'/> à <Frame cmd='ylw i !u' label='membro_visto_fk'/>, também <Frame cmd='' label='existe acesso'/> à <Frame cmd='blue i !u' label='hora_visto'/> da <Frame cmd='shine i !u' label='linha correspondente'/>.</p>
                    <p>⬩➤ <Frame cmd='' label='Ambas colunas'/> pertencem a <Frame cmd='' label='mesma tabela'/>.</p>
                    <p>⬩➤ E <Frame cmd='red i !u' label='se não'/> pertencessem, um <Sql word='join'/> <Frame cmd='' label='corrigiria'/> esse <Frame cmd='red i !u' label='problema de acesso'/>.</p>
                    <Hint/>
                </div>
            
                <div className="frame-example ex-aggregate mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <h3 className="shine">Legenda ⬩➤</h3>
                        <Frame cmd='ylw p !u' label='palavra'/>
                        <Frame cmd='blue p !u' label='significado (dois tipos)'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> membro_visto_fk, <Frame cmd='blue i u' label='count(*)'/>, <Frame cmd='blue i u' label='avg(hora_visto)'/></p>
                        <p><Sql word='from'/> avistamento</p>
                        <p><Sql word='group by'/> <Frame cmd='ylw i !u' label='membro_visto_fk'/>;</p>
                    </div>
                </div>

                <div className="frame-example ex-aggregate mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <h3 className="shine">Legenda ⬩➤</h3>
                        <Frame cmd='ylw p !u' label='palavra'/>
                        <Frame cmd='blue p !u' label='significado (quatro tipos)'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> membro_visto_fk, <Frame cmd='blue i u' label='count(*)'/>, <Frame cmd='blue i u' label='avg(hora_visto)'/>, <Frame cmd='blue i u' label='sum(hora_visto)'/>, <Frame cmd='blue i u' label='max(hora_visto)'/>, <Frame cmd='blue i u' label='min(hora_visto)'/></p>
                        <p><Sql word='from'/> avistamento</p>
                        <p><Sql word='group by'/> <Frame cmd='ylw i !u' label='membro_visto_fk'/>;</p>
                    </div>
                </div>
            
            </div>

        </>
    )
}

