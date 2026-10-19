

import { Frame } from "../../shared/Frame"
import { Hint } from "../../shared/Hint"
import { Sql } from "../../shared/Sql"

export function JoinCaseSequential() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="case-sequential-title-join" className="mv-1">
                    <h2 className="case-header">Caso: Sequencial</h2>
                </div>

                <div id="case-sequential-body-join" className="flex column gap-sm theory-layout">
                    <p>⬩➤ <Frame cmd='' label='Uso em cadeia'/> entre tabelas, se juntam sequencialmente devido uma <Frame cmd='' label='dependência imediata'/>.</p>
                    <p>⬩➤ A <Frame cmd='' label='tabela anterior/inicial'/> serve de <Frame cmd='' label='porta'/> de entrada <Frame cmd='' label='para a seguinte'/>.</p>
                    <p>⬩➤ Nesse contexto, as tabelas <Frame cmd='ylw i !u' label='objeto' />, <Frame cmd='d-blue i !u' label='objeto_coordenada' /> e <Frame cmd='ppl i !u' label='coordenada' /> se encadeiam sequencialmente.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example ex-join mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <h3 className="shine">Legenda ⬩➤</h3>
                        <Frame cmd='ylw p !u' label='folha de papel 1'/>
                        <Frame cmd='d-blue p !u' label='folha de papel 2'/>
                        <Frame cmd='ppl p !u' label='folha de papel 3'/>
                        <Frame cmd='blue p !u' label='cola'/>
                        <Frame cmd='pk p !u' label="cópia da referência" />
                        <Frame cmd='cream p !u' label="referência" />
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> * <Sql word='from'/> <Frame cmd='ylw i !u' label='objeto' /></p>
                        <p><Frame cmd='blue i u' label='join' /> <Frame cmd='d-blue i !u' label='objeto_coordenada' /> <Frame cmd='blue i u' label='on' /> objeto_coordenada.<Frame cmd='pk i !u' label='objeto_fk_ref'/> = objeto.<Frame cmd='cream i !u' label='objeto_id' /></p>
                        <p><Frame cmd='blue i u' label='join' /> <Frame cmd='ppl i !u' label='coordenada' /> <Frame cmd='blue i u' label='on' /> coordenada.<Frame cmd='cream i !u' label='coordenada_id' /> = objeto_coordenada.<Frame cmd='pk i !u' label='coordenada_fk'/>;</p>
                    </div>
                </div>

            </div>
        </>
    )
}
