

import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"
import { Hint } from "../../shared/Hint"

export function AggregationRepresentation() {
    return (
        <>
            <div className="flex column gap-sm">
                <div id="rep-title-aggregate" className="mv-1">
                    <h2 className="title-what-is as-line round-title">Representação</h2>
                </div>

                <div id="rep-body-aggregate" className="flex column gap-xsm theory-layout">
                    <ul className="flex column gap-sm">
                        <li>⬩➤ Imagina o <Frame cmd='' label='processo de dar significado'/>.</li>
                        <li>⬩➤ Num <Frame cmd='d-blue i !u' label='dicionário'/>, <Frame cmd='' label='procura-se'/> <Frame cmd='ylw i !u' label='palavra em uma sessão'/> para <Frame cmd='' label='chegar'/> num <Frame cmd='blue i !u' label='significado'/>.</li>
                        <li>⬩➤ <Frame cmd='d-blue i !u' label='dicionário'/> equivale à <Frame cmd='' label='tabela'/> no <Sql word='sql'/>.</li>
                        <li>⬩➤ <Frame cmd='ylw i !u' label='seção/palavra'/> representa <Frame cmd='' label='coluna de uma tabela'/> no <Sql word='sql'/>, onde <Frame cmd='' label='existem várias palavras'/>.</li>
                        <li>⬩➤ <Frame cmd='blue i !u' label='significado'/> é a <Frame cmd='' label='aplicação da função agregadora'/> do <Sql word='sql'/>.</li>
                        <li><Frame cmd='d-cyan i !u' label='⬩➤ Contexto'/></li>
                        <li>⬩➤ Um <Frame cmd='d-blue i !u' label='dicionário'/> é <Frame cmd='' label='acessado'/> e dele, escolhe <Frame cmd='ylw i !u' label='duas seções'/>: <Frame cmd='ylw i !u' label='seção da letra A'/> e <Frame cmd='ylw i !u' label='seção da letra P'/>.</li>
                        <li>⬩➤ Essas duas seções ➜ <Frame cmd='' label='equivalem à duas colunas de uma tabela'/>.</li>
                        <li>⬩➤ Vamos supor que <Frame cmd='' label='as palavras dessas seções'/> sejam: <Frame cmd='ylw i !u' label='asa'/> e <Frame cmd='ylw i !u' label='pássaro'/></li>
                        <li>⬩➤ Com as duas, <Frame cmd='' label='se formou um grupo'/>, e agora o <Frame cmd='' label='passo seguinte é dar'/> um <Frame cmd='blue i !u' label='significado'/>.</li>
                        {/* <li>⬩➤ Você pode pegar, por <Frame cmd='' label='exemplo'/>, as palavras <Frame cmd='' label='"pássaro" de um'/> e <Frame cmd='' label='"pequeno" do outro'/>.</li> */}
                        <li>⬩➤ <Frame cmd='blue i !u' label='Significado'/> ➜ Parte do corpo de animais que conseguem voar e animal que voa e cria sons.</li>
                        <li>⬩➤ O <Frame cmd='' label='funcionamento'/> nas <Frame cmd='shine i !u' label='funções agregadoras'/> + <Sql word='group by'/> é <Frame cmd='' label='similar'/>.</li>
                        {/* <li>⬩➤ Valores de um local são agrupados (formam grupos) e algo é destinado a eles.</li> */}
                        <li>⬩➤ A <Frame cmd='red i !u' label='diferença'/> é que, <Frame cmd='' label='dar significado'/> com as <Frame cmd='shine i !u' label='funções agregadoras'/>, significa <Frame cmd='shine i !u' label='gerar dados estatísticos'/>.</li>
                        <li>⬩➤ Os <Frame cmd='' label='grupos'/> tendem a esperar <Frame cmd='' label='colunas com dados de texto'/>, <Frame cmd='red i !u' label='não é regra'/>, mas <Frame cmd='' label='torna mais intuitívo'/>.</li>
                        <li>⬩➤ As <Frame cmd='shine i !u' label='funções agregadoras'/> esperam <Frame cmd='' label='colunas com dados de números'/>.</li>
                        <li>⬩➤ Os <Frame cmd='' label='exemplos abaixo'/>, demonstram a <Frame cmd='' label='lógica do'/> <Frame cmd='d-blue i !u' label='dicionário'/> ➜ <Frame cmd='ylw i !u' label='seção/palavra'/> ➜ <Frame cmd='blue i !u' label='significado'/>.</li>
                        <li>⬩➤ Quando a <Frame cmd='ylw i !u' label='palavra'/> <Frame cmd='red i !u' label='não está'/> em um <Frame cmd='d-blue i !u' label='dicionário'/>, se <Frame cmd='' label='busca no outro'/> via <Sql word='join'/>.</li>
                    </ul>
                    <div className="mt-1"><Hint/></div>
                </div>
                
                <div className="frame-example mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <h3 className="shine">Legenda ⬩➤</h3>
                        <Frame cmd='ylw p !u' label='palavra(s) (mesmo dicionário)'/>
                        <Frame cmd='d-blue p !u' label='dicionário'/>
                        <Frame cmd='blue p !u' label='significado'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 1'/></p>
                        <p><Sql word='select'/> membro_visto_fk, <Frame cmd='blue i u' label='avg(hora_visto)'/></p>
                        <p><Sql word='from'/> <Frame cmd='d-blue i !u' label='avistamento'/></p>
                        <p><Sql word='group by'/> <Frame cmd='ylw i !u' label='membro_visto_fk'/>;</p>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 2'/></p>
                        <p><Sql word='select'/> membro_visto_fk, hora_visto, <Frame cmd='blue i u' label='count(*)'/></p>
                        <p><Sql word='from'/> <Frame cmd='d-blue i !u' label='avistamento'/></p>
                        <p><Sql word='group by'/> <Frame cmd='ylw i !u' label='membro_visto_fk'/>, <Frame cmd='ylw i !u' label='hora_visto'/>;</p>
                    </div>
                </div>
                
                <div className="frame-example mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <div className="flex column gap-xsm">
                            <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                            <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 3'/>
                        </div>
                        <Frame cmd='ylw p !u' label='palavra 1'/>
                        <Frame cmd='cream p !u' label='palavra 2'/>
                        <Frame cmd='d-blue p !u' label='dicionário 1'/>
                        <Frame cmd='pk p !u' label='dicionário 2'/>
                        <Frame cmd='blue p !u' label='significado'/>
                    </div>
                    
                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> nome_membro, hora_visto, <Frame cmd='blue i u' label='count(*)'/></p>
                        <p><Sql word='from'/> <Frame cmd='d-blue i !u' label='avistamento'/> avi</p>
                        <p><Sql word='join'/> <Frame cmd='pk i !u' label='membro_familia'/> mfam on mfam.membro_id = avi.membro_visto_fk</p>
                        <p><Sql word='group by'/> <Frame cmd='cream i !u' label='nome_membro'/>, <Frame cmd='ylw i !u' label='hora_visto'/>;</p>
                    </div>
                </div>
            </div>
        </>
    )
}
