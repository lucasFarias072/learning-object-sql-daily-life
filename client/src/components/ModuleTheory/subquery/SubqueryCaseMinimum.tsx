

import { Hint } from "../../shared/Hint"
import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function SubqueryCaseMinimum() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="case-minimum-title-subquery" className="mv-1">
                    <h2 className="case-header">Caso mínimo</h2>
                </div>
                
                <div id="case-minimum-body-subquery" className="flex column gap-sm theory-layout">
                    <p>⬩➤ O caso mínimo é quando <Frame cmd='' label='duas tabelas precisam se conectar'/> para <Frame cmd='' label='alcançar'/> o <Frame cmd='' label='objetivo da consulta'/>.</p>
                    <p>⬩➤ Na <Frame cmd='shine i !u' label='subconsulta'/>, tabelas se conectam <Frame cmd='' label='pelo correspondência de chaves'/>, são similares ao <Sql word='join'/>.</p>
                    <p>⬩➤ <Frame cmd='red i !u' label='Diferente'/> do <Sql word='join'/>, a <Frame cmd='shine i !u' label='subconsulta'/> <Frame cmd='' label='conecta tabelas'/> <Frame cmd='shine i !u' label='sem juntar todas as colunas'/>.</p>
                    <p>⬩➤ <Sql word='in'/> é <Frame cmd='' label='cláusula'/> para <Frame cmd='shine i !u' label='procurar correspondência'/> por chave estrangeira entre as tabelas.</p>
                    <p>⬩➤ <Sql word='='/> <Frame cmd='' label='se assemelha'/> ao <Sql word='in'/>, mas <Frame cmd='' label='espera'/> que a <Frame cmd='shine i !u' label='subconsulta'/> retorne <Frame cmd='shine i !u' label='apenas um dado'/>.</p>
                    <p><Frame cmd='shine i !u' label='⬩➤ Obs.'/> <Frame cmd='' label='Para cada'/> <Sql word='select'/> ➜ <Frame cmd='shine i !u' label='uma subconsulta iniciada'/>.</p>
                    <p><Frame cmd='shine i !u' label='⬩➤ Isso existe'/> Se <Frame cmd='' label='uma tabela'/> tiver <Frame cmd='red i !u' label='chave estrangeira configurada para ser nula'/>, o uso do <Sql word='in'/> ou <Sql word='='/> <Frame cmd='red i !u' label='não são recomendados'/> ➜ usar <Sql word='not exists'/>.</p>
                    <p><Frame cmd='shine i !u' label='⬩➤ Obs.'/> <Frame cmd='d-cyan i !u' label='⬩➤ Ex. 2'/> <Sql word='not exists'/> <Frame cmd='red i !u' label='não será tratado aqui'/>, mas <Frame cmd='' label='um exemplo'/> correspondente será <Frame cmd='' label='deixado como motivo de informação'/>.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example ex-subquery mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                        <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 1'/>
                        <Frame cmd='cream p !u' label='consulta externa'/>
                        <Frame cmd='ylw p !u' label='declaração da subconsulta'/>
                        <Frame cmd='blue p !u' label='conexão por chaves'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Frame cmd='cream i u' label='select'/> nome_membro <Sql word='from'/> membro_familia</p>
                        <p><Sql word='where'/> <Frame cmd='blue i !u' label='membro_id'/> <Sql word='in'/> <Frame cmd='cream i !u' label='('/></p>
                        <p className="pl-2"><Frame cmd='ylw i u' label='select'/> <Frame cmd='blue i !u' label='membro_fk'/> <Sql word='from'/> membro_rotina</p>
                        <p><Frame cmd='cream i !u' label=')'/>;</p> 
                    </div>
                </div>

                <div className="frame-example ex-subquery mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                        <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 2'/>
                        <Frame cmd='cream p !u' label='consulta externa'/>
                        <Frame cmd='ylw p !u' label='declaração da subconsulta'/>
                        <Frame cmd='blue p !u' label='conexão por chaves'/>
                        <Frame cmd='d-blue p !u' label='substituição ao "IN"'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Frame cmd='cream i u' label='select'/> nome_membro <Sql word='from'/> membro_familia</p>
                        <p><Sql word='where'/> <Frame cmd='d-blue i u' label='exists'/> <Frame cmd='cream i !u' label='('/></p>
                        <p className="pl-2"><Frame cmd='ylw i u' label='select'/> <Frame cmd='blue i !u' label='membro_fk'/> <Sql word='from'/> membro_rotina -- OUTRAS OPÇÕES: <b style={{textDecoration: "underline"}}>select 1 from membro_rotina</b>, <b style={{textDecoration: "underline"}}>select * from membro_rotina</b></p>
                        <p className="pl-2"><Sql word='where'/> <Frame cmd='blue i !u' label='membro_fk'/> = <Frame cmd='blue i !u' label='membro_id'/></p>
                        <p><Frame cmd='cream i !u' label=')'/>;</p> 
                    </div>
                </div>
    
            </div>
        </>
    )
}
