



import { Hint } from "../../shared/Hint"
import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function SubqueryCaseNotIn() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="case-not-in-title-subquery" className="mv-1">
                    <h2 className="case-header">Caso: Not in</h2>
                </div>
                
                <div id="case-not-in-body-subquery" className="flex column gap-sm theory-layout">
                    <p>⬩➤ O <Sql word='in'/> existe num cenário onde há pelo menos 2 consultas: a mais interna oferece resultados para a mais externa.</p>
                    <p>⬩➤ O <Sql word='in'/> responde <Frame cmd='shine i !u' label='ao que corresponde'/> vindo do <Frame cmd='ylw i !u' label='lado de dentro'/> para aquilo <Frame cmd='' label='que está'/> do <Frame cmd='cream i !u' label='lado de fora'/>, o <Sql word='not in'/> <Frame cmd='red i !u' label='quer o oposto disso'/>.</p>
                    <p>⬩➤ <Sql word='not in'/> busca as <Frame cmd='red i !u' label='não correspondências'/>, <Frame cmd='' label='assim como'/> o <Sql word='left join'/> <Frame cmd='' label='combinado'/> com <Sql word='where campo is null'/>.</p>
                    <p>⬩➤ Ou seja, <Sql word='not in'/> <Frame cmd='' label='serve à perguntas de consultas'/> que falem sobre <Frame cmd='red i !u' label='ausência, não ter algo'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 1'/> e <Frame cmd='d-cyan i !u' label='⬩➤ Ex. 2'/> obtem os mesmos resultados, pois <Frame cmd='' label='respondem à mesma coisa'/> ➜ <Frame cmd='red i !u' label='não correspondência'/>.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <h3 className="shine">Legenda ⬩➤</h3>
                        <Frame cmd='cream p !u' label='consulta externa'/>
                        <Frame cmd='ylw p !u' label='subconsulta mais interna'/>
                        <Frame cmd='red p !u' label='não correspondência'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 1'/></p>
                        <p><Frame cmd='cream i u' label='select'/> descricao_algo <Sql word='from'/> algo</p>
                        <p><Sql word='where'/> algo_id <Frame cmd='red i u' label='not in'/> <Frame cmd='cream i !u' label='('/></p>
                        <p className="pl-4"><Frame cmd='ylw i u' label='select'/> algo_fk <Sql word='from'/> cor_algo</p>
                        <p><Frame cmd='cream i !u' label=')'/>;</p>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 2'/></p>
                        <p><Sql word='select'/> descricao_algo <Sql word='from'/> algo al</p>
                        <p><Frame cmd='red i u' label='left join'/> cor_algo cal <Sql word='on'/> cal.algo_fk = al.algo_id</p>
                        <p><Frame cmd='red i u' label='where'/> algo_fk <Frame cmd='red i u' label='is null'/>;</p>
                    </div>

                </div>
    
            </div>
        </>
    )
}
