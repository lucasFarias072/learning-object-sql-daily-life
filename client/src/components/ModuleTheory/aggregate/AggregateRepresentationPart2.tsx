



import { Hint } from "../../shared/Hint"
import { Frame } from "../../shared/Frame"
import { Paint } from "../../shared/Paint"
import { Sql } from "../../shared/Sql"

export function AggregationRepresentationPart2() {
    return (
        <>
            <div id="representation-head" className="mv-3">
                <h2 className="title-what-is as-line round-title">Representação - parte 2</h2>
            </div>
            <div id="representation-body" className="flex column gap-xsm body-layout">
                <ul className="flex column gap-sm">
                    <li>Vamos dar <Frame cmd='' label='continuidade'/> ao cenário das <Frame cmd='d-cyan i !u' label='⬩➤ partidas de sinuca'/>, agora com a <Frame cmd='' label='adição do'/> <Frame cmd='ui' label='group by'/>.</li>
                    <li>Todos as linhas da coluna usada, estavam servindo apenas a própria coluna (juntava e virava uma coisa só ao final).</li>
                    <li>Dessa vez, o <Frame cmd='u' label='group by'/> <Frame cmd='' label='entra na construção'/>, pois os <Frame cmd='' label='dados da coluna afetada/agregada'/> <Frame cmd='' label='serão distribuídas'/>.</li>
                    <li>Numa distribuição, uma coluna pode distribuir para si mesma ou com base em outras. Isso acontecerá aqui, com a coluna <Frame cmd='d-blue i !u' label='ficha_fk'/></li>
                    
                    <li>O dono do bar anotará os dados de uma coluna e distribuirá, tanto pela mesma coluna <Frame cmd='d-blue i !u' label='ficha_fk'/>, quanto por outra coluna <Frame cmd='blue i !u' label='duracao_seg'/></li>

                    <li>Existe nesse contexto, <Frame cmd='' label='3 tipos de fichas'/>, então existe a <Frame cmd='' label='possibilidade de 3 grupos'/> para onde os <Frame cmd='' label='dados podem ir'/>.</li>
                    
                    <li>Para cada partida anotada, os dados serão distribuídos por número da ficha usada pra partida.</li>
                    <li><span className="shine upper">count</span> ele anotou todas as partidas e a ficha de cada partida, depois distribuiu as quantidades por ficha (3 tipos).</li>
                    <li><span className="shine upper">avg</span> ele anotou todas as durações de partidas e a ficha de cada, distribuiu por ficha e fez a média das linhas achadas pra cada ficha.</li>
                    <li><span className="shine upper">sum</span> ele anotou todas as durações de partidas e a ficha de cada, distribuiu por ficha e fez a soma das linhas achadas pra cada ficha.</li>
                    <li><span className="shine upper">max</span> ele anotou todas as durações de partidas e a ficha de cada, distribuiu por ficha e marcou a linha (dentre as linhas) com tempo mais longo.</li>
                    <li><span className="shine upper">min</span> ele anotou todas as durações de aprtidas e a ficha de cada, distribuiu por ficha e marcou a linha (dentre as linhas) com tempo mais curto.</li>
                    <li>Os resultados são demonstrados nas consultas abaixo.</li>
                    <Hint/>
                </ul>
            </div>

            <div className="flex row go-left gap-sm subtitles mv-1">
                <h3 className="shine">Legenda ⬩➤</h3>
                <Paint label='quem serve dados/coluna agregada' css='blue' padding='p-mid' slender={false} />
                <Paint label='critério que separa' css='ylw' padding='p-mid' slender={false} />
                <Paint label='opera a coluna agregada' css='d-blue' padding='p-mid' slender={false} />
            </div>

            <div className="sql-code flex column gap-sm">
                 <p><Sql word='select'/> <Frame cmd='blue i !u' label='ficha_fk'/>, <Frame cmd='d-blue i u' label='count'/>(*) <Sql word='as'/> qtd_partidas_da_ficha <Sql word='from'/> partida_sinuca <Sql word='group by'/> <Frame cmd='ylw i !u' label='ficha_fk'/>;</p>
            </div>

            <div className="sql-code flex column gap-sm">
                 <p><Sql word='select'/> ficha_fk, <Frame cmd='d-blue i u' label='avg'/>(<Frame cmd='blue i !u' label='duracao_seg'/>) <Sql word='as'/> media_duracao_da_ficha <Sql word='from'/> partida_sinuca <Sql word='group by'/> <Frame cmd='ylw i !u' label='ficha_fk'/>;</p>
            </div>

            <div className="sql-code flex column gap-sm">
                 <p><Sql word='select'/> ficha_fk, <Frame cmd='d-blue i u' label='sum'/>(<Frame cmd='blue i !u' label='duracao_seg'/>) <Sql word='as'/> tempo_total_da_ficha <Sql word='from'/> partida_sinuca <Sql word='group by'/> <Frame cmd='ylw i !u' label='ficha_fk'/>;</p>
            </div>

            <div className="sql-code flex column gap-sm">
                 <p><Sql word='select'/> ficha_fk, <Frame cmd='d-blue i u' label='max'/>(<Frame cmd='blue i !u' label='duracao_seg'/>) <Sql word='as'/> partida_mais_longa_da_ficha <Sql word='from'/> partida_sinuca <Sql word='group by'/> <Frame cmd='ylw i !u' label='ficha_fk'/>;</p>
            </div>

            <div className="sql-code flex column gap-sm">
                 <p><Sql word='select'/> ficha_fk, <Frame cmd='d-blue i u' label='min'/>(<Frame cmd='blue i !u' label='duracao_seg'/>) <Sql word='as'/> partida_mais_curta_da_ficha <Sql word='from'/> partida_sinuca <Sql word='group by'/> <Frame cmd='ylw i !u' label='ficha_fk'/>;</p>
            </div>
        </>
    )
}
