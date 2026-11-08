

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
                        <li>⬩➤ Também é <Frame cmd='' label='conhecido'/> por <Sql word='inner join'/>, e tem <Frame cmd='shine i !u' label='variações'/>, como <Sql word='left join'/>, <Sql word='right join'/>, <Sql word='full join'/>.</li>
                        <li>⬩➤ É <Frame cmd='shine i !u' label='necessário quando'/> se quer <Frame cmd='' label='buscar, usar ou mostrar dados alheios'/> que se relacionam de algum modo. É uma <Frame cmd='' label='porta de acesso'/>.</li>
                        <li>⬩➤ <Sql word='join'/> <Frame cmd='red i !u' label='retira programaticamente'/> qualquer <Frame cmd='' label='linha'/> que <Frame cmd='red i !u' label='não tiver'/> <Frame cmd='' label=' chave correspondente entre'/> <Frame cmd='shine i !u' label='tabelas juntadas'/>.</li>
                        <li>⬩➤ <Sql word='left join'/> <Frame cmd='shine i !u' label='contorna'/> o trabalho feito por <Sql word='join'/>, pois <Frame cmd='shine i !u' label='mantém linhas sem correspondência de chave'/> entre as tabelas juntadas.</li>
                        <li>⬩➤ <Sql word='left join'/> <Frame cmd='' label='também pode obter somente'/> <Frame cmd='shine i !u' label='linhas sem correspondência'/> <Frame cmd='' label='através'/> do uso de ➜ <Sql word='where campo is null'/>.</li>
                    </ul>
                </div>

            </div>
        </>
    )
}
