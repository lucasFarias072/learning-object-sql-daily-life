

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
                        <li><Frame cmd='d-cyan i !u' label='⬩➤ Ex.'/> <Frame cmd='shine i !u' label='Cachorros'/> podem ser classificados por porte, simbolizados por <Frame cmd='' label='valores 1, 2, 3'/>.</li>
                        <li><Frame cmd='d-cyan i !u' label='⬩➤ Ex.'/> Pode-se <Frame cmd='' label='inferir'/> que 1, 2 e 3 <Frame cmd='' label='são os portes'/>, mas <Frame cmd='' label='talvez'/> isso <Frame cmd='red i !u' label='não seja claro'/>.</li>
                        <li style={{fontWeight: '550'}}><Frame cmd='shine i !u' label='⬩➤ Obs.'/> No <Sql word='sql'/>, textos são trocados por números, por serem dados menores e terem operações menos custosas.</li>
                        <li style={{fontWeight: '550'}}><Frame cmd='shine i !u' label='⬩➤ Obs.'/> O número substitui o texto, mas isso só é intuitivo para quem fez, não para quem vê os dados.</li>
                        <li>⬩➤ <Sql word='case when'/> pode <Frame cmd='shine i !u' label='evitar isso'/>, assim como <Frame cmd='red i !u' label='pode evitar junção'/> entre tabelas, que também é <Frame cmd='red i !u' label='custoso'/>.</li>
                        <li>⬩➤ Se <Frame cmd='' label='duas tabelas se conectam por chave numérica'/>, uma tabela <Frame cmd='' label='"animal"'/> recebe chave de uma tabela <Frame cmd='' label='"porte"'/>.</li>
                        <li>⬩➤ Se é sabido o que a chave representa textualmente, não será preciso juntá-las.</li>
                        <li>⬩➤ O <Sql word='case when'/> <Frame cmd='' label='usará o valor do campo da chave'/> e <Frame cmd='' label='atribuir valor textual correspondente'/> em cada condição.</li>
                        <li>⬩➤ Pela <Frame cmd='' label='chamada'/> do <Sql word='case when'/>, <Frame cmd='' label='cada condição'/> se torna um <Frame cmd='' label='valor da coluna customizada'/>.</li>
                        <li><Frame cmd='d-cyan i !u' label='⬩➤ Veja o exemplo abaixo'/> cada <Sql word='when'/> ➜ condição ➜ novo valor, o <Sql word='else'/> ➜ condição fechamento ➜ último valor provável.</li>
                        <Hint/>
                    </ul>
                </div>

                <div className="frame-example mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <div className="flex column gap-xsm">
                            <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                            <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 1'/>
                        </div>
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
