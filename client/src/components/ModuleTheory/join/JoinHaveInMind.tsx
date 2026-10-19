

import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function JoinHaveInMind() {
    return (
        <>
            <div className="flex column gap-sm case">
                
                <div id="have-in-mind-title-join" className="mv-1">
                    <h2 className="title-what-is as-line round-title">Tenha em mente!</h2>
                </div>

                <div id="have-in-mind-body-join" className="flex column gap-xsm theory-layout">
                    <ul className="flex column gap-sm">
                        <li>⬩➤ Também é <Frame cmd='' label='conhecido'/> por <Sql word='inner join'/>, e tem <Frame cmd='' label='variações'/>, como <Sql word='left join'/>, <Sql word='right join'/>, <Sql word='full join'/>.</li>
                        <li>⬩➤ <Sql word='join'/> <Frame cmd='red i !u' label='retira programaticamente'/> qualquer <Frame cmd='' label='linha'/> que <Frame cmd='' label='não tiver chave correspondente'/> entre tabelas juntadas.</li>
                        <li>⬩➤ <Sql word='left join'/> <Frame cmd='' label='contorna'/> o trabalho feito por <Sql word='join'/>, pois <Frame cmd='' label='mantem chaves não correspondentes'/> nas tabelas juntadas.</li>
                        <li>⬩➤ <Sql word='left join'/> <Frame cmd='' label='também inverte'/> o resultado de <Sql word='join'/>, mantendo apenas <Frame cmd='' label='linhas sem correspondência'/> entre tabelas juntadas, via <Sql word='where'/> <Frame cmd='' label='campo'/> <Sql word='is null'/>.</li>
                        <li>⬩➤ <Sql word='join'/> é uma <Frame cmd='' label='consequência'/> da <Frame cmd='red i !u' label='necessidade'/> de <Frame cmd='' label='relacionar dados'/>, <Frame cmd='' label='divindo-os'/> entre tabelas distintas e <Frame cmd='' label='concedendo acesso'/> por um <Frame cmd='' label='dado em comum'/>.</li>
                        <li>⬩➤ É <Frame cmd='shine i !u' label='necessário'/> quando se quer <Frame cmd='' label='buscar, usar ou mostrar dados'/> que não existem num único local, é uma <Frame cmd='' label='porta de acesso'/>.</li>
                        {/* <Frame cmd='' label='abrir portas entre tabelas'/> por uma <Frame cmd='' label='cópia de acesso de uma para outra'/> */}
                    </ul>
                </div>

            </div>
        </>
    )
}
