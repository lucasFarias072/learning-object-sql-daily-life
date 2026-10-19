

import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"
import { Hint } from "../../shared/Hint"

export function AggregateCaseWhere() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="case-where-title-aggregate" className="mv-1">
                    <h2 className="case-header"><Frame cmd='u' label='group by + where'/></h2>
                </div>

                <div id="case-where-body-aggregate" className="flex column gap-sm theory-layout">
                    <p>⬩➤ O uso da cláusula <Sql word='where'/> age como <Frame cmd='' label='filtro na tabela'/> afetada pelo agrupamento, <Frame cmd='shine i !u' label='antes do agrupamento'/> acontecer.</p>
                    <p>⬩➤ Basicamente, <Frame cmd='shine i !u' label='reduz a carga de trabalho'/> que chega ao <Sql word='group by'/>.</p>
                    <p>⬩➤ Na lógica proposta do <Frame cmd='d-blue i !u' label='dicionário'/> ➜ <Frame cmd='ylw i !u' label='sessão/palavra'/> ➜ <Frame cmd='blue i !u' label='significado'/>, <Sql word='where'/> trabalha como <Frame cmd='red i !u' label='redutor do conteúdo'/> do <Frame cmd='d-blue i !u' label='dicionário'/>.</p>
                    <p>⬩➤ O <Frame cmd='' label='uso'/> do <Sql word='where'/> equivaleria a <Frame cmd='red i !u' label='rasgar/filtrar'/> o <Frame cmd='d-blue i !u' label='dicionário'/> e <Frame cmd='' label='usar apenas parte'/> dele.</p>
                    <p>⬩➤ <Frame cmd='' label='Quanto mais condições'/> juntadas ao <Sql word='where'/>, mais enxuta fica a tabela resultante e <Frame cmd='red i !u' label='menos'/> <Frame cmd='ylw i !u' label='agrupamentos/grupos'/> o <Sql word='group by'/> fará.</p>
                    <p><Frame cmd='shine i !u' label='⬩➤ Obs'/> <Sql word='where'/> <Frame cmd='red i !u' label='não aceita funções agregadoras'/>, elas <Frame cmd='' label='são aplicadas à grupos de dados'/>, <Sql word='where'/> <Frame cmd='' label='vem antes disso acontecer'/>.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example ex-aggregate mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <h3 className="shine">Legenda ⬩➤</h3>
                        <div className="flex column gap-xsm">
                            <Frame cmd='ylw p !u' label='palavra = valores únicos que formam grupos'/>
                            <Frame cmd='red p !u' label='filtro(s) que anula certos grupos'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='d-blue p !u' label='dicionário'/>
                            <Frame cmd='blue p !u' label='significado'/>
                        </div>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> ficha_fk, <Frame cmd='blue i u' label='count(*)'/> <Sql word='from'/> <Frame cmd='d-blue i !u' label='partida_sinuca'/></p>
                        <p><Frame cmd='red i u' label='where'/> duracao_seg &gt; 360</p>
                        <p><Sql word='group by'/> <Frame cmd='ylw i !u' label='ficha_fk'/>;</p>
                    </div>
                    
                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> ficha_fk, <Frame cmd='blue i u' label='count(*)'/> <Sql word='from'/> <Frame cmd='d-blue i !u' label='partida_sinuca'/></p>
                        <p><Frame cmd='red i u' label='where'/> vitorioso % 2 = 0 <Frame cmd='red i u' label='and'/> duracao_seg &gt; 360 </p>
                        <p><Sql word='group by'/> <Frame cmd='ylw i !u' label='ficha_fk'/>;</p>
                    </div>
                </div>

            </div>
        </>
    )
}
