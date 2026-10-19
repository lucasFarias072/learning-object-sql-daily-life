

import { Hint } from "../../shared/Hint"
import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function AggregateCaseHaving() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="case-having-title-aggregate" className="mv-1">
                    <h2 className="case-header"><Frame cmd='u' label='group by + having'/></h2>
                </div>

                <div id="case-having-body-aggregate" className="flex column gap-sm theory-layout">
                    <p>⬩➤ O uso da cláusula <Sql word='having'/> age como <Frame cmd='' label='filtro no agrupamento'/> <Frame cmd='' label='após a aplicação'/> do <Sql word='group by'/>.</p>
                    <p>⬩➤ A cláusula <Frame cmd='red i !u' label='afeta diretamente'/> o <Frame cmd='shine i !u' label='resultado do agrupamento'/>, contribui para a <Frame cmd='red i !u' label='redução'/> das <Frame cmd='shine i !u' label='linhas de grupos'/>.</p>
                    <p>⬩➤ Sua <Frame cmd='' label='utilização'/> acontece <Frame cmd='' label='depois'/> do <Sql word='group by'/>.</p>
                    <p>⬩➤ Na lógica proposta do <Frame cmd='d-blue i !u' label='dicionário'/> ➜ <Frame cmd='ylw i !u' label='sessão/palavra'/> ➜ <Frame cmd='blue i !u' label='significado'/>, <Sql word='where'/> trabalha como <Frame cmd='red i !u' label='redutor do conteúdo'/> das <Frame cmd='ylw i !u' label='palavras ➜ grupos'/>.</p>
                    <p>⬩➤ O <Frame cmd='' label='uso'/> do <Sql word='having'/> equivaleria a <Frame cmd='shine i !u' label='usar inteiramente'/> o <Frame cmd='d-blue i !u' label='dicionário'/>, mas <Frame cmd='red i !u' label='esconder resultados'/> dos <Frame cmd='ylw i !u' label='grupos formados'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 1'/> Os <Frame cmd='' label='campos/colunas'/> dos grupos <Frame cmd='' label='passados'/> ao <Sql word='group by'/>,  podem ser <Frame cmd='' label='passados como condição'/> para o <Sql word='having'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 2'/> É <Frame cmd='' label='bem comum'/> o uso de <Sql word='having'/> <Frame cmd='shine i !u' label='receber funções agregadoras/seu apelido como condição'/> ➜ <Frame cmd='' label='conseguir usar apelido depende do'/> ➜ <Sql word='sgbd'/> usado.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 2'/> <Sql word='group by'/> ➜ forma grupos ➜ <Frame cmd='shine i !u' label='função agregadora'/> aplica operação nos grupos ➜ <Sql word='having'/> está depois disso tudo, consegue usar ➜ <Frame cmd='shine i !u' label='função agregadora'/>.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example ex-aggregate mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <div className="flex column gap-xsm">
                            <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                            <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 1'/>
                        </div>
        
                        <div className="flex column gap-xsm">
                            <Frame cmd='ylw p !u' label='palavra = valores únicos que formam grupos'/>
                            <Frame cmd='red p !u' label='filtro que retira grupos formados'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='d-blue p !u' label='dicionário'/>
                            <Frame cmd='blue p !u' label='significado'/>
                        </div>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> ficha_fk, <Frame cmd='blue i u' label='count(*)'/> <Sql word='from'/> <Frame cmd='d-blue i !u' label='partida_sinuca'/></p>
                        <p><Sql word='group by'/> <Frame cmd='ylw i !u' label='ficha_fk'/></p>
                        <p><Frame cmd='red i u' label='having'/> ficha_fk &lt;&gt; 2;</p>
                    </div>
                </div>

                <div className="frame-example ex-aggregate mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <div className="flex column gap-xsm">
                            <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                            <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 2'/>
                        </div>
        
                        <div className="flex column gap-xsm">
                            <Frame cmd='ylw p !u' label='palavra = valores únicos que formam grupos'/>
                            <Frame cmd='red p !u' label='filtro que retira grupos formados'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='d-blue p !u' label='dicionário'/>
                            <Frame cmd='blue p !u' label='significado'/>
                        </div>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> ficha_fk, <Frame cmd='blue i u' label='count(*)'/> <Sql word='as'/> vezes_jogada <Sql word='from'/> <Frame cmd='d-blue i !u' label='partida_sinuca'/></p>
                        <p><Sql word='group by'/> <Frame cmd='ylw i !u' label='ficha_fk'/></p>
                        <p><Frame cmd='red i u' label='having'/> <Frame cmd='blue i u' label='count(*)'/> &gt;  3;</p>
                    </div>
                </div>

            </div>
        </>
    )
}
