

import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function JoinUtility() {
    return (
        <>
            <div className="flex column gap-sm">

                <div id="util-title-join" className="mv-1">
                    <h2 className="as-line round-title">Qual a utilidade?</h2>
                </div>
                
                <div id="util-body-join" className="flex column gap-xsm theory-layout">
                    <ul className="flex column gap-sm">
                        <li>⬩➤ <Frame cmd='' label='Responder perguntas'/> que <Frame cmd='' label='exigem informação'/> de <Frame cmd='' label='mais de uma tabela' /> ao mesmo tempo.</li>
                        <li>⬩➤ <Frame cmd='' label='Tabelas'/> se dividem para assumir <Frame cmd='' label='responsabilidades diferentes'/>, quando uma <Frame cmd='' label='consulta precisa'/> de <Frame cmd='' label='conjunto de informações'/>, <Frame cmd='shine i !u' label='elas são unidas'/>.</li>
                        <li>⬩➤ Essa <Frame cmd='' label='união requer'/> que as <Frame cmd='' label='tabelas'/> tenham <Frame cmd='shine i !u' label='algo em comum entre si'/>.</li>
                        <li>⬩➤ <Sql word='join'/> faz parte do <Sql word='sql'/> e <Frame cmd='shine i !u' label='se mostra útil'/> a partir ao <Frame cmd='' label='seguinte fluxo'/>.</li>
                        <div className="flex column gap-sm frame-indent">
                            <li className="pl-2">⬩➤ <Sql word='sql'/> é uma <Frame cmd='shine i !u' label='linguagem para bancos de dados relacionais'/>.</li>
                            <li className="pl-2">⬩➤ Bancos de dados relacionais <Frame cmd='' label='compõem tabelas'/>.</li>
                            <li className="pl-2">⬩➤ Tabelas <Frame cmd='' label='compõem colunas'/> (características) <Frame cmd='' label='e linhas'/> (dados que fazem sentido para essas características).</li>
                            <li className="pl-2">⬩➤ <Frame cmd='' label='Dados'/> estão <Frame cmd='' label='espalhados entre tabelas'/> diferentes.</li>
                            <li className="pl-2">⬩➤ <Frame cmd='' label='Tabelas se juntam'/> por um <Frame cmd='shine i !u' label='dado único transferível'/> de uma para outra.</li>
                            <li className="pl-2">⬩➤ Quem <Frame cmd='shine i !u' label='junta tabelas'/> é a cláusula <Sql word='join'/>.</li>
                        </div>
                    </ul>
                </div>

            </div>
        </>
    )
}
