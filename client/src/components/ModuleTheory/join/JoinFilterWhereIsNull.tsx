

import { Frame } from "../../shared/Frame"
import { Hint } from "../../shared/Hint"
import { Sql } from "../../shared/Sql"

export function JoinFilterWhereIsNull() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="filter-is-null-title-join" className="mv-1">
                    <h2 className="case-header"><Frame cmd='u' label='is null'/></h2>
                </div>

                <div id="filter-is-null-body-join" className="flex column gap-sm theory-layout">
                    <p>⬩➤ A expressão <Frame cmd='' label='serve tanto'/> para <Sql word='join'/> <Frame cmd='' label='quanto'/> para <Sql word='left join'/>.</p>
                    <p>⬩➤ Para o <Sql word='join'/>, <Frame cmd='' label='usar em campos'/> que <Frame cmd='shine i !u' label='permitem valores nulos'/> que <Frame cmd='red i !u' label='não são chave estrangeira'/> e <Frame cmd='shine i !u' label='sua tabela pode estar no'/> <Sql word='join'/>.</p>
                    <p>⬩➤ Para o <Sql word='join'/>, <Frame cmd='' label='usar em campos'/> que <Frame cmd='shine i !u' label='permitem valores nulos'/> & <Frame cmd='shine i !u' label='são chave estrangeira'/> mas <Frame cmd='red i !u' label='sua tabela não pode estar no'/> <Sql word='join'/>.</p>
                    <p>⬩➤ Para o <Sql word='left join'/>, <Frame cmd='' label='usar em campos'/> que <Frame cmd='shine i !u' label='permitem valores nulos'/> & <Frame cmd='shine i !u' label='são chave estrangeira'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 1'/> note que a <Frame cmd='' label='coluna'/> <Frame cmd='red i !u' label='não serve de chave estrangeira'/>, então o <Sql word='join'/> <Frame cmd='' label='não interfere no resultado'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 2'/> note que a <Frame cmd='' label='coluna'/> <Frame cmd='shine i !u' label='serve de chave estrangeira'/>, mas ela <Frame cmd='red i !u' label='não deve fazer parte'/> do <Sql word='join'/> (<Frame cmd='red i !u' label='senão sumiria'/> nos resultados).</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 3'/> note que a <Frame cmd='' label='coluna'/> <Frame cmd='shine i !u' label='serve de chave estrangeira'/>, o <Sql word='join'/> precisa <Frame cmd='' label='ser convertido para'/> <Sql word='left join'/> para funcionar.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example ex-join mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <div className="flex column gap-xsm">
                            <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                            <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 1'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='ylw p !u' label='folha de papel 1'/>
                            <Frame cmd='d-blue p !u' label='folha de papel 2'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='cream p !u' label="referência" />
                            <Frame cmd='pk p !u' label="cópia da referência" />
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='blue p !u' label='cola'/>
                            <Frame cmd='ppl p !u' label='filtro pro join'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='pool p !u' label='campo anulável de tabela'/>
                            <Frame cmd='pool p !u' label='que pode entrar com join normalmente'/>
                        </div>
                    </div>
                    
                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> * <Sql word='from'/> <Frame cmd='ylw i !u' label='quarto_relatorio'/> qr</p>
                        <p><Frame cmd='blue i u' label='join'/> <Frame cmd='d-blue i !u' label='dono'/> <Frame cmd='blue i u' label='on'/> dono.<Frame cmd='cream i !u' label='dono_id'/> = qr.<Frame cmd='pk i !u' label='dono_fk'/></p>
                        <p><Frame cmd='ppl i u' label='where'/> qr.<Frame cmd='pool i !u' label='mes_adesao'/> <Frame cmd='ppl i u' label='is null'/>;</p>
                    </div>
                </div>
                
                <div className="frame-example ex-join mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <div className="flex column gap-xsm">
                            <h3 className="shine">Legenda ⬩➤</h3>
                            <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 2'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='ylw p !u' label='folha de papel 1'/>
                            <Frame cmd='d-blue p !u' label='folha de papel 2'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='cream p !u' label="referência" />
                            <Frame cmd='pk p !u' label="cópia da referência" />
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='blue p !u' label='cola'/>
                            <Frame cmd='ppl p !u' label='filtro pro join'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='pool p !u' label='campo estrangeiro anulável de tabela'/>
                            <Frame cmd='pool p !u' label='que não pode entrar com join normalmente'/>
                        </div>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> * <Sql word='from'/> <Frame cmd='ylw i !u' label='avistamento'/> avi</p>
                        <p><Frame cmd='blue i u' label='join'/> <Frame cmd='d-blue i !u' label='membro_familia'/> mfam <Frame cmd='blue i u' label='on'/> mfam.<Frame cmd='cream i !u' label='membro_id'/> = avi.<Frame cmd='pk i !u' label='membro_visto_fk'/></p>
                        <p><Frame cmd='ppl i u' label='where'/> avi.<Frame cmd='pool i !u' label='algo_visto_fk'/> <Frame cmd='ppl i u' label='is null'/>;</p>
                    </div>
                </div>

                <div className="frame-example ex-join mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <div className="flex column gap-xsm">
                            <h3 className="shine">Legenda ⬩➤</h3>
                            <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 3'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='ylw p !u' label='folha de papel 1'/>
                            <Frame cmd='d-blue p !u' label='folha de papel 2'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='cream p !u' label="referência" />
                            <Frame cmd='pk p !u' label="cópia da referência" />
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='blue p !u' label='cola'/>
                            <Frame cmd='ppl p !u' label='filtro pro join'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='pool p !u' label='campo estrangeiro anulável de tabela'/>
                            <Frame cmd='pool p !u' label='que só entra se for com left join'/>
                        </div>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> * <Sql word='from'/> <Frame cmd='ylw i !u' label='pessoa'/> pess</p>
                        <p><Frame cmd='blue i u' label='left join'/> <Frame cmd='d-blue i !u' label='guia'/> <Frame cmd='blue i u' label='on'/> guia.<Frame cmd='cream i !u' label='pessoa_fk'/> = pess.<Frame cmd='pk i !u' label='pessoa_id'/></p>
                        <p><Frame cmd='ppl i u' label='where'/> guia.<Frame cmd='pool i !u' label='guia_id'/> <Frame cmd='ppl i u' label='is null'/>;</p>
                    </div>
                </div>

            </div>
        </>
    )
}
