

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
                        <li>⬩➤ Perguntas costumam envolver diversas informações/dados, que se dividem em tabelas diferentes.</li>
                        <li>⬩➤ <Sql word='join'/> faz parte do <Frame cmd='u' label='sql'/> e <Frame cmd='' label='faz sentido'/> devido ao <Frame cmd='' label='seguinte fluxo'/>.</li>
                        <li className="pl-4">🟢 SQL é uma linguagem de bancos de dados relacionais.</li>
                        <li className="pl-4">🟢 Bancos de dados relacionais compõem tabelas.</li>
                        <li className="pl-4">🟢 Tabelas compõem colunas (características) e linhas (dados).</li>
                        <li className="pl-4">🟢 Dados estão espalhados entre tabelas diferentes.</li>
                        <li className="pl-4">🟢 Tabelas se juntam pelos dados únicos delas.</li>
                        <li className="pl-4">🟢 Quem junta tabelas é a cláusula <Frame cmd='u' label='join'/>.</li>
                    </ul>
                </div>

            </div>
        </>
    )
}
