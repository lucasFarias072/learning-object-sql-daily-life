

import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function SubqueryUtility() {
    return (
        <>
            <div className="flex column gap-sm">

                <div id="util-title-subquery" className="mv-1">
                    <h2 className="title-what-is as-line round-title">Qual a utilidade?</h2>
                </div>

                <div id="util-body-subquery" className="flex column gap-xsm theory-layout">
                    <ul className="flex column gap-sm">
                        <li>⬩➤ <Frame cmd='' label='Decidir quais linhas ficam'/> do <Frame cmd='shine i !u' label='resultado da consulta externa'/> ➜ no <Sql word='select'/>.</li>
                        <li>⬩➤ Uma <Frame cmd='shine i !u' label='subconsulta'/>, normalmente <Frame cmd='' label='parte de uma tabela inicial'/> e <Frame cmd='' label='precisa de informações'/> que  <Frame cmd='red i !u' label='que ela não possui'/>, assim como no <Sql word='join'/>.</li>
                        <li>⬩➤ As subconsultas <Frame cmd='' label='recebem dados de outras tabelas'/>, normalmente <Frame cmd='shine i !u' label='dados numéricos da chave estrangeira'/> de outras tabelas.</li>
                        <li>⬩➤ <Frame cmd='shine i !u' label='Cada subconsulta'/> <Frame cmd='' label='precisa de dados'/> de uma <Frame cmd='' label='tabela com qual ela se relaciona'/>, <Frame cmd='shine i !u' label='até chegar numa consulta que não precise'/> de mais ninguém ➜ <Frame cmd='red i !u' label='fim da consulta'/>.</li>
                    </ul>
                </div>
                
            </div>
        </>
    )
}
