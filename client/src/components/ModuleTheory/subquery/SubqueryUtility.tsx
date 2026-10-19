

import { Frame } from "../../shared/Frame"

export function SubqueryUtility() {
    return (
        <>
            <div className="flex column gap-sm">

                <div id="util-title-subquery" className="mv-1">
                    <h2 className="title-what-is as-line round-title">Qual a utilidade?</h2>
                </div>

                <div id="util-body-subquery" className="flex column gap-xsm theory-layout">
                    <ul className="flex column gap-sm">
                        <li>⬩➤ <Frame cmd='' label='Decidir quais linhas ficam do resultado da consulta externa'/>.</li>
                        <li>⬩➤ Uma <Frame cmd='shine i !u' label='subconsulta'/>, normalmente <Frame cmd='' label='parte de uma tabela inicial'/> e <Frame cmd='' label='precisa de informações'/> que  <Frame cmd='red i !u' label='o todo não possui'/>.</li>
                        <li>⬩➤ Esse todo, <Frame cmd='' label='só tem informações sobre si mesma'/>, para <Frame cmd='' label='informações além'/> dele mesmo, <Frame cmd='' label='subconsultas'/> se tornam <Frame cmd='' label='necessárias'/>.</li>
                        <li>⬩➤ As sub consultas <Frame cmd='' label='adentram outras tabelas'/> e elas <Frame cmd='' label='coletam dados numéricos'/> de outras tabelas ou de si mesma, se ela for a última subconsulta.</li>
                        <li>⬩➤ <Frame cmd='' label='A cada entrada'/> numa outra tabela, <Frame cmd='' label='o resultado'/> da sua consulta <Frame cmd='red i !u' label='pode reduzir'/> a <Frame cmd='' label='quantidade original da tabela inicial'/>.</li>
                        <li>⬩➤ Isso <Frame cmd='' label='será mais detalhado'/> na <Frame cmd='shine i !u' label='sessão dos casos de uso'/>.</li>
                    </ul>
                </div>
                
            </div>
        </>
    )
}
