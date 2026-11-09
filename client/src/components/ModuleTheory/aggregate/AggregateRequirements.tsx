

import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"
import { Hint } from "../../shared/Hint"

export function AggregateRequirements() {
    return (
        <>
            <div className="flex column gap-sm">

                <div id="req-title-aggregate" className="mv-1">
                    <h2 className="title-what-is as-line round-title">Do que precisa?</h2>
                </div>

                <div id="req-body-aggregate" className="flex column gap-xsm theory-layout">
                    <ul className="flex column gap-sm">
                        <li>⬩➤ As funções agregadoras, <Frame cmd='' label='por si só'/>, precisam de <Frame cmd='' label='uma coluna numérica'/>, mas aqui <Frame cmd='shine i !u' label='o intuito é falar da sua aliança com'/> <Sql word='group by'/>.</li>
                        <li>⬩➤ <Frame cmd='' label='Pelo menos uma função agregadora'/> normalmente no <Sql word='select'/> (se for para <Frame cmd='' label='exibir na tabela resultante'/>), ou no <Sql word='having'/> (se for para <Frame cmd='' label='filtrar da tabela resultante'/>).</li>
                        <li>⬩➤ Uma ou mais <Frame cmd='' label='colunas não agregadas'/> usadas pelo <Sql word='group by'/> <Frame cmd='shine i !u' label='(uso obrigatório)'/>, que podem ser exibidas no <Sql word='select'/> <Frame cmd='shine i !u' label='(uso opcional)'/>.</li>
                        <li>⬩➤ <Sql word='group by'/> é <Frame cmd='shine i !u' label='opcional'/>, mas é <Frame cmd='' label='muito utilizado'/>, pois <Frame cmd='red i !u' label='sua ausência limita'/> a <Frame cmd='shine i !u' label='atuação das funções agregadoras'/>.</li>
                        <li>⬩➤ Os <Frame cmd='' label='exemplos abaixo'/> demonstram bem como a <Frame cmd='shine i !u' label='atuação da função agregadora muda'/> <Frame cmd='' label='conforme'/> a aplicação do <Sql word='group by'/>.</li>
                        <li>⬩➤ Eles se tratam do assunto de duração de partida de sinuca.</li>
                        {/* <li>⬩➤ Não precisa entender os exemplos, apenas <Frame cmd='' label='tenha em mente'/> que:</li> */}
                        <li>⬩➤ <Frame cmd='red i !u' label='Sem'/> o <Sql word='group by'/>, gera <Frame cmd='' label='um resultado de'/> todas as linhas.</li>
                        <li>⬩➤ <Frame cmd='shine i !u' label='Com'/> o <Sql word='group by'/>, gera <Frame cmd='' label='um resultado por'/> linha.</li>
                    </ul>
                    <div className="mt-1"><Hint/></div>
                </div>
                
                <div className="frame-example mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                        {/* <Frame cmd='d-cyan i !u' label='⬩➤ Ex. 1:'/> */}
                        <Frame cmd='ylw p !u' label='função agregadora com base em uma coluna, sem agrupar'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> <Sql word='max'/>(<Frame cmd='ylw i !u' label='duracao_seg'/>) <Sql word='from'/> partida_sinuca;</p>
                    </div>
                </div>
                
                <div className="frame-example mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                        {/* <Frame cmd='d-cyan i !u' label='⬩➤ Ex. 2:'/> */}
                        <Frame cmd='ylw p !u' label='função agregadora com base em uma coluna'/>
                        <Frame cmd='blue p !u' label='coluna trazida da linha do resultado da função agregadora'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> <Frame cmd='blue i !u' label='ficha_fk'/>, <Sql word='max'/>(<Frame cmd='ylw i !u' label='duracao_seg'/>) <Sql word='from'/> partida_sinuca;</p>
                    </div>
                </div>
                
                <div className="frame-example mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                        {/* <Frame cmd='d-cyan i !u' label='⬩➤ Ex. 3:'/> */}
                        <Frame cmd='ylw p !u' label='cada valor único de ficha separado (mostrado)'/>
                        <Frame cmd='d-blue p !u' label='quem recebe a coluna e segrega seus valores em grupos'/>
                        <Frame cmd='blue p !u' label='estatística para cada linha/valor'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> <Frame cmd='ylw i !u' label='ficha_fk'/>, <Sql word='max'/> <Frame cmd='blue i !u' label='(duracao_seg)'/> <Sql word='from'/> partida_sinuca <Frame cmd='d-blue i u' label='group by'/> <Frame cmd='ylw i !u' label='ficha_fk'/>;</p>
                    </div>
                </div>
                
                <div className="frame-example mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                        {/* <Frame cmd='d-cyan i !u' label='⬩➤ Ex. 4:'/> */}
                        <Frame cmd='ylw p !u' label='cada valor único de ficha separado (omitido)'/>
                        <Frame cmd='d-blue p !u' label='quem recebe a coluna e segrega seus valores em grupos'/>
                        <Frame cmd='blue p !u' label='estatística para cada linha/valor'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> <Frame cmd='ylw i !u' label=''/> <Sql word='max'/> <Frame cmd='blue i !u' label='(duracao_seg)'/> <Sql word='from'/> partida_sinuca <Frame cmd='d-blue i u' label='group by'/> <Frame cmd='ylw i !u' label='ficha_fk'/>;</p>
                    </div>
                </div>

            </div>
        </>
    )
}
