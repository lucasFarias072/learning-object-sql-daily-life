

import { Frame } from "../../shared/Frame"
import { Hint } from "../../shared/Hint"
import { Sql } from "../../shared/Sql"

export function JoinFilterAndPlusOr() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="filter-join-where-and-or-title-join" className="mv-1">
                    <h2 className="case-header"><Frame cmd='u' label='where - and - or'/></h2>
                </div>

                <div id="filter-join-where-and-or-body-join" className="flex column gap-sm theory-layout">
                    <p>⬩➤ <Sql word='where'/> é a cláusula que <Frame cmd='red i !u' label='inicia o filtro que pode reduzir'/> a quantidade de linhas, <Frame cmd='' label='depois dele'/> vêm as condições <Sql word='and'/> e <Sql word='or'/>.</p>
                    <p>⬩➤ <Sql word='and'/> é <Frame cmd='red i !u' label='restritivo'/>: <Frame cmd='' label='todas as condições ligadas'/> precisam ser <Frame cmd='' label='verdadeiras'/>, para que uma <Frame cmd='' label='linha entre no resultado'/>.</p>
                    <p>⬩➤ <Sql word='or'/> é <Frame cmd='shine i !u' label='ampliador'/>: basta <Frame cmd='' label='uma das condições ser verdadeira'/>, para que uma <Frame cmd='' label='linha entre no resultado'/>.</p>
                    <p>⬩➤ Ao misturar <Sql word='or'/> e <Sql word='and'/>, pela <Frame cmd='shine i !u' label='regra de precedência'/>, <Sql word='and'/> é resolvido primeiro.</p>
                    <p>⬩➤ Os <Frame cmd='d-blue i !u' label='parênteses'/> <Frame cmd='' label='permitem definir'/> quais <Frame cmd='ylw i !u' label='condições'/> devem ser <Frame cmd='' label='resolvidas em conjunto'/> + <Frame cmd='d-blue i !u' label='dar precedência na sua resolução'/> ➜ resolve antes do <Sql word='and'/>.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example ex-join mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                        <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 1'/>
                        <Frame cmd='ylw p !u' label='condições'/>
                        <Frame cmd='blue p !u' label='condicionais'/>
                        <Frame cmd='d-blue p !u' label='aquilo que é resolvido primeiro'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> * <Sql word='from'/> semaforo</p>
                        <p><Sql word='join'/> local <Sql word='on'/> local.local_id = semaforo.local_sem_fk</p>
                        <p><Sql word='where'/> <Frame cmd='d-blue i !u' label='('/><Frame cmd='ylw i !u' label='duracao_cor_vermelha &gt; 25'/> <Frame cmd='blue i u' label='and'/> <Frame cmd='ylw i !u' label='duracao_cor_verde &gt; duracao_cor_vermelha'/><Frame cmd='d-blue i !u' label=')'/></p>
                        <p><Frame cmd='blue i u' label='or'/> <Frame cmd='ylw i !u' label="descricao_local = 'Frei Serafim'"/>;</p>
                    </div>
                </div>

                <div className="frame-example ex-join mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                        <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 2'/>
                        <Frame cmd='ylw p !u' label='condições'/>
                        <Frame cmd='blue p !u' label='condicionais'/>
                        <Frame cmd='d-blue p !u' label='aquilo que é resolvido primeiro'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> * <Sql word='from'/> semaforo</p>
                        <p><Sql word='join'/> local <Sql word='on'/> local.local_id = semaforo.local_sem_fk</p>
                        <p><Sql word='where'/> <Frame cmd='ylw i !u' label='duracao_cor_vermelha &gt; 25'/> <Frame cmd='blue i u' label='and'/></p>
                        <p><Frame cmd='d-blue i !u' label='('/><Frame cmd='ylw i !u' label='duracao_cor_verde &gt; duracao_cor_vermelha'/> <Frame cmd='blue i u' label='or'/> <Frame cmd='ylw i !u' label="descricao_local = 'Frei Serafim'"/><Frame cmd='d-blue i !u' label=')'/>;</p>
                    </div>
                </div>

            </div>
        </>
    )
}