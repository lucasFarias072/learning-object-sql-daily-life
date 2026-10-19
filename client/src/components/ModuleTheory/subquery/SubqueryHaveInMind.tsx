

import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function SubqueryHaveInMind() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="have-in-mind-title-subquery" className="mv-1">
                    <h2 className="as-line round-title">Tenha em mente!</h2>
                </div>
                
                <div id="have-in-mind-body-casewhen" className="flex column gap-xsm theory-layout">
                    <ul className="flex column gap-sm">
                        <li>⬩➤ Subconsultas trabalham com <Frame cmd='shine i !u' label='entrega de chaves entre consultas'/>.</li>
                        <li>⬩➤ Subconsultas são <Frame cmd='' label='consultas SQL aninhadas'/> que o <Frame cmd='' label='resultado'/> gerado da <Frame cmd='' label='consulta mais interna'/> é <Frame cmd='' label='repassado'/> à <Frame cmd='' label='consulta externa à ela'/>.</li>
                        <li>⬩➤ Subconsulta <Frame cmd='' label='cruza chaves/salta entre tabelas'/>, mas <Frame cmd='' label='não existe junção de tabelas'/>, como acontece no <Sql word='join'/>.</li>
                        <li>⬩➤ Subconsulta inteiras <Frame cmd='' label='acessam apenas os campos da tabela da consulta externa'/> no <Sql word='select'/>. Para <Frame cmd='' label='acessar mais campos'/>, opte pelo <Sql word='join'/>.</li>
                        <li>⬩➤ Subconsultas são <Frame cmd='' label='alternativas'/> <Frame cmd='red i !u' label='para evitar'/> <Sql word='join'/>, <Frame cmd='' label='quando'/> o <Sql word='select'/> for <Frame cmd='shine i !u' label='mostrar campos de apenas uma tabela'/>.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
