

import { Frame } from "../../shared/Frame"
import { Hint } from "../../shared/Hint"
import { Sql } from "../../shared/Sql"

export function JoinCasePolyreference() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="case-polyref-title-join" className="mv-1">
                    <h2 className="case-header">Caso: Polireferência</h2>
                </div>

                <div id="case-polyref-body-join" className="flex column gap-sm theory-layout">
                    <p>⬩➤ Quando uma tabela <Frame cmd='' label='possui referência em mais de um local'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ No exemplo abaixo'/>, a tabela <Frame cmd='' label='tabela'/> <Frame cmd='ylw i !u' label='dono'/> <Frame cmd='' label='existe em'/> mais de uma tabela: <Frame cmd='d-blue i !u' label='quarto_relatorio' /> e <Frame cmd='ppl i !u' label='dono_caracteristica' />.</p>
                    <p><Frame cmd='red i !u' label='⬩➤ Ao invés disso'/> <Frame cmd='ylw i !u' label='dono'/> ➜ <Frame cmd='d-blue i !u' label='quarto_relatorio' /> ➜ <Frame cmd='ppl i !u' label='dono_caracteristica' />.</p>
                    <p><Frame cmd='shine i !u' label='⬩➤ Fica isso'/> <Frame cmd='d-blue i !u' label='quarto_relatorio' /> ➡️ <Frame cmd='ylw i !u' label='dono'/> ⬅️ <Frame cmd='ppl i !u' label='dono_caracteristica' /></p>
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
                        <p><Sql word='select'/> * <Sql word='from'/> <Frame cmd='ylw i !u' label='dono' /></p>
                        <p><Frame cmd='blue i u' label='join' /> <Frame cmd='d-blue i !u' label='quarto_relatorio' /> <Frame cmd='blue i u' label='on' /> quarto_relatorio.<Frame cmd='pk i !u' label='dono_fk'/> = <Frame cmd='ylw i !u' label='dono'/>.<Frame cmd='cream i !u' label='dono_id' /></p>
                        <p><Frame cmd='blue i u' label='join' /> <Frame cmd='ppl i !u' label='dono_caracteristica' /> <Frame cmd='blue i u' label='on' /> dono_caracteristica.<Frame cmd='pk i !u' label='dono_fk'/> = <Frame cmd='ylw i !u' label='dono'/>.<Frame cmd='cream i !u' label='dono_id' />;</p>
                    </div>
                </div>

            </div>
        </>
    )
}
