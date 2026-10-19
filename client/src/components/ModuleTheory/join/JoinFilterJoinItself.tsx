

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
                    <p>⬩➤ O <Frame cmd='' label='próprio'/> uso do <Sql word='join'/> cria um filtro, pois <Frame cmd='' label='filtrará'/> chaves entre tabelas cujas <Frame cmd='' label='linhas não correspondam na junção'/>.</p>
                    <p>⬩➤ Ocorre uma <Frame cmd='red i !u' label='exclusão automática por falta de correspondência'/> de chaves iguais.</p>
                    <p>⬩➤ Ou seja, é um <Frame cmd='' label='filtro não declarativo'/> da cláusula.</p>
                    <p>⬩➤ Experimente <Frame cmd='' label='modificar'/> o <Frame cmd='' label='exemplo abaixo'/> pela <Frame cmd='shine i !u' label='troca'/> do <Sql word='join'/> por <Sql word='left join'/> e verá <Frame cmd='shine i !u' label='uma linha a mais'/> na contagem.</p>
                    <p>⬩➤ Isso <Frame cmd='' label='evidencia o filtro aplicado'/> pelo <Sql word='join'/>.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example ex-join mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <h3 className="shine">Legenda ⬩➤</h3>
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
