

import { Frame } from "../../shared/Frame"
import { Hint } from "../../shared/Hint"
import { Sql } from "../../shared/Sql"

export function JoinFilterJoinItself() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="filter-join-itself-title-join" className="mv-1">
                    <h2 className="case-header">Próprio <Frame cmd='u' label='join'/></h2>
                </div>

                <div id="filter-join-itself-body-join" className="flex column gap-sm theory-layout">
                    <p>⬩➤ O <Frame cmd='' label='próprio'/> uso do <Sql word='join'/> cria um filtro, pois quando <Frame cmd='red i !u' label='não encontra correspondência'/>, a <Frame cmd='shine i !u' label='linha que satisfez essa condição'/> é <Frame cmd='red i !u' label='retirada'/> do resultado.</p>
                    <p>⬩➤ <Sql word='join'/> está <Frame cmd='' label='programado'/> para fazer uma <Frame cmd='red i !u' label='exclusão automática por falta de correspondência'/> entre a chave primária e a estrangeira.</p>
                    <p>⬩➤ <Frame cmd='shine i !u' label='Experimente modificar'/> o <Frame cmd='d-cyan i !u' label='exemplo abaixo'/> pela <Frame cmd='shine i !u' label='troca'/> do <Sql word='join'/> por <Sql word='left join'/> e verá <Frame cmd='shine i !u' label='uma linha a mais'/> na contagem.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example ex-join mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                        <Frame cmd='ylw p !u' label='folha de papel 1'/>
                        <Frame cmd='d-blue p !u' label='folha de papel 2'/>
                        <Frame cmd='pk p !u' label="cópia da referência" />
                        <Frame cmd='cream p !u' label="referência" />
                        <Frame cmd='blue p !u' label='cola'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> <Sql word='count(*)'/> <Sql word='from'/> <Frame cmd='' label='('/></p>
                        <p className="pl-2"><Sql word='select'/> * <Sql word='from'/> <Frame cmd='ylw i !u' label='membro_familia'/> mfam</p>
                        <p className="pl-2"><Frame cmd='blue i u' label='join'/> <Frame cmd='d-blue i !u' label='membro_rotina'/> mrot <Frame cmd='blue i u' label='on'/> mrot.<Frame cmd='pk i !u' label='membro_fk'/> = mfam.<Frame cmd='cream i !u' label='membro_id'/></p>
                        <p><Frame cmd='' label=')'/>;</p>
                    </div>
                </div>

            </div>
        </>
    )
}
