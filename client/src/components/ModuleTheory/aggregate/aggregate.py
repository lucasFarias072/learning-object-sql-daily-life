

class AggregateTemplate:
    ultima_atuallizacao = "13/09/2026"
    
    def aggregate_case_group_by_minimum_tsx(): """
    import { Hint } from "../../shared/Hint"
    import { Ink } from "../../shared/Ink"
    import { Paint } from "../../shared/Paint"
    import { Sql } from "../../shared/Sql"

    export function AggregateCaseGroupByMinimum() {
        return (
            <>
                <div className="flex column gap-sm case">
                    <div className="flex column gap-sm">
                        <h2 className="case-header">Caso mínimo + group by</h2>
                        <p>⬩➤ A partir do momento que se quer <Ink label='distribuir os dados agregados' css='mixed' padding='p-sm' slender={false}/> com base em algo além deles, <Ink label='criam-se grupos' css='mixed' padding='p-sm' slender={false}/></p>
                        <p>⬩➤ Nesse caso,<Ink label='group by' css='' padding='' slender={true}/> passa a ser <Ink label='mandatório' css='mixed' padding='p-sm' slender={false}/></p>
                        <Hint/>
                    </div>

                    <div className="flex row go-left gap-sm subtitles">
                        <h3 className="shine">Legenda ⬩➤</h3>
                        <Paint label='agrupe/separe por isso (1)' css='ylw' padding='p-mid' slender={false}/>
                        <Paint label='conte todas as linhas, incluso as não nulas (2)' css='blue' padding='p-mid' slender={false}/>
                        <Paint label='disso (3)' css='d-blue' padding='p-mid' slender={false}/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> <Ink label='vitorioso' css='d-blue' padding='p-sm' slender={false}/>, <Ink label='count(*)' css='blue' padding='p-sm' slender={false}/> <Sql word='from'/> partida_sinuca <Sql word='group by'/> <Ink label='vitorioso' css='ylw' padding='p-sm' slender={false}/>;</p>
                    </div>
                </div>
            </>
        )
    }
    """
        
    def aggregate_case_having_tsx(): """
    import { Hint } from "../../shared/Hint"
    import { Ink } from "../../shared/Ink"
    import { Paint } from "../../shared/Paint"
    import { Sql } from "../../shared/Sql"

    export function AggregateCaseHaving() {
        return (
            <>
                <div className="flex column gap-sm case">
                    <div className="flex column gap-sm">
                        <h2 className="case-header"><Ink label='group by + having' css='' padding='' slender={true}/></h2>
                        <p>⬩➤ O uso da cláusula <Ink label='having' css='mixed' padding='p-sm' slender={true}/> age como <Ink label='filtro no agrupamento' css='mixed' padding='p-sm' slender={false}/> após a aplicação do <Ink label='group by' css='' padding='' slender={true}/>.</p>
                        <p>⬩➤ Sendo assim, a cláusula <Ink label='having' css='' padding='' slender={true}/> <Ink label='afeta diretamente' css='mixed' padding='p-sm' slender={false}/> o agrupamento, se o resultado der <Ink label='X linhas' css='mixed' padding='p-sm' slender={false}/>, ele pode <Ink label='mudar para Y' css='mixed' padding='p-sm' slender={false}/>.</p>
                        <p>⬩➤ A cláusula <Ink label='having' css='' padding='' slender={true}/> basicamente <Ink label='reduz as linhas de grupos' css='mixed' padding='p-sm' slender={false}/> do resultado e <Ink label='sempre está depois' css='mixed' padding='p-sm' slender={false}/> do <Ink label='group by' css='mixed' padding='p-sm' slender={true}/> </p>
                        <Hint/>
                    </div>

                    <div className="flex row go-left gap-sm subtitles">
                        <h3 className="shine">Legenda ⬩➤</h3>
                        <Paint label='tabela a ser agrupada (1)' css='d-blue' padding='p-mid' slender={false} />
                        <Paint label='agrupa sob algum campo (2)' css='ylw' padding='p-mid' slender={false} />
                        <Paint label='filtro ao fim, após agrupamento (3)' css='blue' padding='p-mid' slender={false} />
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> ficha_fk, <Sql word='count(*)'/> <Sql word='from'/> <Ink label='partida_sinuca' css='d-blue' padding='p-sm' slender={false}/></p>
                        <p><Ink label='group by' css='ylw' padding='p-sm' slender={true}/> ficha_fk</p>
                        <p><Ink label='having' css='blue' padding='p-sm' slender={true}/> ficha_fk &lt;&gt; 2;</p>
                    </div>
                </div>
            </>
        )
    }
    """

    def aggregate_case_hidden_and_tsx(): """
    import { Hint } from "../../shared/Hint"
    import { Ink } from "../../shared/Ink"
    import { Paint } from "../../shared/Paint"
    import { Sql } from "../../shared/Sql"

    export function AggregateCaseHiddenAnd() {
        return (
            <>
                <div className="flex column gap-sm case">
                    <div className="flex column gap-sm">
                        <h2 className="case-header">União de grupos - and implícito</h2>
                        <p>⬩➤ <Ink label='Para cada coluna não agregada' css='ylw' padding='p-sm' slender={false}/> que se coloca junto ao <Ink label='group by' css='' padding='' slender={true} />, haverá <Ink label='mais grupos formados' css='mixed' padding='p-sm' slender={false}/>.</p>
                        <p>⬩➤ Ao mencionar <Ink label='cada coluna no select' css='mixed' padding='p-sm' slender={false}/>, está sendo dado <Ink label='mais dados' css='mixed' padding='p-sm' slender={false}/> = <Ink label='mais dados combinados' css='mixed' padding='p-sm' slender={false}/> = <Ink label='mais grupos' css='mixed' padding='p-sm' slender={false}/>.</p>
                        <p><Ink label='⬩➤ Ex.:' css='d-cyan' padding='p-sm' slender={false}/> quero todos os grupos/combinações desses locais e sua contagem (dados <Ink label='de uma coluna' css='mixed' padding='p-sm' slender={false}/>).</p>
                        <p><Ink label='⬩➤ Ex.:' css='d-cyan' padding='p-sm' slender={false}/> quero todos os grupos/combinações possíveis desses locais e/com essas cores (dados <Ink label='de duas colunas' css='mixed' padding='p-sm' slender={false}/>).</p>
                        <Hint/>
                    </div>

                    <div className="flex row go-left gap-sm subtitles">
                        <h3 className="shine">Legenda ⬩➤</h3>
                        <Paint label='coluna(s) não agregadas' css='ylw' padding='p-mid' slender={false} />
                        <Paint label='local para colunas não agregadas' css='blue' padding='p-mid' slender={false} />
                        <Paint label='contar todas as linhas (incluindo nulas)' css='d-blue' padding='p-mid' slender={false} />
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> <Ink label='descricao_local' css='ylw' padding='p-sm' slender={false} />, <Ink label='count(*)' css='d-blue' padding='p-sm' slender={false} /> <Sql word='as'/> semaforos_por_local <Sql word='from'/> semaforo</p>
                        <p><Sql word='join'/> local <Sql word='on'/> local.local_id = semaforo.local_fk</p>
                        <p><Ink label='group by' css='blue' padding='p-sm' slender={true} /> <Ink label='descricao_local' css='ylw' padding='p-sm' slender={false} />;</p>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> <Ink label='descricao_local' css='ylw' padding='p-sm' slender={false} />, <Ink label='cor' css='ylw' padding='p-sm' slender={false} />, <Ink label='count(*)' css='d-blue' padding='p-sm' slender={false} /> <Sql word='as'/> semaforos_por_local <Sql word='from'/> semaforo</p>
                        <p><Sql word='join'/> local <Sql word='on'/> local.local_id = semaforo.local_fk</p>
                        <p><Ink label='group by' css='blue' padding='p-sm' slender={true} /> <Ink label='descricao_local' css='ylw' padding='p-sm' slender={false} />, <Ink label='cor' css='ylw' padding='p-sm' slender={false} />;</p>
                    </div>
                </div>
            </>
        )
    }
    """

    def aggregate_cas_minimum_tsx(): """
    import { Hint } from "../../shared/Hint"
    import { Ink } from "../../shared/Ink"
    import { Paint } from "../../shared/Paint"
    import { Sql } from "../../shared/Sql"

    export function AggregateCaseMinimum() {
        return (
            <>
                <div className="flex column gap-sm case">
                    <h2 className="case-header">Caso mínimo</h2>
                    <p>⬩➤ Funções agregadoras podem vir <Ink label='sem' css='mixed' padding='p-sm' slender={false} /> <Ink label='group by' css='mixed' padding='p-sm' slender={true} />.</p>
                    <p>⬩➤ Sabe-se que <Ink label='essa ausência é intencional' css='mixed' padding='p-sm' slender={false} /> para <Ink label='gerar um dado totalizado' css='mixed' padding='p-sm' slender={false} />.</p>
                    <p><Ink label='⬩➤ count(*)' css='shine' padding='p-sm' slender={true} />  conta todas as linhas <Ink label='da tabela' css='mixed' padding='p-sm' slender={false} /> (incluindo as nulas).</p>
                    <p><Ink label='⬩➤ count(campo)' css='shine' padding='p-sm' slender={true} />  conta todas as linhas <Ink label='de uma coluna' css='mixed' padding='p-sm' slender={false} /> (sem as nulas).</p>
                    <p><Ink label='⬩➤ max(campo)' css='shine' padding='p-sm' slender={true} /> obtem maior valor de um campo, seja numérico, de tamanho do texto, se for datas, pega a data menos atual.</p>
                    <p><Ink label='⬩➤ min(campo)' css='shine' padding='p-sm' slender={true} /> obtem menor valor de um campo, seja numérico, de tamanho do texto, se for datas, pega a data mais atual.</p>
                    <p><Ink label='⬩➤ avg(campo)' css='shine' padding='p-sm' slender={true} /> obtem a média total de algum campo numérico agregado.</p>
                    <p><Ink label='⬩➤ sum(campo)' css='shine' padding='p-sm' slender={true} /> obtem a soma total de algum campo numérico agregado.</p>
                    <Hint/>
                </div>

                <div className="flex row go-left gap-sm subtitles mv-1">
                    <h3 className="shine">Legenda ⬩➤</h3>
                    <Paint label='cláusula de agregação' css='ylw' padding='p-mid' slender={false} />
                </div>

                <div className="sql-code flex column gap-sm">
                    <p><Sql word='select'/> <Ink label='max' css='ylw' padding='p-sm' slender={true}/>(apelido) <Sql word='as'/> mais_longo <Sql word='from'/> sinuquista;</p>
                </div>
                
                <div className="sql-code flex column gap-sm">
                    <p><Sql word='select'/> <Ink label='min' css='ylw' padding='p-sm' slender={true}/>(apelido) <Sql word='as'/> nome_mais_curto <Sql word='from'/> sinuquista;</p>
                </div>
                
                <div className="sql-code flex column gap-sm">
                    <p><Sql word='select'/> <Ink label='count' css='ylw' padding='p-sm' slender={true}/>(*) <Sql word='as'/> todas_partidas_linhas <Sql word='from'/> partida_sinuca;</p>
                </div>
                
                <div className="sql-code flex column gap-sm">
                    <p><Sql word='select'/> <Ink label='avg' css='ylw' padding='p-sm' slender={true}/>(duracao_seg) <Sql word='as'/> media_duracao_partida <Sql word='from'/> partida_sinuca;</p>
                </div>
                
                <div className="sql-code flex column gap-sm">
                    <p><Sql word='select'/> <Ink label='sum' css='ylw' padding='p-sm' slender={true}/>(duracao_seg) <Sql word='as'/> segundos_acumulados_partidas <Sql word='from'/> partida_sinuca;</p>
                </div>
                
                <div className="sql-code flex column gap-sm">
                    <p><Sql word='select'/> <Ink label='count' css='ylw' padding='p-sm' slender={true}/>(*) <Sql word='as'/> quartos_com_mes_lembrado, count(mes_adesao) <Sql word='as'/> quartos_sem_mes_lembrado <Sql word='from'/> quarto_relatorio;</p>
                </div>
            </>
        )
    }
    """

    def aggregate_case_where_tsx(): """
    import { Ink } from "../../shared/Ink"
    import { Paint } from "../../shared/Paint"
    import { Sql } from "../../shared/Sql"
    import { Hint } from "../../shared/Hint"

    export function AggregateCaseWhere() {
        return (
            <>
                <div className="flex column gap-sm case">
                    <div className="flex column gap-sm">
                        <h2 className="case-header"><Ink label='group by + where' css='' padding='' slender={true}/></h2>
                        <p>⬩➤ O uso da cláusula <Ink label='where' css='mixed' padding='p-sm' slender={true}/> age como <Ink label='filtro na tabela' css='mixed' padding='p-sm' slender={false}/> afetada pelo agrupamento, <Ink label='antes do agrupamento' css='mixed' padding='p-sm' slender={false}/> acontecer.</p>
                        <p>⬩➤ A cláusula <Ink label='where' css='' padding='' slender={true}/> basicamente <Ink label='reduz a carga de trabalho' css='mixed' padding='p-sm' slender={false}/> do <Ink label='group by' css='' padding='' slender={true}/> </p>
                        <p>⬩➤ Quanto <Ink label='mais condições' css='mixed' padding='p-sm' slender={false}/> juntadas ao where, mais enxuta fica a tabela resultante e <Ink label='menos agrupamentos' css='mixed' padding='p-sm' slender={false}/> o <Ink label='group by' css='' padding='' slender={true}/> fará</p>
                        <p>⬩➤ A cláusula <Ink label='having' css='mixed' padding='p-sm' slender={true}/> mostrada no <Ink label='próximo caso' css='mixed' padding='p-sm' slender={false}/>, pode ser <Ink label='usada junto' css='mixed' padding='p-sm' slender={false}/> ao <Ink label='where' css='' padding='' slender={true}/></p>
                        <Hint/>
                    </div>

                    <div className="flex row go-left gap-sm subtitles">
                        <h3 className="shine">Legenda ⬩➤</h3>
                        <Paint label='tabela a ser agrupada (1)' css='d-blue' padding='p-mid' slender={false} />
                        <Paint label='filtro apenas na tabela (2)' css='blue' padding='p-mid' slender={false} />
                        <Paint label='agrupa sob o resultado do filtro (3)' css='ylw' padding='p-mid' slender={false} />
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> ficha_fk, <Sql word='count(*)'/> <Sql word='from'/> <Ink label='partida_sinuca' css='d-blue' padding='p-sm' slender={false}/></p>
                        <p><Ink label='where' css='blue' padding='p-sm' slender={true}/> duracao_seg &gt; 360</p>
                        <p><Ink label='group by' css='ylw' padding='p-sm' slender={true}/> ficha_fk;</p>
                    </div>
                    
                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> ficha_fk, count(*) <Sql word='from'/> <Ink label='partida_sinuca' css='d-blue' padding='p-sm' slender={false}/></p>
                        <p><Ink label='where' css='blue' padding='p-sm' slender={true}/> vitorioso % 2 = 0 <Ink label='and' css='blue' padding='p-sm' slender={true}/> duracao_seg &gt; 360 </p>
                        <p><Ink label='group by' css='ylw' padding='p-sm' slender={true}/> ficha_fk;</p>
                    </div>
                </div>
            </>
        )
    }
    """

    def aggregate_have_in_mind_tsx(): """
    import { Ink } from "../../shared/Ink"

    export function AggregateHaveInMind() {
        return (
            <>
                <div id="have-in-mind-head" className="mv-3">
                    <h2 className="title-what-is as-line round-title">Tenha em mente!</h2>
                </div>
                <div id="have-in-mind-body" className="flex column gap-xsm body-layout">
                    <ul className="flex column gap-sm">
                        <li><Ink label='group by' css='' padding='' slender={true}/> trabalha com um <Ink label='and' css='mixed' padding='p-sm' slender={true}/> <Ink label='implícito' css='mixed' padding='p-sm' slender={false}/>, quanto mais colunas não agregadas, menor o agrupamento se torna.</li>
                        <li>Uma <Ink label='coluna' css='mixed' padding='p-sm' slender={false}/> usada <Ink label='dentro da' css='mixed' padding='p-sm' slender={false}/> função agregadora <Ink label='AVG, SUM, COUNT, MIN, MAX' css='mixed' padding='p-sm' slender={true}/> <Ink label='não precisa' css='mixed' padding='p-sm' slender={false}/> estar no <Ink label='group by' css='' padding='' slender={true}/>.</li>
                        <li>Uma coluna usada <Ink label='fora da' css='mixed' padding='p-sm' slender={false}/> função agregadora <Ink label='select/having' css='mixed' padding='p-sm' slender={true}/> <Ink label='precisa' css='mixed' padding='p-sm' slender={false}/> estar no <Ink label='group by' css='' padding='' slender={true}/>.</li>
                        <li>Na função de agregação <Ink label='count(*)' css='mixed' padding='p-sm' slender={true}/> indica <Ink label='contar todas as linhas' css='mixed' padding='p-sm' slender={false}/>.</li>
                        <li>Na função de agregação <Ink label='count(campo)' css='mixed' padding='p-sm' slender={true}/> indica <Ink label='contar todas as linhas não nulas' css='mixed' padding='p-sm' slender={false}/> de coluna(s).</li>
                        <li>Funções de agregação costumam vir acompanhadas das cláusulas <Ink label='where' css='mixed' padding='p-sm' slender={true}/> e/ou <Ink label='having' css='mixed' padding='p-sm' slender={true}/>.</li>
                        <li>O <Ink label='where' css='mixed' padding='p-sm' slender={true}/> filtra <Ink label='antes' css='mixed' padding='p-sm' slender={false}/> do <Ink label='group by' css='mixed' padding='p-sm' slender={true}/> agrupar as linhas em grupos (reduz linhas antes de agrupar = da tabela).</li>
                        <li>O <Ink label='having' css='mixed' padding='p-sm' slender={true}/> filtra <Ink label='após' css='mixed' padding='p-sm' slender={false}/> o <Ink label='group by' css='mixed' padding='p-sm' slender={true}/> agrupar as linhas em grupos (reduz linhas do agrupamento = do resultado).</li>
                        <li>Dentre as funções agregadoras, <Ink label='count' css='mixed' padding='p-sm' slender={true}/> é o <Ink label='único que aceita *' css='mixed' padding='p-sm' slender={false}/> como argumento.</li>
                    </ul>
                </div>
            </>
        )
    }
    """

    def aggregate_representation_tsx(): """
    import { Ink } from "../../shared/Ink"
    import { Sql } from "../../shared/Sql"
    import { Hint } from "../../shared/Hint"

    export function AggregationRepresentation() {
        return (
            <>
                <div id="representation-head" className="mv-3">
                    <h2 className="title-what-is as-line round-title">Representação</h2>
                </div>
                <div id="representation-body" className="flex column gap-xsm body-layout">
                    <ul className="flex column gap-sm">
                        <li>Vejamos a seguir como <Ink label='funções agregadoras' css='mixed' padding='p-sm' slender={false}/> podem se apresentar em <Ink label='seu caso mínimo' css='mixed' padding='p-sm' slender={false}/>.</li>
                        <li>Imagine um <Ink label='cenário' css='mixed' padding='p-sm' slender={false}/> de um <Ink label='⬩➤ jogo de sinuca' css='d-cyan' padding='p-sm' slender={false}/>.</li>
                        <li>O <Ink label='dono de um bar' css='mixed' padding='p-sm' slender={false}/> tem um caderno de pauta que ele deseja <Ink label='anotar' css='mixed' padding='p-sm' slender={false}/> alguns <Ink label='dados de cada partida' css='mixed' padding='p-sm' slender={false}/>.</li>
                        <li>Ele observa cada jogo e vai anotando em cada linha, de <Ink label='um por um' css='mixed' padding='p-sm' slender={false}/>, os <Ink label='números dos vitoriosos' css='mixed' padding='p-sm' slender={false}/></li>
                        <li><Ink label='Ao final' css='mixed' padding='p-sm' slender={false}/>, ele teria uma <Ink label='contagem de todas as partidas' css='mixed' padding='p-sm' slender={false}/>, ele estaria usando: <span className="shine upper">count</span></li>
                        <li>Mas <Ink label='e se ao invés' css='mixed' padding='p-sm' slender={false}/> disso, o dono do bar:</li>
                        <li><Ink label='anota a duração' css='mixed' padding='p-sm' slender={false}/> de cada da partida e ao final <Ink label='soma todos' css='mixed' padding='p-sm' slender={false}/> os tempos, ele está usando: <span className="shine upper">sum</span></li>
                        <li><Ink label='anota a duração' css='mixed' padding='p-sm' slender={false}/> de cada da partida e ao final <Ink label='faz a média de todos' css='mixed' padding='p-sm' slender={false}/> os tempos, ele está usando: <span className="shine upper">avg</span></li>
                        <li><Ink label='anota a duração' css='mixed' padding='p-sm' slender={false}/> de cada da partida e ao final <Ink label='marca a mais duradoura' css='mixed' padding='p-sm' slender={false}/>, ele está usando: <span className="shine upper">max</span></li>
                        <li>e se <Ink label='marca a menos duradoura' css='mixed' padding='p-sm' slender={false}/>, ele estaria usando: <span className="shine upper">min</span></li>
                        <li>O dono do bar, nesse cenário, <Ink label='pegou uma categoria de dado' css='mixed' padding='p-sm' slender={false}/> (coluna) e <Ink label='gerou apenas um resultado de todos' css='mixed' padding='p-sm' slender={false}/> sem separar</li>
                        <li>No <Ink label='exemplo abaixo' css='mixed' padding='p-sm' slender={false}/>, temos um resultado único extraído de <Ink label='duas colunas' css='mixed' padding='p-sm' slender={false}/> diferentes: <Ink label='vitorioso' css='mixed' padding='p-sm' slender={false}/> e <Ink label='duracao_seg' css='mixed' padding='p-sm' slender={false}/></li>
                        <li>Esse é o <Ink label='⬩➤ caso mínimo' css='d-cyan' padding='p-sm' slender={false}/> das funções agregadoras, usar um tipo de dado (uma coluna) e <Ink label='gerar um resultado total' css='mixed' padding='p-sm' slender={false}/> desse grupo</li>
                    </ul>
                    <div className="mt-1"><Hint/></div>
                </div>

                <div className="sql-code flex column gap-sm">
                    <p><Sql word='select'/> <Ink label='count' css='blue' padding='p-sm' slender={true}/>(vitorioso) <Sql word='as'/> qtd_vitoriosos_ou_partidas,</p>
                    <p><Ink label='avg' css='blue' padding='p-sm' slender={true}/>(duracao_seg) <Sql word='as'/> media_duracao_das_partidas,</p>
                    <p><Ink label='sum' css='blue' padding='p-sm' slender={true}/>(duracao_seg) <Sql word='as'/> tempo_total_todas_partidas,</p>
                    <p><Ink label='max' css='blue' padding='p-sm' slender={true}/>(duracao_seg) <Sql word='as'/> partida_mais_duradoura,</p>
                    <p><Ink label='min' css='blue' padding='p-sm' slender={true}/>(duracao_seg) <Sql word='as'/> partida_mais_rapida</p>
                    <p><Sql word='from'/> partida_sinuca;</p>
                </div>
            </>
        )
    }
    """

    def aggregate_representation_part2_tsx(): """
        import { Hint } from "../../shared/Hint"
        import { Ink } from "../../shared/Ink"
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
                            <li>Vamos dar <Ink label='continuidade' css='mixed' padding='p-sm' slender={false}/> ao cenário das <Ink label='⬩➤ partidas de sinuca' css='d-cyan' padding='p-sm' slender={false}/>, agora com a <Ink label='adição do' css='mixed' padding='p-sm' slender={false}/> <Ink label='group by' css='mixed' padding='p-sm' slender={true}/>.</li>
                            <li>Todos as linhas da coluna usada, estavam servindo apenas a própria coluna (juntava e virava uma coisa só ao final).</li>
                            <li>Dessa vez, o <Ink label='group by' css='' padding='' slender={true}/> <Ink label='entra na construção' css='mixed' padding='p-sm' slender={false}/>, pois os <Ink label='dados da coluna afetada/agregada' css='mixed' padding='p-sm' slender={false}/> <Ink label='serão distribuídas' css='mixed' padding='p-sm' slender={false}/>.</li>
                            <li>Numa distribuição, uma coluna pode distribuir para si mesma ou com base em outras. Isso acontecerá aqui, com a coluna <Ink label='ficha_fk' css='d-blue' padding='p-sm' slender={false}/></li>
                            
                            <li>O dono do bar anotará os dados de uma coluna e distribuirá, tanto pela mesma coluna <Ink label='ficha_fk' css='d-blue' padding='p-sm' slender={false}/>, quanto por outra coluna <Ink label='duracao_seg' css='blue' padding='p-sm' slender={false}/></li>

                            <li>Existe nesse contexto, <Ink label='3 tipos de fichas' css='mixed' padding='p-sm' slender={false}/>, então existe a <Ink label='possibilidade de 3 grupos' css='mixed' padding='p-sm' slender={false}/> para onde os <Ink label='dados podem ir' css='mixed' padding='p-sm' slender={false}/>.</li>
                            
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
                        <p><Sql word='select'/> <Ink label='ficha_fk' css='blue' padding='p-sm' slender={false}/>, <Ink label='count' css='d-blue' padding='p-sm' slender={true}/>(*) <Sql word='as'/> qtd_partidas_da_ficha <Sql word='from'/> partida_sinuca <Sql word='group by'/> <Ink label='ficha_fk' css='ylw' padding='p-sm' slender={false}/>;</p>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> ficha_fk, <Ink label='avg' css='d-blue' padding='p-sm' slender={true}/>(<Ink label='duracao_seg' css='blue' padding='p-sm' slender={false}/>) <Sql word='as'/> media_duracao_da_ficha <Sql word='from'/> partida_sinuca <Sql word='group by'/> <Ink label='ficha_fk' css='ylw' padding='p-sm' slender={false}/>;</p>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> ficha_fk, <Ink label='sum' css='d-blue' padding='p-sm' slender={true}/>(<Ink label='duracao_seg' css='blue' padding='p-sm' slender={false}/>) <Sql word='as'/> tempo_total_da_ficha <Sql word='from'/> partida_sinuca <Sql word='group by'/> <Ink label='ficha_fk' css='ylw' padding='p-sm' slender={false}/>;</p>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> ficha_fk, <Ink label='max' css='d-blue' padding='p-sm' slender={true}/>(<Ink label='duracao_seg' css='blue' padding='p-sm' slender={false}/>) <Sql word='as'/> partida_mais_longa_da_ficha <Sql word='from'/> partida_sinuca <Sql word='group by'/> <Ink label='ficha_fk' css='ylw' padding='p-sm' slender={false}/>;</p>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> ficha_fk, <Ink label='min' css='d-blue' padding='p-sm' slender={true}/>(<Ink label='duracao_seg' css='blue' padding='p-sm' slender={false}/>) <Sql word='as'/> partida_mais_curta_da_ficha <Sql word='from'/> partida_sinuca <Sql word='group by'/> <Ink label='ficha_fk' css='ylw' padding='p-sm' slender={false}/>;</p>
                    </div>
                </>
            )
        }
    """

    def aggregate_requirements_tsx(): """
    import { Ink } from "../../shared/Ink"
    import { Paint } from "../../shared/Paint"
    import { Sql } from "../../shared/Sql"
    import { Hint } from "../../shared/Hint"

    export function AggregateRequirements() {
        return (
            <>
                <div id="requirements-head" className="mv-3">
                    <h2 className="title-what-is as-line round-title">Do que precisa?</h2>
                </div>
                <div id="requirements-body" className="flex column gap-xsm body-layout">
                    <ul className="flex column gap-sm">
                        <li>Pelo menos <Ink label='uma função de agregação no' css='mixed' padding='p-sm' slender={false}/> <Ink label='select' css='mixed' padding='p-sm' slender={true}/>.</li>
                        <li>Se houver <Ink label='colunas não agregadas' css='mixed' padding='p-sm' slender={false}/> junto no SELECT, elas <Ink label='precisam obrigatoriamente estar no' css='mixed' padding='p-sm' slender={false}/> <Ink label='group by' css='mixed' padding='p-sm' slender={true}/></li>
                        <li><Ink label='group by' css='mixed' padding='p-sm' slender={true}/> é opcional: <Ink label='sem ele' css='mixed' padding='p-sm' slender={false}/>, a <Ink label='agregação' css='mixed' padding='p-sm' slender={false}/> roda sobre a <Ink label='tabela inteira' css='mixed' padding='p-sm' slender={false}/> e devolve uma linha só de resultado.</li>
                    </ul>
                    <div className="mt-1"><Hint/></div>
                </div>

                <div className="flex row go-left gap-sm subtitles mv-1">
                    <h3 className="shine">Legenda ⬩➤</h3>
                    <Paint label='coluna não agregada' css='ylw' padding='p-mid' slender={false} />
                    <Paint label='onde deve estar' css='d-blue' padding='p-mid' slender={false} />
                </div>

                <div className="sql-code flex column gap-sm">
                    <p><Sql word='select'/> <Ink label='ficha_fk' css='ylw' padding='p-sm' slender={false}/>, count(*) <Sql word='from'/> partida_sinuca <Sql word='group by'/> <Ink label='ficha_fk' css='d-blue' padding='p-sm' slender={false}/>;</p>
                </div>

                <div className="flex row go-left gap-sm subtitles mv-1">
                    <h3 className="shine">Legenda ⬩➤</h3>
                    <Paint label='agregação sem group by' css='' padding='p-mid' slender={false} />
                </div>

                <div className="sql-code flex column gap-sm">
                    <p><Sql word='select'/> <Sql word='max'/>(sinuquista_fk_dono_ficha) <Sql word='from'/> partida_sinuca;</p>
                </div>
            </>
        )
    }
    """

    def aggregate_utility_tsx(): """
    import { Ink } from "../../shared/Ink"

    export function AggregateUtility() {
        return (
            <>
                <div id="usefullness-head" className="mv-3">
                    <h2 className="title-what-is as-line round-title">Qual a utilidade?</h2>
                </div>
                <div id="usefullness-body" className="flex column gap-xsm body-layout">
                    <ul className="flex column gap-sm">
                        <li><Ink label='Responder perguntas' css='mixed' padding='p-sm' slender={false} /> sobre <Ink label='informação estatística' css='mixed' padding='p-sm' slender={false} />.</li>
                        <li>Por informação estatística, se quer dizer: valores de quantidade, total, médio, maior, menor.</li>
                        <li>Criar dados em formato de relatório e evitar verificações manuais de grupos de dados.</li>
                    </ul>
                </div>
            </>
        )
    }
    """

    def aggregate_what_is_it_tsx(): """
    import { Ink } from "../../shared/Ink"

    export function AggregateWhatIsIt() {
        return (
            <>
                <div id="introduction-head" className="mv-3">
                    <h2 className="as-line round-title">O que são funções agregadoras?</h2>
                </div>
                <div id="introduction-body" className="flex column gap-xsm body-layout">
                    <ul className="flex column gap-sm">
                        <li>São funções que <Ink label='selecionam colunas' css='mixed' padding='p-sm' slender={false}/> de uma tabela, para <Ink label='dividir seus dados' css='mixed' padding='p-sm' slender={false}/> para algum <Ink label='propósito estatístico' css='mixed' padding='p-sm' slender={false}/>.</li>
                        <li><Ink label='Colunas são formadas de linhas' css='mixed' padding='p-sm' slender={false}/> com valores de mesmo tipo e que se repetem e/ou que são distintos.</li>
                        <li><Ink label='A função agregadora percorre' css='mixed' padding='p-sm' slender={false}/> todas as <Ink label='linhas' css='mixed' padding='p-sm' slender={false}/> de uma coluna (ou mais, dependendo da maneira de uso).</li>
                        <li>Se todas as linhas forem usadas <Ink label='para gerar um dado único' css='mixed' padding='p-sm' slender={false}/>, uma <Ink label='totalidade' css='mixed' padding='p-sm' slender={false}/>: função agregadora <Ink label='sem' css='mixed' padding='p-sm' slender={false}/> <Ink label='group by' css='mixed' padding='p-sm' slender={true}/>.</li>
                        <li>Se todas as linhas forem usadas <Ink label='para gerar um dado distribuído' css='mixed' padding='p-sm' slender={false}/>: função agregadora <Ink label='com' css='mixed' padding='p-sm' slender={false}/> <Ink label='group by' css='mixed' padding='p-sm' slender={true}/>.</li>
                        <li>Nas sessões seguintes, isso será exemplificado.</li>
                    </ul>
                </div>                  
            </>
        )
    }
    """
