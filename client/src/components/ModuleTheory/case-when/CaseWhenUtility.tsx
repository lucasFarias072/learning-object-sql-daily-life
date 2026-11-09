

import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"
import { Hint } from "../../shared/Hint"

export function CaseWhenUtility() {
    return (
        <>
            <div className="flex column gap-sm">
                
                <div id="util-title-casewhen" className="mv-1">
                    <h2 className="title-what-is as-line round-title">Qual a utilidade?</h2>
                </div>

                <div id="util-body-casewhen" className="flex column gap-xsm theory-layout">
                    <ul className="flex column gap-sm">
                        <li>⬩➤ <Frame cmd='' label='Transformar dados brutos em categorias legíveis'/>, traduzir valor técnico em algo humano.</li>
                        <li>⬩➤ O seu uso <Frame cmd='' label='implica'/> que se quer <Frame cmd='' label='criar algo customizado de dados reais'/> de uma tabela.</li>
                        <li><Frame cmd='d-cyan i !u' label='⬩➤ Por exemplo:'/></li>
                        <div className="flex column gap-sm frame-indent">
                            <li className="pl-2">⬩➤ <Frame cmd='shine i !u' label='Cachorros'/> podem <Frame cmd='' label='ser classificados por porte'/>, simbolizados por <Frame cmd='' label='valores 1, 2, 3'/>.</li>
                            <li className="pl-2">⬩➤ Pode-se <Frame cmd='' label='inferir'/> que 1, 2 e 3 <Frame cmd='' label='são representações dos portes'/>, mas <Frame cmd='' label='talvez'/> isso <Frame cmd='red i !u' label='não seja algo compreensível'/>.</li>
                        </div>
                        <li><Frame cmd='d-cyan i !u' label='⬩➤ Por que usar números como representação, em vez de textos?'/></li>
                        <div className="flex column gap-sm frame-indent">
                            <li className="pl-2">⬩➤ No <Sql word='sql'/>, textos são trocados por números, por serem dados menores e terem operações menos custosas.</li>
                            <li className="pl-2">⬩➤ O número substitui o texto, mas isso só é intuitivo para quem planejou isso, não para quem vê os dados.</li>
                        </div>
                        <li>⬩➤ <Sql word='case when'/> pode <Frame cmd='shine i !u' label='tornar isso compreensível'/> ➜ sua estrutura permite <Frame cmd='' label='traduzir'/> o <Frame cmd='' label='dado numérico'/> no seu <Frame cmd='' label='texto'/>.</li>
                        <li><Frame cmd='d-cyan i !u' label='⬩➤ Como?'/></li>
                        <div className="flex column gap-sm frame-indent">
                            <li className="pl-2">⬩➤ Para cada <Sql word='when'/> ➜ condição ➜ <Sql word='when'/> ➜ valor, o <Sql word='else'/> ➜ condição fechamento ➜ último valor provável.</li>
                            <li className="pl-2"><Sql word='when'/> porte = 1 <Sql word='then'/> 'pequeno';</li>
                            <li className="pl-2"><Sql word='when'/> porte = 2 <Sql word='then'/> 'médio';</li>
                            <li className="pl-2"><Sql word='else'/> 'grande';</li>
                        </div>
                        <li><Frame cmd='shine i !u' label='⬩➤ Obs.'/> ➜ No <Frame cmd='d-cyan i !u' label='exemplo abaixo'/> vemos isso acontecer com <Frame cmd='' label='dados reais'/>.</li>
                        <li><Frame cmd='shine i !u' label='⬩➤ Obs.'/> ➜ Note que <Sql word='case when'/> <Frame cmd='' label='também'/> possui como <Frame cmd='' label='característica provável'/> ➜ <Frame cmd='shine i !u' label='impedir fazer junção entre as tabelas'/>.</li>
                        <Hint/>
                    </ul>
                </div>

                <div className="frame-example mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                        <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 1'/>
                        <Frame cmd='ylw p !u' label='abertura/fechamento = coluna customizada'/>
                        <Frame cmd='blue p !u' label='apelido para o caso'/>
                        <Frame cmd='cream p !u' label='valor textual criado'/>
                        <Frame cmd='pk p !u' label='dado bruto'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> apelido,</p>
                        <p><Frame cmd='ylw i u' label='case'/></p> 
                        <p className="pl-2"><Sql word='when'/> <Frame cmd='pk i !u' label='sinuca_fk_favorita'/> = 1 <Sql word='then'/> <Frame cmd='cream i !u' label="'Nanica'"/></p>
                        <p className="pl-2"><Sql word='when'/> <Frame cmd='pk i !u' label='sinuca_fk_favorita'/> = 2 <Sql word='then'/> <Frame cmd='cream i !u' label="'Ordinária'"/></p>
                        <p className="pl-2"><Sql word='else'/> <Frame cmd='cream i !u' label="'Território'"/></p>
                        <p><Frame cmd='ylw i u' label='end'/> <Sql word='as'/> <Frame cmd='blue i !u' label='sinuca_jogada'/></p>
                        <p><Sql word='from'/> sinuquista;</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}
