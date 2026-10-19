

import { Hint } from "../../shared/Hint"
import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function SubqueryCaseJigsaw() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="case-modus-operandi-title-subquery" className="mv-1">
                    <h2 className="case-header">Caso: modus operandi</h2>
                </div>

                <div id="case-modus-operandi-body-subquery" className="flex column gap-sm theory-layout">
                    <p>⬩➤ Para <Frame cmd='' label='entender melhor'/> o funcionamento, vamos <Frame cmd='' label='usar pedaços'/> de uma consulta inteira e <Frame cmd='' label='depois juntar'/>.</p>
                    <p>⬩➤ <Frame cmd='' label='Para cada'/> <Sql word='select'/>, existe <Frame cmd='shine i !u' label='uma subconsulta'/> sendo iniciada.</p>
                    <p>⬩➤ Vamos <Frame cmd='' label='isolar'/> as subconsultas: <Frame cmd='d-cyan i !u' label='⬩➤ Ex. 1'/>, <Frame cmd='d-cyan i !u' label='⬩➤ Ex. 2'/>, <Frame cmd='d-cyan i !u' label='⬩➤ Ex. 3'/>.</p>
                    <p>⬩➤ <Frame cmd='' label='A subconsulta pedida'/>: a descrição de algo (seja coisa ou animal) que possuem cor verde ou azul.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Visão humana:'/> O todo é a tabela <Frame cmd='d-cyan i !u' label='algo'/>, as cores daquilo de qualquer algo, estão na tabela <Frame cmd='d-cyan i !u' label='cor_algo'/>, o nome das cores está na tabela <Frame cmd='d-cyan i !u' label='cor'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Visão humana:'/> <Frame cmd='' label='Eu salto entre tabelas cruzando as chaves'/> e chego onde a consulta quer.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Visão do SQL:'/> <Frame cmd='' label='Capturo os códigos das cores'/> verde e azul, <Frame cmd='' label='entrego'/> à <Frame cmd='shine i !u' label='consulta logo acima'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Visão do SQL:'/> <Frame cmd='' label='Capturo os códigos do que é algo'/> que tem os códigos de cor que eu recebi e <Frame cmd='' label='entrego'/> à <Frame cmd='shine i !u' label='consulta logo acima'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Visão do SQL:'/> <Frame cmd='' label='Comparo os códigos'/> do que foi <Frame cmd='shine i !u' label='recebido da consulta logo baixo'/> ➜ <Frame cmd='shine i !u' label='resultado'/> ➜ <Frame cmd='' label='Mostro as descrições do que é algo'/>.</p>
                    <p>⬩➤ A <Frame cmd='d-cyan i !u' label='visão humana'/> interpreta de <Frame cmd='shine i !u' label='fora pra dentro'/>, <Frame cmd='' label='conceitualmente'/> e seguindo uma <Frame cmd='' label='lógica relacional'/>.</p>
                    <p>⬩➤ A <Frame cmd='d-cyan i !u' label='visão da máquina'/> interpreta de <Frame cmd='shine i !u' label='dentro pra fora'/>, <Frame cmd='' label='processualmente'/>, seguindo uma <Frame cmd='' label='lógica procedural'/>.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example ex-subquery mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <div className="flex column gap-xsm">
                            <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                            <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 1'/>
                        </div>
                        <Frame cmd='ylw p !u' label='subconsulta mais interna'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Frame cmd='ylw i u' label='select'/> cor_id <Sql word='from'/> cor</p>
                        <p><Sql word='where'/> descricao_cor in ('azul', 'verde');</p> 
                    </div>
                </div>

                <div className="frame-example ex-subquery mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <div className="flex column gap-xsm">
                            <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                            <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 2'/>
                        </div>
                        <Frame cmd='cream p !u' label='consulta externa'/>
                        <Frame cmd='ylw p !u' label='subconsulta mais interna'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Frame cmd='cream i u' label='select'/> algo_fk <Sql word='from'/> cor_algo</p> 
                        <p><Sql word='where'/> cor_fk <Sql word='in'/> <Frame cmd='cream i !u' label='('/></p>
                        <p className="pl-2"><Frame cmd='ylw i u' label='select'/> cor_id <Sql word='from'/> cor</p>
                        <p className="pl-2"><Sql word='where'/> descricao_cor in ('azul', 'verde')</p>
                        <p><Frame cmd='cream i !u' label=')'/>;</p>
                    </div>
                </div>

                <div className="frame-example ex-subquery mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <div className="flex column gap-xsm">
                            <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                            <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 3'/>
                        </div>
                        <Frame cmd='ylw p !u' label='subconsulta mais interna'/>
                        <Frame cmd='d-blue p !u' label='consulta logo acima/intermediária'/>
                        <Frame cmd='cream p !u' label='consulta externa'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        {/* <p style={{borderTop: 'salmon solid 3px', color: 'black'}}>-- externa (abre)</p> */}
                        <p><Frame cmd='cream i u' label='select'/> descricao_algo <Sql word='from'/> algo</p>
                        <p><Sql word='where'/> algo_id <Sql word='in'/> <Frame cmd='cream i !u' label='('/></p>
                        {/* <p style={{borderTop: '#1F2937 solid 3px', color: 'black'}}>-- logo acima (abre)</p> */}
                        <p className="pl-2"><Frame cmd='d-blue i u' label='select'/> algo_fk <Sql word='from'/> cor_algo</p> 
                        <p className="pl-2"><Sql word='where'/> cor_fk <Sql word='in'/> <Frame cmd='d-blue i !u' label='('/></p>
                        {/* <p style={{borderTop: 'purple solid 3px', color: 'black'}}>-- mais interna (abre)</p> */}
                        <p className="pl-4"><Frame cmd='ylw i u' label='select'/> cor_id <Sql word='from'/> cor</p>
                        <p className="pl-4"><Sql word='where'/> descricao_cor in ('azul', 'verde')</p>
                        {/* <p style={{borderBottom: 'purple solid 3px', color: 'black'}}>-- mais interna (fecha)</p> */}
                        <p className="pl-2"><Frame cmd='d-blue i !u' label=')'/></p>
                        {/* <p style={{borderBottom: '#1F2937 solid 3px', color: 'black'}}>-- logo acima (fecha)</p> */}
                        <p><Frame cmd='cream i !u' label=')'/>;</p>
                        {/* <p style={{borderBottom: 'salmon solid 3px', color: 'black'}}>-- externa (fecha)</p> */}
                    </div>
                </div>
    
            </div>
        </>
    )
}
