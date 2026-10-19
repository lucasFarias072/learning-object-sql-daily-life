



import { Hint } from "../../shared/Hint"
import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function SubqueryCaseEquals() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="case-equals-title-subquery" className="mv-1">
                    <h2 className="case-header">Caso com igualdade</h2>
                </div>

                <div id="case-equals-body-subquery" className="flex column gap-sm theory-layout">
                    <p>⬩➤ <Frame cmd='shine i !u' label='Subconsultas'/> <Frame cmd='' label='usam'/> <Sql word='where'/> + <Sql word='in'/> ou <Sql word='not in'/> como <Frame cmd='' label='comparador de diversos valores'/> ➜ <Frame cmd='' label='retorno de mais de um valor'/>.</p>
                    <p>⬩➤ <Frame cmd='' label='Além destes'/> a <Frame cmd='shine i !u' label='igualdade'/> <Sql word='='/> <Frame cmd='' label='pressupõe'/> que cada <Frame cmd='' label='subconsulta'/> nessa forma <Frame cmd='' label='retorne no máximo um valor'/>.</p>
                    <p>⬩➤ <Frame cmd='shine i !u' label='Seu uso'/> está <Frame cmd='' label='mais associado'/> à situações em que:</p>
                    <p className="pl-2">⬩➤ A <Frame cmd='' label='subconsulta criará a última da cadeia'/> de subconsultas, <Frame cmd='' label='ou seja'/>, ela é a <Frame cmd='' label='penúltima subconsulta'/>.</p>
                    <p className="pl-2">⬩➤ A penúltima subconsulta <Frame cmd='' label='buscará por algo'/> que <Frame cmd='' label='se sabe'/> que o <Frame cmd='' label='retorno é valor único'/>.</p>
                    <p><Frame cmd='shine i !u' label='⬩➤ Obs.'/> A igualdade é uma opção, mas o <Sql word='in'/> <Frame cmd='' label='obtem resultados também para 1'/>.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example ex-subquery mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <div className="flex column gap-xsm">
                            <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                            <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 1'/>
                        </div>
                        <Frame cmd='cream p !u' label='consulta externa'/>
                        <Frame cmd='ylw p !u' label='declaração da subconsulta'/>
                        <Frame cmd='blue p !u' label='igualdade = espera 1 resultado'/> 
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Frame cmd='cream i u' label='select'/>  membro_fk <Sql word='from'/> membro_rotina</p>
                        <p><Sql word='where'/> area_fk <Frame cmd='blue i !u' label='='/> <Frame cmd='cream i !u' label='('/></p>
                        <p className="pl-2"><Frame cmd='ylw i u' label='select'/> area_id <Sql word='from'/> area <Sql word='where'/> descricao_area = 'Corredor'</p>
                        <p><Frame cmd='cream i !u' label=')'/>;</p>
                    </div>
                </div>

                <div className="frame-example ex-subquery mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <div className="flex column gap-xsm">
                            <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                            <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 2'/>
                        </div>
                        <Frame cmd='ylw p !u' label='consulta mais interna'/>
                        <Frame cmd='d-blue p !u' label='consulta logo acima/intermediária'/>
                        <Frame cmd='cream p !u' label='consulta externa'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Frame cmd='cream i u' label='select'/>  apelido <Sql word='from'/> sinuquista</p>
                        <p><Sql word='where'/> sinuquista_id <Frame cmd='blue i !u' label='in'/> <Frame cmd='cream i !u' label='('/></p>
                        <p className="pl-2"><Frame cmd='d-blue i u' label='select'/> sinuquista_fk_dono_ficha <Sql word='from'/> partida_sinuca</p>
                        <p className="pl-2"><Sql word='where'/> sinuca_fk <Frame cmd='blue i !u' label='='/> <Frame cmd='d-blue i !u' label='('/></p>
                        <p className="pl-4"><Frame cmd='ylw i u' label='select'/> sinuca_id <Sql word='from'/> sinuca <Sql word='where'/> descricao_sinuca = 'Sinuca ordinária'</p>
                        <p className="pl-2"><Frame cmd='d-blue i !u' label=')'/></p>
                        <p><Frame cmd='cream i !u' label=')'/>;</p>
                    </div>
                </div>

            </div>
        </>
    )
}
