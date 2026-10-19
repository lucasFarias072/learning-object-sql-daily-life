

import { Hint } from "../../shared/Hint"
import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function JoinCaseSelfJoin() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="case-self-join-title-join" className="mv-1">
                    <h2 className="case-header">Caso: <Frame cmd='u' label='self join' /></h2>
                </div>
                
                <div id="case-self-join-body-join" className="flex column gap-sm theory-layout">
                    <p>⬩➤ Uso de uma <Frame cmd='' label='mesma referência de uma tabela em um'/> <Sql word='join'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Porque isso seria necessário?' /></p>
                    <p>⬩➤ Por que uma <Frame cmd='' label='tabela' /> pode ter a mesma referência <Frame cmd='' label='repetida' />, <Frame cmd='' label='para fins'/> de assumir <Frame cmd='' label='papéis diferentes' />.</p>
                    <p>⬩➤ Ou seja, <Frame cmd='' label='o registro'/> de uma tabela <Frame cmd='' label='é duplicado ou até mais'/>, a <Frame cmd='' label='origem é a mesma'/>, mas cada com um <Frame cmd='red i !u' label='propósito distinto'/>.</p>
                    <p>⬩➤ Poderia ser algo como <Frame cmd='shine i !u' label='funcionário ➜ supervisor'/>, <Frame cmd='shine i !u' label='cidade saída ➜ cidade chegada'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ No exemplo  abaixo'/> ➜ <Frame cmd='' label='um objeto'/> assume <Frame cmd='' label='papel'/> de <Frame cmd='' label='alvo' /> e um <Frame cmd='' label='outro'/> objeto assume <Frame cmd='' label='papel'/> de <Frame cmd='' label='referência' /> dele.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Lâmpada & TV' /> ➜ lâmpada é o objeto alvo e a <Frame cmd='ui' label='tv' /> é o objeto referência pra <Frame cmd='' label='dizer onde está' /> a <Frame cmd='' label='lâmpada' />.</p>
                    <p>⬩➤ Os objetos pertencem a mesma origem/tabela e mesma coluna, mas os papéis são outros.</p>
                    <p>⬩➤ Se uma <Frame cmd='' label='consulta quiser saber sobre ambos papéis'/>, então <Frame cmd='d-cyan i !u' label='objeto' /> terá que ser <Frame cmd='' label='juntado'/> <Frame cmd='' label='2 vezes' />.</p>
                    <p><Frame cmd='shine i !u' label='⬩➤ Obs.' /> <Sql word='self join'/> <Frame cmd='shine i !u' label='precisa'/> <Frame cmd='pool i !u' label='usar apelidos' /> para <Frame cmd='' label='diferenciar referências idênticas' />.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example ex-join mt-1">
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
                            <Frame cmd='pool p !u' label="apelidos distintos" />
                        </div>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> * <Sql word='from'/> <Frame cmd='ylw i !u' label='dono' /></p>
                        <p><Frame cmd='blue i u' label='join' /> <Frame cmd='d-blue i !u' label='objeto_coordenada'/> <Frame cmd='blue i u' label='on' /> objeto_coordenada.<Frame cmd='pk i !u' label='dono_fk'/> = dono.<Frame cmd='cream i !u' label='dono_id'/> </p>
                        <p><Frame cmd='blue i u' label='join' /> <Frame cmd='ppl i !u' label='objeto' /> <Frame cmd='pool i !u' label='obj_alvo' /> <Frame cmd='blue i u' label='on' /> obj_alvo.<Frame cmd='cream i !u' label='objeto_id'/> = objeto_coordenada.<Frame cmd='pk i !u' label='objeto_fk_alvo'/></p>
                        <p><Frame cmd='blue i u' label='join' /> <Frame cmd='ppl i !u' label='objeto' /> <Frame cmd='pool i !u' label='obj_ref' /> <Frame cmd='blue i u' label='on' /> obj_ref.<Frame cmd='cream i !u' label='objeto_id'/> = objeto_coordenada.<Frame cmd='pk i !u' label='objeto_fk_ref'/>;</p>
                    </div>
                </div>

            </div>
        </>
    )
}
