

import { Hint } from "../../shared/Hint"
import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function JoinCaseJoinPlusOr() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="case-join-with-or-title-join" className="mv-1">
                    <h2 className="case-header">Caso: <Frame cmd='u' label='join + or' /></h2>
                </div>

                <div id="case-join-with-or-body-join" className="flex column gap-sm theory-layout">
                    <p>⬩➤ Uso de uma <Frame cmd='' label='tabela com duplicação de alguma referência' /> para <Frame cmd='' label='pegar algo' /> que <Frame cmd='' label='está dividido' /> nela <Frame cmd='' label='e juntar' />.</p>
                    <p>⬩➤ Ou seja, <Frame cmd='' label='existe'/> uma <Frame cmd='red i !u' label='separação de papéis'/> & <Frame cmd='shine i !u' label='intenção de desfazer essa separação'/>.</p>
                    <p>⬩➤ É o <Frame cmd='red i !u' label='inverso do caso' /> <Sql word='self join'/>.</p>
                    <p>⬩➤ <Sql word='join + or'/> busca <Frame cmd='' label='juntar algo' /> que está <Frame cmd='' label='dividido numa tabela' />.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex.: Lâmpada & TV' /> ➜ <Frame cmd='' label='mesma tabela de origem'/>, separadas por <Frame cmd='red i !u' label='propósitos diferentes'/>, que <Frame cmd='shine i !u' label='podem ser desfeitos'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ O que se quer saber agora ?' /> <Frame cmd='' label='todos os objetos'/> de alguém, então <Frame cmd='red i !u' label='não faz sentido separar'/> o que é <Frame cmd='shine i !u' label='alvo'/> do que é <Frame cmd='shine i !u' label='referência'/>.</p>
                    <p>⬩➤ Se <Frame cmd='' label='a consulta'/> <Frame cmd='red i !u' label='não distingue mais os papéis' />, por isso o <Sql word='join + or'/> é <Frame cmd='' label='apropriado' />.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <h3 className="shine">Legenda ⬩➤</h3>
                        
                        <div className="flex column gap-xsm">
                            <Frame cmd='ylw p !u' label='folha de papel 1'/>
                            <Frame cmd='d-blue p !u' label='folha de papel 2'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='ppl p !u' label='folha de papel 3'/>
                            <Frame cmd='blue p !u' label='cola'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='pk p !u' label="cópia da referência" />
                            <Frame cmd='cream p !u' label="referência" />
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='pool p !u' label="OR na junção" />
                        </div>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> * <Sql word='from'/> <Frame cmd='ylw i !u' label='dono' /></p>
                        <p><Frame cmd='blue i u' label='join' /> <Frame cmd='d-blue i !u' label='objeto_coordenada' /> objc <Frame cmd='blue i u' label='on' /> objc.<Frame cmd='pk i !u' label='dono_fk' /> = dono.<Frame cmd='cream i !u' label='dono_id' /></p>
                        <p><Frame cmd='blue i u' label='join' /> <Frame cmd='ppl i !u' label='objeto' /> obj <Frame cmd='blue i u' label='on' /> obj.<Frame cmd='cream i !u' label='objeto_id' /> = objc.<Frame cmd='pk i !u' label='objeto_fk_alvo' /> <Frame cmd='pool i u' label='or' /> obj.<Frame cmd='cream i !u' label='objeto_id' /> = objc.<Frame cmd='pk i !u' label='objeto_fk_ref' />;</p>
                    </div>
                </div>

            </div>
        </>
    )
}
