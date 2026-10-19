

import { Hint } from "../../shared/Hint"
import { Sql } from "../../shared/Sql"
import { Frame } from "../../shared/Frame"

export function JoinCaseMinimum() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="case-minimum-title-join" className="mv-1">
                    <h2 className="case-header">Caso mínimo</h2>
                </div>

                <div id="case-minimum-body-join" className="flex column gap-sm theory-layout">
                    <p>⬩➤ O caso mínimo para o <Sql word='join'/> são <Frame cmd='' label='duas tabelas'/>.</p>
                    <p>⬩➤ A tabela <Frame cmd='ylw i !u' label='local'/> tem um <Frame cmd='' label='dado único transferível'/> para a tabela <Frame cmd='d-blue i !u' label='pessoa'/>.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example ex-join mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <h3 className="shine">Legenda ⬩➤</h3>
                        <Frame cmd='ylw p !u' label='folha de papel 1'/> 
                        <Frame cmd='d-blue p !u' label='folha de papel 2'/> 
                        <Frame cmd='blue p !u' label='cola'/>
                        <Frame cmd='cream p !u' label='cópia da referência'/>
                        <Frame cmd='pk p !u' label='referência'/> 
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> nome, descricao_local <Sql word='from'/> <Frame cmd='ylw i !u' label='local'/></p>
                        <p><Frame cmd='blue i u' label='join'/> <Frame cmd='d-blue i !u' label='pessoa'/> <Frame cmd='blue i u' label='on'/> pessoa.<Frame cmd='cream i !u' label='local_pess_fk'/> = local.<Frame cmd='pk i !u' label='local_id'/>;</p>
                    </div>
                </div>

            </div>
        </>
    )
}
