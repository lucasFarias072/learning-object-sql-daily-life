



import { Hint } from "../../shared/Hint"
import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function CaseWhenOnAll() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="introduction-head" className="mv-1">
                    <h2 className="case-header">Uso no <Frame cmd='u' label='select, group by, order by'/></h2>
                </div>
                
                <div className="flex column gap-sm theory-layout">
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Esse exemplo'/> servirá apenas para <Frame cmd='' label='demonstrar a possibilidade'/> do uso de <Sql word='case when'/> em <Frame cmd='' label='lugares combinados'/>.</p>
                    <p>⬩➤ O <Sql word='select'/> <Frame cmd='' label='configura e passa o caso'/> ➜ <Sql word='group by'/> assim como <Sql word='order by'/> <Frame cmd='' label='usa valores do caso'/> para criar ordenação customizada.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Tabelas?'/> <Frame cmd='d-blue i !u' label='cor'/> (usar os nomes das cores no caso) ➜ <Frame cmd='ppl i !u' label='algo'/> (gerar grupos desses valores) ➜ <Frame cmd='cream i !u' label='cor_algo'/> (todos os registro de: cores, algo).</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Valores criados?'/> <Frame cmd='' label='primária, extremo e híbrida'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Criados com base em qual coluna?'/> <Frame cmd='' label='descricao_cor'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Coluna customizada resultante?'/> <Frame cmd='blue i !u' label='grupo_cor'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Base de criação dos grupos?'/> <Frame cmd='' label='descricao_algo'/> + <Frame cmd='blue i !u' label='grupo_cor ➜ apelido da coluna customizada'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ordenação?'/> <Frame cmd='' label='valores definidos em'/> <Frame cmd='blue i !u' label='grupo_cor'/>.</p>
                    <p>⬩➤ O <Frame cmd='' label='resultado'/> disso é o que a consulta <Frame cmd='' label='abaixo'/>, retorna.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <div className="flex column gap-xsm">
                            <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='ylw p !u' label='Origem do caso e uso do caso (seus valores)'/>
                            <Frame cmd='p !u' label='Cláusulas lógicas necessárias'/>
                            <Frame cmd='cream p !u' label='Tabela onde cor e algo se encontram juntos'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='blue p !u' label='Apelido para o caso'/>
                            <Frame cmd='pk p !u' label='Cláusula lógica opcional'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='d-blue p !u' label='Tabela para dar valores às cores'/>
                            <Frame cmd='ppl p !u' label='Tabela para dar valores aos grupos'/>
                        </div>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> descricao_algo,</p>
                        <p><Frame cmd='ylw i u' label='case'/></p>
                        <p className="pl-2"><Frame cmd='pool i u' label='when'/> descricao_cor in ('vermelho', 'verde', 'azul') <Frame cmd='pool i u' label='then'/> 'primária'</p>
                        <p className="pl-2"><Frame cmd='pool i u' label='when'/> descricao_cor in ('preto', 'branco') <Frame cmd='pool i u' label='then'/> 'extremo'</p>
                        <p className="pl-2"><Frame cmd='pk i u' label='else'/> 'híbrida' <b>-- aqui é melhor ser 'else' senão teria que botar todas as outras cores</b></p>
                        <p><Frame cmd='ylw i u' label='end'/> <Sql word='as'/> <Frame cmd='blue i !u' label='grupo_cor'/>, <Sql word='count(*)'/> <Sql word='as'/> encontradas</p>
                        <p><Sql word='from'/> <Frame cmd='d-blue i !u' label='cor'/> c</p>
                        <p><Sql word='join'/> <Frame cmd='cream i !u' label='cor_algo'/> cal <Sql word='on'/> cal.cor_fk = c.cor_id</p>
                        <p><Sql word='join'/> <Frame cmd='ppl i !u' label='algo'/> al <Sql word='on'/> al.algo_id = cal.algo_fk</p>
                        <p><Sql word='group by'/> descricao_algo, <Frame cmd='blue i !u' label='grupo_cor'/></p>
                        <p><Sql word='order by'/> <Frame cmd='ylw i u' label='case'/> <Frame cmd='blue i !u' label='grupo_cor'/></p>
                        <p className="pl-2"><Frame cmd='pool i u' label='when'/> 'primária' <Frame cmd='pool i u' label='then'/> 1</p>
                        <p className="pl-2"><Frame cmd='pool i u' label='when'/> 'híbrida' <Frame cmd='pool i u' label='then'/> 2</p>
                        <p className="pl-2"><Frame cmd='pool i u' label='when'/> 'extremo' <Frame cmd='pool i u' label='then'/> 3 <b>-- poderia ser: else '3'</b></p>
                        <p><Frame cmd='ylw i u' label='end'/>;</p>
                    </div>
                </div>

            </div>
        </>
    )
}
