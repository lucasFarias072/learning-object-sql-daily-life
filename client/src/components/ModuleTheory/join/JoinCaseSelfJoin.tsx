

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
                    <p>⬩➤ Quando acontece uma <Frame cmd='shine i !u' label='repetição de uma referência'/> numa <Frame cmd='' label='mesma tabela'/>.</p>
                    <p>⬩➤ Ou seja, <Frame cmd='' label='existe'/> uma <Frame cmd='red i !u' label='separação de papéis intencional'/> & <Frame cmd='shine i !u' label='preservação dessa separação'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Por que isso pode acontecer?' /></p>
                    <p>⬩➤ Por que a <Frame cmd='' label='repetição da referência de uma tabela' /> pode <Frame cmd='' label='ser usada'/> com a <Frame cmd='' label='finalidade de assumir'/> <Frame cmd='shine i !u' label='papéis diferentes' />.</p>
                    <p>⬩➤ Ou seja, <Frame cmd='' label='o registro ➜ chave estrangeira'/> de uma tabela <Frame cmd='' label='se repete duas ou mais vezes'/> numa <Frame cmd='' label='outra tabela'/>, ou seja: <Frame cmd='' label='mesma origem'/> ➜ <Frame cmd='red i !u' label='papel distinto'/>.</p>
                    <p>⬩➤ <Frame cmd='' label='Algo como'/> ➜ <Frame cmd='shine i !u' label='funcionário ➜ supervisor'/>, <Frame cmd='shine i !u' label='cidade saída ➜ cidade chegada'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ No exemplo  abaixo'/> ➜ <Frame cmd='' label='um objeto'/> assume <Frame cmd='shine i !u' label='papel de alvo'/> enquanto o <Frame cmd='' label='outro'/> objeto assume <Frame cmd='shine i !u' label='papel de referência'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex.: Lâmpada & TV' /> ➜ <Frame cmd='' label='lâmpada'/> é o <Frame cmd='shine i !u' label='objeto alvo'/> e a <Frame cmd='' label='tv' /> é o <Frame cmd='shine i !u' label='objeto referência'/> para <Frame cmd='' label='dizer onde está' /> a <Frame cmd='' label='lâmpada' />.</p>
                    <p>⬩➤ Se uma <Frame cmd='' label='consulta quiser saber sobre ambos os papéis'/>, então <Frame cmd='shine i !u' label='ambos os objetos' /> terão que ser <Frame cmd='' label='juntados'/> em <Sql word='join'/> <Frame cmd='red i !u' label='diferentes'/>.</p>
                    <p><Frame cmd='shine i !u' label='⬩➤ Obs.' /> <Sql word='self join'/> <Frame cmd='shine i !u' label='precisa usar'/> <Frame cmd='pool i !u' label='apelidos' /> para <Frame cmd='red i !u' label='diferenciar referências de uma mesma tabela' />.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example ex-join mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
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
