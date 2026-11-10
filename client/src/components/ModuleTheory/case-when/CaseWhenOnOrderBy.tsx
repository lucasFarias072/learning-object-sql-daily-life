



import { Frame } from "../../shared/Frame"
import { Hint } from "../../shared/Hint"
import { Sql } from "../../shared/Sql"

export function CaseWhenOnOrderBy() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="case-with-order-by-title-casewhen" className="mv-1">
                    <h2 className="case-header">Uso no <Frame cmd='u' label='order by'/></h2>
                </div>

                <div id="case-with-order-by-body-casewhen" className="flex column gap-sm theory-layout">
                    <p>⬩➤ O <Frame cmd='d-cyan i !u' label='exemplo anterior'/> resultou na <Frame cmd='shine i !u' label='criação'/> de uma <Frame cmd='' label='coluna customizada'/> no <Sql word='select'/>.</p>
                    <p>⬩➤ A <Frame cmd='' label='própria coluna'/> customizada <Frame cmd='' label='pode ser referenciada'/> em uma <Frame cmd='shine i !u' label='ordenação'/> ➜ <Sql word='order by'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Por que isso seria interessante?'/></p>
                    <div className="flex column gap-sm frame-indent">
                        <p className="pl-2">⬩➤ A <Frame cmd='' label='ordenação comum'/>, define ordem de campos e ordem alfabética, mas <Frame cmd='red i !u' label='não define ordem arbitrária'/> ➜ <Frame cmd='shine i !u' label='vontade do usuário'/>.</p>
                        <p className="pl-2">⬩➤ Com <Sql word='case when'/> + <Sql word='order by'/> ➜ <Frame cmd='' label='valores da coluna customizada'/> podem ser <Frame cmd='shine i !u' label='usados para ordenar de maneira livre'/>.</p>
                        <p className="pl-2">⬩➤ Os <Frame cmd='shine i !u' label='valores'/> vindos do <Sql word='case when'/> e <Frame cmd='' label='usados'/> no <Sql word='order by'/>, <Frame cmd='shine i !u' label='são pesos'/> dados pra quem é <Frame cmd='' label='chamado primeiro'/> ➜ menor valor ➜ vem primeiro na ordenação.</p>
                    </div>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 1'/> ➜ os <Frame cmd='' label='valores'/> gerados pelo <Sql word='case when'/> no <Sql word='select'/>, são <Frame cmd='' label='aplicados'/> ao <Sql word='order by'/> através da <Frame cmd='blue i !u' label='chamada do alias/apelido'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 1'/> ➜ os <Frame cmd='' label='valores'/> são <Frame cmd='d-blue i !u' label='posicionados por peso'/> ➜ <Frame cmd='' label='quanto menor'/> o valor ➜ <Frame cmd='' label='mais cedo ele aparece'/> na ordenação.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example ex-case-when mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                        <div className="flex column gap-xsm">
                            <Frame cmd='ylw p !u' label='coluna customizada (1ª)'/>
                            <Frame cmd='pool p !u' label='cláusulas lógicas necessárias'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='pk p !u' label='dado bruto'/>
                            <Frame cmd='cream p !u' label='descendência'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='ylw p !u' label='coluna customizada na ordenação'/>
                            <Frame cmd='d-blue p !u' label='pesos dados na ordenação'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='blue p !u' label='apelido para os casos'/>
                        </div>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> descricao_local,</p>
                        <p><Frame cmd='ylw i u' label='case'/></p> 
                        <p className="pl-2"><Frame cmd='pool i u' label='when'/> <Frame cmd='pk i !u' label='local_tipo_fk'/> = 2 <Frame cmd='pool i u' label='then'/> <Frame cmd='cream i !u' label="'Avenida'" /></p>
                        <p className="pl-2"><Frame cmd='pool i u' label='when'/> <Frame cmd='pk i !u' label='local_tipo_fk'/> = 14 <Frame cmd='pool i u' label='then'/> <Frame cmd='cream i !u' label="'Bairro'" /></p> 
                        <p className="pl-2"><Frame cmd='pool i u' label='when'/> <Frame cmd='pk i !u' label='local_tipo_fk'/> = 12 <Frame cmd='pool i u' label='then'/> <Frame cmd='cream i !u' label="'Rua'" /></p>
                        <p className="pl-2"><Frame cmd='pool i u' label='when'/> <Frame cmd='pk i !u' label='local_tipo_fk'/> = 1 <Frame cmd='pool i u' label='then'/> <Frame cmd='cream i !u' label="'Praça'" /></p> 
                        <p className="pl-2"><Sql word='else'/> <Frame cmd='cream i !u' label="'...'" /></p>
                        <p><Frame cmd='ylw i u' label='end'/> <Sql word='as'/> <Frame cmd='blue i !u' label='dominio'/></p>
                        <p><Sql word='from'/> local</p>
                        <p><Sql word='where'/> <Frame cmd='blue i !u' label='dominio'/> &lt;&gt; '...'</p>
                        <p><Sql word='order by'/> <Frame cmd='ylw i u' label='case'/> <Frame cmd='blue i !u' label='dominio'/></p> 
                        <p className="pl-2"><Frame cmd='pool i u' label='when'/> <Frame cmd='cream i !u' label="'Rua'" /> <Frame cmd='pool i u' label='then'/> <Frame cmd='d-blue i u' label='1'/></p>
                        <p className="pl-2"><Frame cmd='pool i u' label='when'/> <Frame cmd='cream i !u' label="'Praça'" /> <Frame cmd='pool i u' label='then'/> <Frame cmd='d-blue i u' label='2'/></p> 
                        <p className="pl-2"><Frame cmd='pool i u' label='when'/> <Frame cmd='cream i !u' label="'Avenida'" /> <Frame cmd='pool i u' label='then'/> <Frame cmd='d-blue i u' label='3'/></p>
                        <p className="pl-2"><Frame cmd='pool i u' label='when'/> <Frame cmd='cream i !u' label="'Bairro'" /> <Frame cmd='pool i u' label='then'/> <Frame cmd='d-blue i u' label='4'/></p> 
                        <p><Frame cmd='ylw i u' label='end'/>;</p>
                    </div>
                </div>

            </div>
        </>
    )
}
