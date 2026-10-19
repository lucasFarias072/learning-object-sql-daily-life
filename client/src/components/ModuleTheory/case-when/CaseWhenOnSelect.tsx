

import { Frame } from "../../shared/Frame"
import { Hint } from "../../shared/Hint"
import { Sql } from "../../shared/Sql"

export function CaseWhenOnSelect() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="case-on-select-title-casewhen" className="mv-1">
                    <h2 className="case-header">Uso no <Frame cmd='u' label='select'/></h2>
                </div>

                <div id="case-on-select-body-casewhen" className="flex column gap-sm theory-layout">
                    <p>⬩➤ <Sql word='case when'/> é <Frame cmd='' label='muito utilizado'/> para <Frame cmd='' label='gerar coluna customizada'/> na cláusula <Sql word='select'/>, ele <Frame cmd='' label='usa dados brutos'/> e os <Frame cmd='' label='transforma-os em algo mais legível'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Quem tem os dados brutos?'/> <Frame cmd='pk i !u' label='local_tipo'/></p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 1'/> A tabela <Frame cmd='pk i !u' label='local_tipo'/> é o que <Frame cmd='' label='possui dados brutos'/> que <Frame cmd='' label='serão usados'/> <Frame cmd='red i !u' label='sem precisar fazer junção'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 2'/> A <Frame cmd='' label='construção'/> do <Sql word='case when'/> no <Sql word='select'/>, <Frame cmd='red i !u' label='não se restringe'/> a <Frame cmd='' label='apenas 1 uso'/>, podem ser vários.</p>
                    <p><Frame cmd='shine i !u' label='⬩➤ Obs.'/> <Sql word='else'/> <Frame cmd='shine i !u' label='não é cláusula mandatória'/>, mas <Frame cmd='' label='sua ausência pode gerar'/> resultados de <Frame cmd='' label='linhas'/> <Sql word='null'/>.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example ex-casewhen mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <div className="flex column gap-xsm">
                            <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                            <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 1'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='ylw p !u' label='coluna customizada'/>
                            <Frame cmd='p !u' label='cláusulas lógicas necessárias'/> 
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='blue p !u' label='apelido para o caso'/>
                            <Frame cmd='pk p !u' label='dado bruto = coluna de "local_tipo"'/> 
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='cream p !u' label='descendência'/>
                        </div>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> descricao_local,</p>
                        <p><Frame cmd='ylw i u' label='case'/></p> 
                        <p className="pl-2"><Frame cmd='i u' label='when'/> <Frame cmd='pk i !u' label='local_tipo_fk'/> = 12 <Frame cmd='i u' label='then'/> <Frame cmd='cream i !u' label="'Rua'"/></p>
                        <p className="pl-2"><Frame cmd='i u' label='when'/> <Frame cmd='pk i !u' label='local_tipo_fk'/> = 1 <Frame cmd='i u' label='then'/> <Frame cmd='cream i !u' label="'Praça'"/></p> 
                        <p className="pl-2"><Frame cmd='i u' label='when'/> <Frame cmd='pk i !u' label='local_tipo_fk'/> = 2 <Frame cmd='i u' label='then'/> <Frame cmd='cream i !u' label="'Avenida'"/></p>
                        <p className="pl-2"><Frame cmd='i u' label='when'/> <Frame cmd='pk i !u' label='local_tipo_fk'/> = 14 <Frame cmd='i u' label='then'/> <Frame cmd='cream i !u' label="'Bairro'"/></p> 
                        <p className="pl-2"><Sql word='else'/> <Frame cmd='cream i !u' label="'...'"/></p>
                        <p><Frame cmd='ylw i u' label='end'/> <Sql word='as'/> <Frame cmd='blue i !u' label='dominio'/></p>
                        <p><Sql word='from'/> local</p>
                        <p><Sql word='where'/> <Frame cmd='blue i !u' label='dominio'/> &lt;&gt; '...';</p>
                    </div>

                </div>
                
                <div className="frame-example ex-casewhen mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <div className="flex column gap-xsm">
                            <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                            <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 2'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='ylw p !u' label='coluna customizada (1 e 2)'/>
                            <Frame cmd='p !u' label='cláusulas lógicas necessárias'/> 
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='blue p !u' label='apelido paras os casos (2 cases)'/>
                            <Frame cmd='pk p !u' label='dado bruto (2 cases)'/> 
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='cream p !u' label='descendência'/>
                        </div>
                    </div>
                    
                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> descricao_fruta, </p>
                        <p><Frame cmd='ylw i u' label='case'/></p>
                        <p className="pl-2"><Frame cmd='i u' label='when'/> <Sql word='length('/><Frame cmd='pk i !u' label='descricao_fruta'/><Sql word=')'/> &lt;= 4 <Frame cmd='i u' label='then'/> <Frame cmd='cream i !u' label="'pequeno'"/></p>
                        <p className="pl-2"><Frame cmd='i u' label='when'/> <Sql word='length('/><Frame cmd='pk i !u' label='descricao_fruta'/><Sql word=')'/> <Sql word='in'/> (5, 6, 7) <Frame cmd='i u' label='then'/> <Frame cmd='cream i !u' label="'médio'"/></p>
                        <p className="pl-2"><Sql word='else'/> <Frame cmd='cream i !u' label="'grande'"/></p>
                        <p><Frame cmd='ylw i u' label='end'/> <Sql word='as'/> <Frame cmd='blue i !u' label='faixa_textual'/>,</p>
                        <p><Frame cmd='ylw i u' label='case'/></p>
                        <p className="pl-2"><Frame cmd='i u' label='when'/> <Frame cmd='pk i !u' label='preco_atual_kg'/> &gt;= 20 <Frame cmd='i u' label='then'/> <Frame cmd='cream i !u' label="'valorizado'"/></p>
                        <p className="pl-2"><Frame cmd='i u' label='when'/> <Frame cmd='pk i !u' label='preco_atual_kg'/> &lt; 20 <Sql word='and'/> <Frame cmd='pk i !u' label='preco_atual_kg'/> &gt; 10 <Frame cmd='i u' label='then'/> <Frame cmd='cream i !u' label="'adequado'"/></p>
                        <p><Frame cmd='ylw i u' label='end'/> <Sql word='as'/> <Frame cmd='blue i !u' label='valor_de_mercado'/></p>
                        <p><Sql word='from'/> frutaria_produto;</p>
                    </div>
                </div>
    
            </div>
        </>
    )
}
