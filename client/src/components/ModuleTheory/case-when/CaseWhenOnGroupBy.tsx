

import { Frame } from "../../shared/Frame"
import { Hint } from "../../shared/Hint"
import { Sql } from "../../shared/Sql"

export function CaseWhenOnGroupBy() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="case-with-group-by-title-casewhen" className="mv-1">
                    <h2 className="case-header">Uso no <Frame cmd='u' label='group by'/></h2>
                </div>

                <div id="case-with-group-by-body-casewhen" className="flex column gap-sm theory-layout">
                    <p>⬩➤ <Sql word='group by'/> tende a <Frame cmd='' label='operar'/> como um <Frame cmd='' label='receptor do alias'/>, ou seja ➜ <Sql word='select'/> recebe ➜ <Sql word='case'/> criado e referenciado no ➜ <Sql word='group by'/>.</p>
                    <p>⬩➤ <Sql word='group by'/> <Frame cmd='shine i !u' label='pode ter seu próprio'/> <Sql word='case'/>, mas <Frame cmd='shine i !u' label='só é recomendado'/> quando <Frame cmd='shine i !u' label='gerar dados customizados'/> <Frame cmd='red i !u' label='sem a intenção de exibir esses dados'/> no <Sql word='select'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 1'/> <Sql word='case'/> ➜ configurado no <Sql word='select'/> ➜ repassa alias ➜ <Sql word='group by'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 2'/> <Sql word='case'/> ➜ configurado no <Sql word='group by'/> ➜ função agregadora usa dado gerado ➜ <Sql word='select'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 3'/> <Frame cmd='' label='replicação da lógica'/> do <Sql word='select'/> no <Sql word='group by'/>, que seria a <Frame cmd='shine i !u' label='solução para a indisponibilidade'/> no caso do <Frame cmd='d-cyan i !u' label='⬩➤ Ex. 2'/>.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example ex-casewhen mt-1">

                    <div className="flex row go-left gap-sm subtitles">
                        <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                        <div className="flex column gap-xsm">
                            <Frame cmd='ylw p !u' label='Escopo de criação dos dados customizados'/>
                            <Frame cmd='pool p !u' label='Cláusulas lógicas necessárias'/> 
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='blue p !u' label='Alias dado para o caso'/>
                            <Frame cmd='cream p !u' label='Receptor do alias do caso'/> 
                        </div>
                        <Frame cmd='pk p !u' label='Cláusula lógica opcional'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Frame cmd='d-cyan i !u' label='--⬩➤ Ex. 1'/> <b>caso criado no <Frame cmd='u' label='select'/>, <Frame cmd='u' label='group by'/> recebe o 'alias' (comum, quando permitido pelo SGBD)</b></p>
                        <p><Sql word='select'/></p> 
                        <p><Frame cmd='ylw i u' label='case'/></p>
                        <p className="pl-2"><Frame cmd='pool i u' label='when'/> avaliacao_guia &lt; 4 <Frame cmd='pool i u' label='then'/> 'duvidoso'</p>
                        <p className="pl-2"><Frame cmd='pool i u' label='when'/> avaliacao_guia &lt;= 4.7 <Frame cmd='pool i u' label='then'/> 'adequado'</p>
                        <p className="pl-2"><Frame cmd='pk i u' label='else'/> 'eficiente' <b>-- Poderia ser: when avaliacao_guia &gt; 4.7 then 'eficiente'</b></p>
                        <p><Frame cmd='ylw i u' label='end'/> <Sql word='as'/> <Frame cmd='blue i !u' label='qualidade'/>, <Sql word='count(*)'/></p>
                        <p><Sql word='from'/> passeio</p>
                        <p><Frame cmd='cream i u' label='group by'/> <Frame cmd='blue i !u' label='qualidade'/>;</p>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Frame cmd='d-cyan i !u' label='--⬩➤ Ex. 2'/> <b>caso criado no <Frame cmd='u' label='group by'/>, não possui alias para passar para o <Frame cmd='u' label='select'/> (ficam apenas os dados estatísticos disponíveis)</b></p>
                        <p><Sql word='select'/> <Sql word='count(*)'/></p>
                        <p><Sql word='from'/> passeio</p>
                        <p><Frame cmd='cream i u' label='group by'/> <Frame cmd='ylw i u' label='case'/> </p>
                        <p className="pl-2"><Frame cmd='pool i u' label='when'/> avaliacao_guia &lt; 4 <Frame cmd='pool i u' label='then'/> 'duvidoso'</p>
                        <p className="pl-2"><Frame cmd='pool i u' label='when'/> avaliacao_guia &lt;= 4.7 <Frame cmd='pool i u' label='then'/> 'adequado'</p>
                        <p className="pl-2"><Frame cmd='pk i u' label='else'/> 'eficiente' <Frame cmd='ylw i u' label='end'/>; <b>-- Poderia ser: when avaliacao_guia &gt; 4.7 then 'eficiente' END;</b></p>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Frame cmd='d-cyan i !u' label='--⬩➤ Ex. 3'/> <b>caso repetitivo (SGBD não permite criar alias e repassar), quer usar no <Frame cmd='u' label='group by'/> e passar pro <Frame cmd='u' label='select'/>, mas precisa repetir no <Frame cmd='u' label='select'/></b></p>
                        <p><Sql word='select'/></p> 
                        <p><Frame cmd='ylw i u' label='case'/> </p>
                        <p className="pl-2"><Frame cmd='pool i u' label='when'/> avaliacao_guia &lt; 4 <Frame cmd='pool i u' label='then'/> 'duvidoso'</p>
                        <p className="pl-2"><Frame cmd='pool i u' label='when'/> avaliacao_guia &lt;= 4.7 <Frame cmd='pool i u' label='then'/> 'adequado'</p>
                        <p className="pl-2"><Frame cmd='pk i u' label='else'/> 'eficiente' <b>-- Poderia ser: when avaliacao_guia &gt; 4.7 then 'eficiente'</b></p>
                        <p><Frame cmd='ylw i u' label='end'/> <Sql word='as'/> <Frame cmd='blue i !u' label='qualidade'/>, <Sql word='count(*)'/></p>
                        <p><Sql word='from'/> passeio</p>
                        <p><Frame cmd='cream i u' label='group by'/> <Frame cmd='ylw i u' label='case'/> </p>
                        <p className="pl-2"><Frame cmd='pool i u' label='when'/> avaliacao_guia &lt; 4 <Frame cmd='pool i u' label='then'/> 'duvidoso'</p>
                        <p className="pl-2"><Frame cmd='pool i u' label='when'/> avaliacao_guia &lt;= 4.7 <Frame cmd='pool i u' label='then'/> 'adequado'</p>
                        <p className="pl-2"><Frame cmd='pk i u' label='else'/> 'eficiente' <Frame cmd='ylw i u' label='end'/>; <b>-- Poderia ser: when avaliacao_guia &gt; 4.7 then 'eficiente' END;</b></p>
                    </div>
                </div>

            </div>
        </>
    )
}
