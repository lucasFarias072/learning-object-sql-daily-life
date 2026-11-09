

import { Hint } from "../../shared/Hint"
import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function AggregateCaseGroupByMinimum() {
    return (
        <>
            
            <div className="flex column gap-sm case">

                <div id="case-minimum-and-group-by-title-aggregate" className="mv-1">
                    <h2 className="case-header">Caso mínimo + group by</h2>
                </div>

                <div id="case-minimum-and-group-by-body-aggregate" className="flex column gap-sm theory-layout">
                    {/* <h2 className="case-header">Caso mínimo + group by</h2> */}
                    <p>⬩➤ Com o uso do <Sql word='group by'/>, a <Frame cmd='' label='lógica'/> do <Frame cmd='d-blue i !u' label='dicionário'/> ➜ <Frame cmd='ylw i !u' label='seção/palavra'/> ➜ <Frame cmd='blue i !u' label='significado'/> <Frame cmd='shine i !u' label='passa a fazer sentido'/>.</p>
                    <p>⬩➤ Tenha em mente:</p>
                    <div className="flex column gap-sm frame-indent">
                        <p className="pl-2">⬩➤ <Frame cmd='d-blue i !u' label='dicionário'/> ➜ <Frame cmd='' label='tabela'/> onde está a fonte dos dados (colunas, linhas).</p>
                        <p className="pl-2">⬩➤ <Frame cmd='ylw i !u' label='seção/palavra'/> ➜ uma <Frame cmd='' label='coluna da tabela'/>, que <Frame cmd='shine i !u' label='guarda diversos valores'/>.</p>
                        <p className="pl-2">⬩➤ <Frame cmd='blue i !u' label='significado'/> ➜ <Frame cmd='' label='operação aplicada pela função agregadora'/> que fornece <Frame cmd='' label='significado estatístico'/>.</p>
                    </div>
                    <p>⬩➤ <Frame cmd='ylw i !u' label='vitorioso'/> ➜ <Frame cmd='' label='é uma coluna com vários valores únicos'/>, e todos eles <Frame cmd='' label='recebem'/> o mesmo padrão de <Frame cmd='blue i !u' label='significado'/>.</p>
                    <p>⬩➤ <Frame cmd='blue i !u' label='significado'/> ➜ <Frame cmd='shine i !u' label='nesse contexto é'/> <Frame cmd='' label='contar sua reincidência'/> ➜ <Frame cmd='' label='gera um número inteiro'/>.</p>
                    {/* <p>⬩➤ O objetivo agora é <Frame cmd='' label='formar grupos'/></p> */}
                    {/* <p>⬩➤ Nesse caso, <Frame cmd='u' label='group by'/> passa a ser <Frame cmd='' label='mandatório'/></p> */}
                    <Hint/>
                </div>
                
                <div className="frame-example ex-aggregate mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                        <Frame cmd='d-blue p !u' label='dicionário'/>
                        <Frame cmd='ylw p !u' label='palavras'/>
                        <Frame cmd='blue p !u' label='significado separado para cada palavra'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> vitorioso, <Frame cmd='blue i u' label='count(*)'/></p>
                        <p><Sql word='from'/> <Frame cmd='d-blue i !u' label='partida_sinuca'/></p>
                        <p><Sql word='group by'/> <Frame cmd='ylw i !u' label='vitorioso'/>;</p>
                    </div>
                </div>

                <div className="frame-example ex-aggregate mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                        <Frame cmd='d-blue p !u' label='dicionário'/>
                        <Frame cmd='ylw p !u' label='palavras do mesmo dicionário (seções diferentes)'/>
                        <Frame cmd='blue p !u' label='significado separado para cada palavra'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> vitorioso, sinuca_fk <Frame cmd='blue i u' label='count(*)'/></p>
                        <p><Sql word='from'/> <Frame cmd='d-blue i !u' label='partida_sinuca'/></p>
                        <p><Sql word='group by'/> <Frame cmd='ylw i !u' label='vitorioso'/>, <Frame cmd='ylw i !u' label='sinuca_fk'/>;</p>
                    </div>
                </div>
                
                <div className="frame-example ex-aggregate mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                        <Frame cmd='ylw p !u' label='palavra 1'/>
                        <Frame cmd='cream p !u' label='palavra 2'/>
                        <Frame cmd='d-blue p !u' label='dicionário 1'/>
                        <Frame cmd='pk p !u' label='dicionário 2'/>
                        <Frame cmd='blue p !u' label='significado separado para cada palavra'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> apelido, sinuca_fk, <Frame cmd='blue i u' label='count(*)'/></p>
                        <p><Sql word='from'/> <Frame cmd='d-blue i !u' label='partida_sinuca'/> psin</p>
                        <p><Sql word='join'/> <Frame cmd='pk i !u' label='sinuquista'/> sinu on sinu.sinuquista_id = psin.vitorioso</p>
                        <p><Sql word='group by'/> <Frame cmd='cream i !u' label='apelido'/>, <Frame cmd='ylw i !u' label='sinuca_fk'/>;</p>
                    </div>
                </div>

            </div>
        </>
    )
}
