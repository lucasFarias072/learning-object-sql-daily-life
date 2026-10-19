

import { sqlNormalizer } from "./sqlNormalizer"

/* Usos de left join 
    => só dispensam restrição se o cenário garantir pelo menos uma linha com FK nula

    VERIFICAÇÃO (caso entre duas tabelas, não sei sobre além disso)
    select * from avistamento where algo_visto_fk is null;
    select * from passageiro where assento_fk is null;

    SE RETORNA LINHAS:
        . analysis = [true]
    SENÃO:
        . criar restrições
    
    . exercicio || // case-when-1-!@#exercicio-bk
    . onibus    || // case-when-1-!@#onibus-bk
*/

/* Onde a restrição pontual é realmente necessária (porque "chutar" tem chance real de acertar por acaso):

Subconsultas 
    . quase sempre existe um JOIN que produz exatamente o mesmo conjunto de linhas que uma subconsulta produziria. 

Join
    "J3": join + polireferência (tabela é referenciada no join + de 1 vez)     
    "J4": self join (tabela chama join dela mais de uma vez)                                                                      
    "J5": join + or (linha do join com OR)                                
    "J8": join com filtro AND e OR juntos

Case when
    "C2": Uso do case when no select que afete o order by use os valores                
    "C4": Uso do case when no select, que o group by aproveite e o order by use os valores
    "C5"/"C6": só dispensam restrição se o cenário garantir FK nula; sem essa garantia, mantenha a checagem de left join

Agregação
    . do A6 até A15
*/

/* Restrições adequadas pra agregações com (where) e/ou (having)
    // A6/A9/A10 (apenas where)
    sqlInRow.split(" ").filter(word => word === "where").length >= 1,
    sqlInRow.split(" ").filter(word => word === "having").length === 0

    // A7/A11/A12 (apenas having)
    sqlInRow.split(" ").filter(word => word === "having").length >= 1,
    sqlInRow.split(" ").filter(word => word === "where").length === 0

    // A8/A13/A14/A15 (where + having juntos)
    sqlInRow.split(" ").filter(word => word === "where").length >= 1,
    sqlInRow.split(" ").filter(word => word === "having").length >= 1
*/

/* Agregação
    // agregacao-2-!@#exercicio-bk       |*a| 🟢 uso mínimo sem group by
    // agregacao-1-!@#sinuca-bk          |*a| 🟢 uso mínimo sem group by

    // agregacao-2-!@#sinuca-bk          |*a| 🟢 uso mínimo com group by

    // agregacao-1-!@#casa-bk            |*a| 🟢 2 colunas no select + group by (sem join) (sem filtro)

    // agregacao-1-!@#exercicio-bk       |*a| 🟢 2 colunas no select + group by + join (sem filtro)
    // agregacao-2-!@#turismo-bk         |*a| 🟢 2 colunas no select + group by + join (sem filtro)

    // agregacao-1-!@#frutaria-bk        |*a| 🟢 (3) 2 funções agregadoras no select + group by + join (sem filtro)
    // agregacao-1-!@#turismo-bk         |*a| 🟢 (3) 2 funções agregadoras no select + group by + join (sem filtro)

    // agregacao-2-!@#frutaria-bk        |*a| 🟢 1 coluna agregada + group by (join opcional) (filtro where)

    // agregacao-3-!@#exercicio-bk       |*a| 🟢 1 coluna agregada + group by (join opcional) (filtro having)

    // agregacao-1-!@#ponto-de-onibus-bk |*a| 🟢 1 coluna agregada + group by (join opcional) (filtro where) (filtro having)

    // agregacao-2-!@#ponto-de-onibus-bk |*a| 🟢 1 coluna no select + group by (join opcional) (filtro having)
    // agregacao-1-!@#onibus-bk          |*a| 🟢 1 coluna no select + group by (join opcional) (filtro having)

    // agregacao-4-!@#exercicio-bk       |*a| 🟢 1 coluna no select + group by (join opcional) (filtro where)
    // agregacao-2-!@#onibus-bk          |*a| 🟢 1 coluna no select + group by (join opcional) (filtro where)

    // agregacao-3-!@#turismo-bk         |*a| 🟢 1 coluna no select + group by (join opcional) (filtro where) (filtro having)
    // agregacao-2-!@#parque-aquatico-bk |*a| 🟢 1 coluna no select + group by (join opcional) (filtro where) (filtro having) [temp 2]
    
    // agregacao-4-!@#turismo-bk         |*a| 🟢 vou deixar sem explicação, existe o A15 no comentário explicando

    // agregacao-3-!@#frutaria-bk        |*a| 🟢 (3) 2 funções agregadoras no select + group by + join (filtro where)
    // agregacao-2-!@#casa-bk            |*a| 🟢 (3) 2 funções agregadoras no select + group by + join (filtro where)

    // agregacao-1-!@#quarto-bk          |*a| 🟢 (3) 2 funções agregadoras no select + group by + join (filtro having)
    // agregacao-3-!@#casa-bk            |*a| 🟢 (3) 2 funções agregadoras no select + group by + join (filtro having)

    // agregacao-1-!@#parque-aquatico-bk |*a| 🟢 (3) 2 funções agregadoras no select + group by + join (filtro where) (filtro having)
    // agregacao-4-!@#sinuca-bk          |*a| 🟢 (3) 2 funções agregadoras no select + group by + join (filtro where) (filtro having) [temp]

    // agregacao-4-!@#frutaria-bk        |*a| 🟢 leia o comentário em A16

    // agregacao-3-!@#sinuca-bk          |*a| 🟢 leia o comentário em A17
*/

/* Junção
    // join-1-!@#quarto-bk          |*j| 🟢 uso mínimo do join (cruzamento, sem filtros)
    
    // join-1-!@#frutaria-bk        |*j| 🟢 sequencial (uma tabela precisando diretamente da anterior)
    // join-3-!@#quarto-bk          |*j| 🟢 sequencial (uma tabela precisando diretamente da anterior)
    // join-4-!@#onibus-bk          |*j| 🟢 sequencial (uma tabela precisando diretamente da anterior)
    
    // join-1-!@#onibus-bk          |*j| 🟢 polirefência (uma tabela referência para + de 1 join)
    // join-2-!@#sinuca-bk          |*j| 🟢 polirefência (uma tabela referência para + de 1 join)
    // join-1-!@#turismo-bk         |*j| 🟢 polirefência (uma tabela referência para + de 1 join)
    // join-2-!@#parque-aquatico-bk |*j| 🟢 polirefência (uma tabela referência para + de 1 join)
    
    // join-1-!@#casa-bk            |*j| 🟢 self join (mesma tabela, joins separados)
    // join-4-!@#quarto-bk          |*j| 🟢 self join (mesma tabela, joins separados)
    // join-3-!@#onibus-bk          |*j| 🟢 self join (mesma tabela, joins separados)
    
    // join-2-!@#onibus-bk          |*j| 🟢 join + or (join com condição OR na sua chamada)
    // join-1-!@#sinuca-bk          |*j| 🟢 join + or (join com condição OR na sua chamada)

    // join-1-!@#exercicio-bk       |*j| 🟢 left join que não precise do null
    // join-3-!@#frutaria-bk        |*j| 🟢 left join que não precise do null

    // join-2-!@#turismo-bk         |*j| 🟢 left join que precise do null
    // join-2-!@#exercicio-bk       |*j| 🟢 left join que precise do null
    // join-3-!@#casa-bk            |*j| 🟢 left join que precise do null

    // join-2-!@#frutaria-bk        |*j| 🟢 join + condicional AND + OR (juntos)
    // join-1-!@#parque-aquatico-bk |*j| 🟢 join + condicional AND + OR (juntos)
    // join-3-!@#onibus-bk          |*j| 🟢 join + condicional AND + OR (juntos)
    // join-3-!@#ponto-de-onibus-bk |*j| 🟢 join + condicional AND + OR (juntos) [temp 3]

    // join-2-!@#quarto-bk          |*j| 🟢 join + condicional OR (1 ou + de 1)
    // join-2-!@#casa-bk            |*j| 🟢 join + condicional OR (1 ou + de 1)

    // join-3-!@#turismo-bk         |*j| 🟢 join + condicional AND (1 ou + de 1)
    // join-1-!@#ponto-de-onibus-bk |*j| 🟢 join + condicional AND (1 ou + de 1)
    // join-3-!@#parque-aquatico-bk |*j| 🟢 join + condicional AND (1 ou + de 1)
*/

/* Case When
    // case-when-1-!@#parque-aquatico-bk |*c| 🟢 uso mínimo do case (apenas SELECT)
    // case-when-1-!@#turismo-bk         |*c| 🟢 uso mínimo do case (apenas SELECT)

    // case-when-1-!@#exercicio-bk       |*c| 🟢 case + group by + join (left)
    // case-when-1-!@#onibus-bk          |*c| 🟢 case + group by + join (left)

    // case-when-1-!@#frutaria-bk        |*c| 🟢 case + order by (uso direto do alias do case, sem ordenação arbitrária)
    // case-when-2-!@#parque-aquatico-bk |*c| 🟢 case + order by (uso direto do alias do case, sem ordenação arbitrária)
    
    // case-when-2-!@#turismo-bk         |*c| 🟢 case + order by (ordenação arbitrária)
    // case-when-2-!@#ponto-de-onibus-bk |*c| 🟢 case + order by (ordenação arbitrária)

    // case-when-1-!@#quarto-bk          |*c| 🟢 case + group by + order by (uso direto do alias do case, sem ordenação arbitrária)
    // case-when-1-!@#casa-bk            |*c| 🟢 case + group by + order by (uso direto do alias do case, sem ordenação arbitrária)

    // case-when-2-!@#quarto-bk          |*c| 🟢 case (qtd: 2) + group by (sem join)

    // case-when-1-!@#ponto-de-onibus-bk |*c| 🟢 case + group by + order by (ordenação arbitrária)
    // case-when-2-!@#exercicio-bk       |*c| 🟢 case + group by + order by (ordenação arbitrária)
    
    // case-when-3-!@#turismo-bk         |*c| 🟢 case + group by (sem join)
    // case-when-1-!@#sinuca-bk          |*c| 🟢 case + group by (sem join)
    // case-when-2-!@#onibus-bk          |*c| 🟢 case + group by (sem join)

    // case-when-2-!@#frutaria-bk        |*c| 🟢 case + group by + join (sem left)
    // case-when-2-!@#sinuca-bk          |*c| 🟢 case + group by + join (sem left)
    // case-when-2-!@#casa-bk            |*c| 🟢 case + group by + join (sem left)
*/

/* Sub consulta
    // subconsulta-1-!@#quarto-bk          |*s| 🟢 uso mínimo com 2 tabelas envolvidas
    // subconsulta-1-!@#sinuca-bk          |*s| 🟢 uso mínimo com 2 tabelas envolvidas
    
    // subconsulta-1-!@#turismo-bk         |*s| 🟢 uso mínimo com 2 tabelas envolvidas + AND
    // subconsulta-2-!@#onibus-bk          |*s| 🟢 uso mínimo com 2 tabelas envolvidas + AND
    // subconsulta-2-!@#frutaria-bk        |*s| 🟢 uso mínimo com 2 tabelas envolvidas + AND

    // subconsulta-1-!@#casa-bk            |*s| 🟢 entrada por igualdade (ao invés de in) && not in 
    // subconsulta-2-!@#quarto-bk          |*s| 🟢 entrada por igualdade (ao invés de in) && função agregadora min()
    // subconsulta-1-!@#onibus-bk          |*s| 🟢 entrada por igualdade (ao invés de in) && função agregadora max()

    // subconsulta-2-!@#sinuca-bk          |*s| 🟢 Uso com sub consultas com not in ( combinou: not in + in )
    // subconsulta-1-!@#parque-aquatico-bk |*s| 🟢 Uso com sub consultas com not in

    // subconsulta-2-!@#turismo-bk         |*s| 🟢 subconsulta com join
    // subconsulta-3-!@#turismo-bk         |*s| 🟢 subconsulta com join
    // subconsulta-2-!@#parque-aquatico-bk |*s| 🟢 subconsulta com join
    // subconsulta-1-!@#exercicio-bk       |*s| 🟢 subconsulta com join

    // subconsulta-1-!@#frutaria-bk        |*s| 🟢 uso mínimo com 2 tabelas envolvidas + OR
    // subconsulta-2-!@#exercicio-bk       |*s| 🟢 uso mínimo com 2 tabelas envolvidas + OR
    
    // subconsulta-1-!@#ponto-de-onibus-bk |*s| 🟢 sub consulta com OR externo (dois caminhos)

    // subconsulta-2-!@#ponto-de-onibus-bk |*s| 🟢 sub consulta com OR dentro de outra subconsulta

    // subconsulta-3-!@#quarto-bk          |*s| 🟢 subconsulta grande
    // subconsulta-2-!@#casa-bk            |*s| 🟢 subconsulta grande
*/

export function sqlQueryGrammar(url: string, sqlInRow: string) {
    let analysis

    const countIt = (word: string) => sqlInRow.split(" ").filter(w => w === word).length
    
    // VERIFICADO: 09
    if (url === 'casa-agregacao-1') {
        // group by com 2 colunas, mesma tabela usada no select e no group by
        analysis = [
            true
            // sqlInRow.split(" ").filter(word => word === "join").length === 0,
            // sqlInRow.split(" ").filter(word => word === "membro_rotina").length === 1,
            // sqlInRow.split(" ").filter(word => word === "membro_fk,").length === 2,
            // sqlInRow.split(" ").filter(word => word === "group").length === 1
        ]
    }

    // VERIFICADO: 84
    if (url === 'casa-agregacao-2') {
        console.log("CASA.AGREGACAO.2")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 2,
            countIt("where") === 1,
            countIt("group") === 1,
            countIt("having") === 0
        ]
    }

    // VERIFICADO: 87
    if (url === 'casa-agregacao-3') {
        console.log("CASA.AGREGACAO.3")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 2,
            countIt("where") === 0,
            countIt("group") === 1,
            countIt("having") === 1
        ]
    }

    // VERIFICADO: 85
    if (url === 'casa-case-when-1') {
        console.log("CASA.CASE WHEN.1")

        analysis = [
            countIt("select") === 1,
            countIt("case") === 1,
            countIt("group") === 1,
            countIt("order") === 1,
            countIt("join") === 0
        ]
    }

    // VERIFICADO: 86
    if (url === 'casa-case-when-2') {
        console.log("CASA.CASE WHEN.2")

        analysis = [
            countIt("select") === 1,
            countIt("case") === 1,
            countIt("group") === 1,
            countIt("join") === 1,
            countIt("left") === 0
        ]
    }
    
    // VERIFICADO: 22 [has] [j]
    else if (url === 'casa-join-1') {
        // polireferência: membro_familia referenciado 2x, 3 joins
        analysis = [
            sqlInRow.split(" ").filter(word => word === "membro_familia").length === 2,
            sqlInRow.split(" ").filter(word => word === "join").length === 3
        ]
    }

    // VERIFICADO: 78
    else if (url === 'casa-join-2') {
        console.log("CASA.JOIN.2")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 2,
            countIt("where") === 1,
            countIt("or") >= 1,
            countIt("and") === 0
        ]
    }

    // VERIFICADO: 80
    else if (url === 'casa-join-3') {
        console.log("CASA.JOIN.3")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 1,
            countIt("left") === 1,
            countIt("where") === 1,
            countIt("null") === 1,
            countIt("not") === 0
        ]
    }
    
    // VERIFICADO: 04 [has] [s]
    else if (url === 'casa-subconsulta-1') {
        analysis = [
            sqlInRow.split(" ").filter(word => word === "not").length === 1,
            sqlInRow.split(" ").filter(word => word === "in").length >= 1,
            sqlInRow.split(" ").filter(word => word === "select").length === 3
        ]
    }

    // VERIFICADO: 83
    else if (url === 'casa-subconsulta-2') {
        console.log("CASA.SUB CONSULTA.2")

        analysis = [
            countIt("select") === 4,
            countIt("join") === 0,
            countIt("and") >= 1,
            countIt("in") >= 3
        ]
    }
    
    // VERIFICADO: 17
    else if (url === 'exercicio-agregacao-1') {
        // group by com 2 colunas, com join
        analysis = [
            true
            // sqlInRow.split(" ").filter(word => word === "join").length === 2,
            // sqlInRow.split(" ").filter(word => word === "group").length === 1
        ]
    }
    
    // VERIFICADO: 24
    else if (url === 'exercicio-agregacao-2') {
        // count(distinct ...), sem group by, sem join
        analysis = [
            true
            // sqlInRow.includes("count("),
            // sqlInRow.split(" ").filter(word => word === "distinct").length === 1,
            // sqlInRow.split(" ").filter(word => word === "join").length === 0,
            // sqlInRow.split(" ").filter(word => word === "group").length === 0
        ]
    }

    // VERIFICADO: 33
    else if (url === 'exercicio-agregacao-3') {
        console.log('EXERCICIO.AGREGACAO.3')

        analysis = [
            sqlInRow.split(" ").filter(word => word === "having").length >= 1,
            sqlInRow.split(" ").filter(word => word === "where").length === 0,
            sqlInRow.split(" ").filter(word => word === "group").length === 1
        ]
    }
    
    // VERIFICADO: 45
    else if (url === 'exercicio-agregacao-4') {
        console.log("EXERCICIO.AGREGACAO.4")

        analysis = [
            sqlInRow.split(" ").filter(word => word === "select").length === 1,
            sqlInRow.split(" ").filter(word => word === "join").length === 1,
            sqlInRow.split(" ").filter(word => word === "where").length === 1,
            sqlInRow.split(" ").filter(word => word === "group").length === 1,
            sqlInRow.split(" ").filter(word => word === "having").length === 0
        ]
    }

    // VERIFICADO: 26
    else if (url === 'exercicio-case-when-1') {
        analysis = [
            true
        ]
    }

    // VERIFICADO: 90
    else if (url === 'exercicio-case-when-2') {
        console.log("EXERCICIO.CASE WHEN.2")

        // Versão com else no final do 'order by'
        const sql = "select case when algo_visto_fk is null then 'nao_identificado' when hora_visto is null then 'hora_incerta' when hora_visto < 12 then'dia' else 'tarde_ou_noite' end as tipo_registro, count(*) as total_avistamentos from avistamento group by tipo_registro order by case tipo_registro when 'dia' then 1 when 'tarde_ou_noite' then 2 when 'hora_incerta' then 3 when 'nao_identificado' then 4 end;"
        
        // Versão com when no final do 'order by'
        const sqlv2 = "select case when algo_visto_fk is null then 'nao_identificado' when hora_visto is null then 'hora_incerta' when hora_visto < 12 then'dia' else 'tarde_ou_noite' end as tipo_registro, count(*) as total_avistamentos from avistamento group by tipo_registro order by case tipo_registro when 'dia' then 1 when 'tarde_ou_noite' then 2 when 'hora_incerta' then 3 else 'nao_identificado' end;"
        
        const expectedSQLSlice = sqlNormalizer(sql.slice(sql.toLowerCase().indexOf('end')))
        const expectedSQLSlicev2 = sqlNormalizer(sqlv2.slice(sqlv2.toLowerCase().indexOf('end')))
        const personSQLSlice = sqlNormalizer(sqlInRow.slice(sqlInRow.toLowerCase().indexOf('end')))

        analysis = [
            // 'order by' do usuário bate exato com o que é esperado da ordenação
            expectedSQLSlice === personSQLSlice || expectedSQLSlicev2 === personSQLSlice
        ]

    }
    
    // VERIFICADO: 30
    else if(url === 'exercicio-join-1') {
        console.log("EXERCICIO.JOIN.1")

        analysis = [true]
    }
    
    // VERIFICADO: 52
    else if(url === 'exercicio-join-2') {
        console.log("EXERCICIO.JOIN.2")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 2,
            countIt("left") === 1,
            countIt("where") === 1,
            countIt("null") === 1,
            countIt("not") === 0
        ]
    }

    // VERIFICADO: 73
    else if(url === 'exercicio-subconsulta-1') {
        console.log("EXERCICIO.SUB CONSULTA.1")

        analysis = [
            countIt("select") === 2,
            countIt("join") === 1,
            countIt("in") === 1,
            countIt("where") === 2
        ]
    }

    // VERIFICADO: 88
    else if(url === 'exercicio-subconsulta-2') {
        console.log("EXERCICIO.SUB CONSULTA.2")

        analysis = [
            countIt("select") === 2,
            countIt("in") === 1,
            countIt("or") === 1,
            countIt("join") === 0
        ]
    }
    
    // VERIFICADO: 02
    else if (url === 'frutaria-agregacao-1') {
        // 2 funções agregadoras (count + max) com join, sem where/having
        analysis = [
            // sqlInRow.includes("count("),
            // sqlInRow.includes("max("),
            // sqlInRow.split(" ").filter(word => word === "join").length === 1,
            // sqlInRow.split(" ").filter(word => word === "group").length === 1,
            // sqlInRow.split(" ").filter(word => word === "where").length === 0,
            // sqlInRow.split(" ").filter(word => word === "having").length === 0
            true
        ]
    }
    
    // VERIFICADO: 29
    else if (url === 'frutaria-agregacao-2') {
        console.log("FRUTARIA.AGREGAÇÃO.2")

        analysis = [
            sqlInRow.split(" ").filter(word => word === "where").length >= 1,
            sqlInRow.split(" ").filter(word => word === "having").length === 0,
            sqlInRow.split(" ").filter(word => word === "group").length === 1
        ]
    }
    
    // VERIFICADO: 55
    else if (url === 'frutaria-agregacao-3') {
        console.log("FRUTARIA.AGREGACAO.3")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 2,
            countIt("where") === 1,
            countIt("group") === 1,
            countIt("having") === 0
        ]
    }
    
    // VERIFICADO: 61
    else if (url === 'frutaria-agregacao-4') {
        console.log("FRUTARIA.AGREGACAO.4")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 1,
            countIt("where") === 1,
            countIt("group") === 1,
            countIt("having") === 0
        ]
    }
    
    // VERIFICADO: 19 [has] [cw]
    else if (url === 'frutaria-case-when-1') {
        // case afetando order by (versão sem segundo case, ordenando direto pelo alias numérico)
        analysis = [
            sqlInRow.split(" ").filter(word => word === "case").length === 1,
            sqlInRow.split(" ").filter(word => word === "order").length === 1,
        ]
    }
    
    // VERIFICADO: 50 
    else if (url === 'frutaria-case-when-2') {
        console.log("FRUTARIA.CASE WHEN.2")

        analysis = [
            countIt("select") === 1,
            countIt("case") === 1,
            countIt("join") === 1,
            countIt("group") === 1,
            countIt("left") === 0
        ]
    }    

    // VERIFICADO: 05
    else if (url === 'frutaria-join-1') {
        // join mínimo, 2 joins, sem filtro
        analysis = [
            true
            // sqlInRow.split(" ").filter(word => word === "join").length === 2,
            // sqlInRow.split(" ").filter(word => word === "where").length === 0
        ]
    }
    
    // VERIFICADO: 43
    else if (url === 'frutaria-join-2') {
        console.log("FRUTARIA.JOIN.2")

        analysis = [
            sqlInRow.split(" ").filter(word => word === "select").length === 1,
            sqlInRow.split(" ").filter(word => word === "join").length === 1,
            sqlInRow.split(" ").filter(word => word === "where").length === 1,
            sqlInRow.split(" ").filter(word => word === "and").length >= 1,
            sqlInRow.split(" ").filter(word => word === "or").length >= 1
        ]
    }
    
    // VERIFICADO: 54
    else if (url === 'frutaria-join-3') {
        console.log("FRUTARIA.JOIN.3")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 1,
            countIt("left") === 1,
            countIt("where") === 1,
            countIt("null") === 0
        ]
    }

    // VERIFICADO: 35
    else if (url === 'frutaria-subconsulta-1') {
        console.log('FRUTARIA.SUB CONSULTA.1')

        analysis = [
            sqlInRow.split(" ").filter(word => word === "select").length >= 2,
            sqlInRow.split(" ").filter(word => word === "in").length >= 1,
            sqlInRow.split(" ").filter(word => word === "or").length === 1,
            sqlInRow.split(" ").filter(word => word === "join").length === 0
        ]
    }

    // VERIFICADO: 91
    else if (url === 'frutaria-subconsulta-2') {
        console.log("FRUTARIA.SUB CONSULTA.2")

        analysis = [
            countIt("select") === 2,
            countIt("in") === 1,
            countIt("and") >= 1,
            countIt("join") === 0
        ]
    }
    
    // VERIFICADO: 60
    else if(url === 'onibus-agregacao-1') {
        console.log("ONIBUS.AGREGACAO.1")
        
        analysis = [
            countIt("select") === 1,
            countIt("join") === 1,
            countIt("where") === 0,
            countIt("group") === 1,
            countIt("having") === 1
        ]
    }

    // VERIFICADO: 79
    else if(url === 'onibus-agregacao-2') {
        console.log("ONIBUS.AGREGACAO.2")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 2,
            countIt("where") === 1,
            countIt("group") === 1,
            countIt("having") === 0
        ]
    }
    
    // VERIFICADO: 03 [has] [cw] (retirado)
    else if (url === 'onibus-case-when-1') {
        // case + left join (corrigir o typo antes) + group by + is null
        analysis = [
            true
            // sqlInRow.split(" ").filter(word => word === "case").length === 1,
            // sqlInRow.split(" ").filter(word => word === "left").length === 1,
            // sqlInRow.split(" ").filter(word => word === "null").length === 1,
            // sqlInRow.split(" ").filter(word => word === "group").length === 1
        ]
    }
    
    // VERIFICADO: 81
    else if (url === 'onibus-case-when-2') {
        console.log("ONIBUS.CASE WHEN.2")

        analysis = [
            countIt("select") === 1,
            countIt("case") === 1,
            countIt("group") === 1,
            countIt("join") === 0
        ]
    }
    
    // VERIFICADO: 06
    else if (url === 'onibus-join-1') {
        // join sequencial, 3 joins, sem filtro
        analysis = [
            true
            // sqlInRow.split(" ").filter(word => word === "join").length === 3,
            // sqlInRow.split(" ").filter(word => word === "where").length === 0
        ]
    }
    
    // VERIFICADO: 23 [has] [j]
    else if (url === 'onibus-join-2') {
        // join + or dentro do próprio on
        analysis = [
            sqlInRow.split(" ").filter(word => word === "join").length === 1,
            sqlInRow.split(" ").filter(word => word === "or").length === 1,
            sqlInRow.split(" ").filter(word => word === "where").length === 0
        ]
    }

    // VERIFICADO: 82
    else if (url === 'onibus-join-3') {
        console.log("ONIBUS.JOIN.3")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 2,
            countIt("passageiro") === 2,
            countIt("where") === 1,
            countIt("and") >= 1
        ]
    }

    // VERIFICADO: 92
    else if (url === 'onibus-join-4') {
        console.log("ONIBUS.JOIN.4")
        
        analysis = [
            countIt("select") === 1,
            countIt("join") === 2,
            countIt("where") === 1,
            countIt("and") >= 1,
            countIt("68") === 1
        ]
    }
    
    // VERIFICADO: 69
    else if (url === 'onibus-subconsulta-1') {
        console.log("ONIBUS.SUB CONSULTA.1")

        analysis = [
            countIt("select") === 2,
            countIt("in") <= 1,
            countIt("join") === 0
        ]
    }

    // VERIFICADO: 89
    else if (url === 'onibus-subconsulta-2') {
        console.log("ONIBUS.SUB CONSULTA.2")

        analysis = [
            countIt("select") === 2,
            countIt("in") === 1,
            countIt("and") === 1,
            countIt("join") === 0
        ]
    }
    
    // VERIFICADO: 59
    else if (url === 'parque-aquatico-agregacao-1') {
        console.log("PARQUE AQUATICO.AGREGACAO.1")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 2,
            countIt("where") === 1,
            countIt("group") === 1,
            countIt("having") === 1
        ]
    }

    // [temp 2] VERIFICADO: 66
    else if (url === 'parque-aquatico-agregacao-2') {
        console.log("PARQUE AQUATICO.AGREGACAO.2")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 2,
            countIt("where") === 1,
            countIt("group") === 1,
            countIt("having") === 1
        ]
    }

    // VERIFICADO: 13
    else if (url === 'parque-aquatico-case-when-1') {
        // case só no select, sem join/group by/order by
        analysis = [
            true
            // sqlInRow.split(" ").filter(word => word === "case").length === 1,
            // sqlInRow.split(" ").filter(word => word === "join").length === 0,
            // sqlInRow.split(" ").filter(word => word === "group").length === 0
        ]
    }

    // VERIFICADO: 76
    else if (url === 'parque-aquatico-case-when-2') {
        console.log("PARQUE AQUATICO.CASE WHEN.2")

        // Versão com else no final do 'order by'
        const sql = "select pa_entrada_id, case when esta_socio = 0 and hora_entrada < 12 then 'visitante matutino' when esta_socio = 0 and hora_entrada >= 12 then 'visitante vespertino' when esta_socio = 1 and hora_entrada < 12 then 'sócio matutino' else 'sócio vespertino' end as status from parque_aquatico_entrada order by status;"
        
        const expectedSQLSlice = sqlNormalizer(sql.slice(sql.toLowerCase().indexOf('end')))
        const personSQLSlice = sqlNormalizer(sqlInRow.slice(sqlInRow.toLowerCase().indexOf('end')))

        analysis = [
            countIt("select") === 1,
            countIt("case") === 1,
            countIt("order") === 1,
            countIt("group") === 0,
            countIt("join") === 0,
            countIt("else") === 1,
            expectedSQLSlice === personSQLSlice
        ]
    }

    // VERIFICADO: 57
    else if (url === 'parque-aquatico-join-1') {
        console.log("PARQUE AQUATICO.JOIN.1")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 2,
            countIt("where") === 1,
            countIt("and") >= 1,
            countIt("or") >= 1
        ]
    }
    
    // VERIFICADO: 64
    else if (url === 'parque-aquatico-join-2') {
        console.log("PARQUE AQUATICO.JOIN.2")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 4,
            countIt("where") === 1,
            countIt("and") >= 1,
            countIt("or") === 0
        ]
    }

    // VERIFICADO: 68
    else if (url === 'parque-aquatico-join-3') {
        console.log("PARQUE AQUATICO.JOIN.3")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 3,
            countIt("where") === 1,
            countIt("and") >= 1,
            countIt("or") === 0
        ]
    }

    // VERIFICADO: 70
    else if(url === 'parque-aquatico-subconsulta-1') {
        console.log("PARQUE AQUATICO.SUB CONSULTA.1")

        analysis = [
            countIt("select") === 2,
            countIt("not") === 1,
            countIt("in") === 1,
            countIt("join") === 0
        ]
    }

    // VERIFICADO: 72
    else if(url === 'parque-aquatico-subconsulta-2') {
        console.log("PARQUE AQUATICO.SUB CONSULTA.2")

        analysis = [
            countIt("select") === 2,
            countIt("join") === 1,
            countIt("in") === 1,
            countIt("where") === 2
        ]
    }

    // VERIFICADO: 37
    else if (url === 'ponto-de-onibus-agregacao-1') {
        console.log("PONTO DE ONIBUS.AGREGACAO.1")

        analysis = [
            sqlInRow.split(" ").filter(word => word === "where").length >= 1,
            sqlInRow.split(" ").filter(word => word === "having").length >= 1,
            sqlInRow.split(" ").filter(word => word === "group").length === 1,
            sqlInRow.split(" ").filter(word => word === "join").length === 0
        ]
    }
    
    // VERIFICADO: 38
    else if (url === 'ponto-de-onibus-agregacao-2') {
        console.log('PONTO DE ONIBUS.AGREGACAO.2')

        analysis = [
            sqlInRow.split(" ").filter(word => word === "having").length >= 1,
            sqlInRow.split(" ").filter(word => word === "where").length === 0,
            sqlInRow.split(" ").filter(word => word === "join").length === 1,
            sqlInRow.split(" ").filter(word => word === "group").length === 1,
            sqlInRow.split(" ").filter(word => word === "like").length === 1
        ]
    }
    
    // VERIFICADO: 39
    else if (url === 'ponto-de-onibus-case-when-1') {
        console.log("PONTO DE ONIBUS.CASE WHEN.1")

        // Versão com else no final do 'order by'
        const sql = "select case when (duracao_cor_verde - duracao_cor_vermelha) > 3 then 'rápido' when (duracao_cor_verde - duracao_cor_vermelha) > 0 then 'dinâmico'else 'truncado' end as fluxo, count(*) as qtd_semaforos from semaforo group by fluxo order by case fluxo when 'rápido' then 1 when 'dinâmico' then 2 when 'truncado' then 3 end;"
        
        // Versão com when no final do 'order by'
        const sqlv2 = "select case when (duracao_cor_verde - duracao_cor_vermelha) > 3 then 'rápido' when (duracao_cor_verde - duracao_cor_vermelha) > 0 then 'dinâmico'else 'truncado' end as fluxo, count(*) as qtd_semaforos from semaforo group by fluxo order by case fluxo when 'rápido' then 1 when 'dinâmico' then 2 else 3 end;"
        
        const expectedSQLSlice = sqlNormalizer(sql.slice(sql.toLowerCase().indexOf('end')))
        const expectedSQLSlicev2 = sqlNormalizer(sqlv2.slice(sqlv2.toLowerCase().indexOf('end')))
        const personSQLSlice = sqlNormalizer(sqlInRow.slice(sqlInRow.toLowerCase().indexOf('end')))

        analysis = [
            // 'order by' do usuário bate exato com o que é esperado da ordenação
            expectedSQLSlice === personSQLSlice || expectedSQLSlicev2 === personSQLSlice
        ]
    }

    // VERIFICADO: 77
    else if (url === 'ponto-de-onibus-case-when-2') {
        console.log("PONTO DE ONIBUS.CASE WHEN.2")

        // Versão com else no final do 'order by'
        const sql = "select loc_id, case when lotacao <= 20 and horario_loc < 12 then 'vago-dia' when lotacao <= 20 and horario_loc >= 12 then 'vago-tarde-noite' when lotacao > 20 and horario_loc < 12 then 'enchendo-dia' else 'enchendo-tarde-noite' end as relatorio from locomocao order by case relatorio when 'vago-dia' then 1 when 'enchendo-dia' then 2 when 'vago-tarde-noite' then 3 when 'enchendo-tarde-noite' then 4 end;"
        
        // Versão com when no final do 'order by'
        const sqlv2 = "select loc_id, case when lotacao <= 20 and horario_loc < 12 then 'vago-dia' when lotacao <= 20 and horario_loc >= 12 then 'vago-tarde-noite' when lotacao > 20 and horario_loc < 12 then 'enchendo-dia' else 'enchendo-tarde-noite' end as relatorio from locomocao order by case relatorio when 'vago-dia' then 1 when 'enchendo-dia' then 2 when 'vago-tarde-noite' then 3 else 'enchendo-tarde-noite' end;"
        
        const expectedSQLSlice = sqlNormalizer(sql.slice(sql.toLowerCase().indexOf('end')))
        const expectedSQLSlicev2 = sqlNormalizer(sqlv2.slice(sqlv2.toLowerCase().indexOf('end')))
        const personSQLSlice = sqlNormalizer(sqlInRow.slice(sqlInRow.toLowerCase().indexOf('end')))

        analysis = [
            // 'order by' do usuário bate exato com o que é esperado da ordenação
            expectedSQLSlice === personSQLSlice || expectedSQLSlicev2 === personSQLSlice
        ]
    }
    
    // VERIFICADO: 58
    else if (url === 'ponto-de-onibus-join-1') {
        console.log("PONTO DE ONIBUS.JOIN.1")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 2,
            countIt("where") === 1,
            countIt("and") >= 1,
            countIt("or") === 0
        ]
    }

    // VERIFICADO: 63 
    else if (url === 'ponto-de-onibus-join-2') {
        console.log("PONTO DE ONIBUS.JOIN.2")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 1,
            countIt("where") === 1,
            countIt("and") >= 1,
            countIt("or") >= 1
        ]
    }

    // [temp 3] VERIFICADO: 67
    else if (url === 'ponto-de-onibus-join-3') {
        console.log("PONTO DEONIBUS.JOIN.3")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 2,
            countIt("where") === 1,
            countIt("and") >= 1,
            countIt("or") >= 1,
            countIt("distinct") === 0
        ]
    }

    // VERIFICADO: 41
    else if (url === 'ponto-de-onibus-subconsulta-1') {
        console.log("PONTO DE ONIBUS.SUB CONSULTA.1")

        analysis = [
            sqlInRow.split(" ").filter(word => word === "select").length === 5,
            sqlInRow.split(" ").filter(word => word === "in").length >= 3,
            sqlInRow.split(" ").filter(word => word === "or").length === 1,
            sqlInRow.split(" ").filter(word => word === "join").length === 0
        ]
    }
    
    // VERIFICADO: 42 
    else if (url === 'ponto-de-onibus-subconsulta-2') {
        console.log("PONTO DE ONIBUS.SUB CONSULTA.2")

        analysis = [
            sqlInRow.split(" ").filter(word => word === "select").length === 4,
            sqlInRow.split(" ").filter(word => word === "in").length === 3,
            sqlInRow.split(" ").filter(word => word === "or").length === 1,
            sqlInRow.split(" ").filter(word => word === "join").length === 0
        ]
    }
    
    // VERIFICADO: 56
    else if (url === 'quarto-agregacao-1') {
        console.log("QUARTO.AGREGACAO.1")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 1,
            countIt("where") === 0,
            countIt("group") === 1,
            countIt("having") === 1
        ]
    }
    
    // VERIFICADO: 31
    else if (url === 'quarto-case-when-1') {
        console.log("QUARTO.CASE WHEN.1")

        analysis = [
            sqlInRow.split(" ").filter(word => word === "case").length === 1,
            sqlInRow.split(" ").filter(word => word === "group").length === 1,
            sqlInRow.split(" ").filter(word => word === "order").length === 1
        ]
    }

    // VERIFICADO: 36
    else if (url === 'quarto-case-when-2') {
        console.log("QUARTO.CASE WHEN.2")

        analysis = [
            sqlInRow.split(" ").filter(word => word === "case").length === 2,
            sqlInRow.split(" ").filter(word => word === "group").length === 1,
            sqlInRow.split(" ").filter(word => word === "join").length === 0
        ]
    }
    
    // VERIFICADO: 12
    else if (url === 'quarto-join-1') {
        // join mínimo (dono -> quarto_relatorio -> objeto), sem filtro
        analysis = [
            true
            // sqlInRow.split(" ").filter(word => word === "join").length === 2,
            // sqlInRow.split(" ").filter(word => word === "where").length === 0
        ]
    }
    
    // VERIFICADO: 44
    else if (url === 'quarto-join-2') {
        console.log("QUARTO.JOIN.2")

        analysis = [
            sqlInRow.split(" ").filter(word => word === "select").length === 1,
            sqlInRow.split(" ").filter(word => word === "distinct").length === 1,
            sqlInRow.split(" ").filter(word => word === "join").length === 3,
            sqlInRow.split(" ").filter(word => word === "where").length === 1,
            sqlInRow.split(" ").filter(word => word === "or").length >= 1,
            sqlInRow.split(" ").filter(word => word === "or").length <= 2,
            sqlInRow.split(" ").filter(word => word === "in").length <= 1,
            sqlInRow.split(" ").filter(word => word === "and").length === 0
        ]
    }

    // VERIFICADO: 47
    else if (url === 'quarto-join-3') {
        console.log("QUARTO.JOIN.3")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 2,
            countIt("where") === 1,
            countIt("and") === 1
        ]
    }
    
    // VERIFICADO: 53
    else if (url === 'quarto-join-4') {
        console.log("QUARTO.JOIN.4")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 3,
            countIt("objeto") === 2,
            countIt("where") === 1,
            (countIt("or") === 1 && countIt("in") === 0) || (countIt("or") === 0 && countIt("in") === 1)
        ]
    }
    
    // VERIFICADO: 11 [has] [s]
    else if (url === 'quarto-subconsulta-1') {
        console.log("QUARTO.SUB CONSULTA.1")
        
        analysis = [
            sqlInRow.split(" ").filter(word => word === "where").length === 2,
            sqlInRow.split(" ").filter(word => word === "1").length === 1,
            sqlInRow.split(" ").filter(word => word === "dono").length === 1,
            sqlInRow.split(" ").filter(word => word === "quarto_relatorio").length === 1
        ]
    }
    
    // VERIFICADO: 20 [has] [s]
    else if (url === 'quarto-subconsulta-2') {
        // igualdade baseada em min(), com "is not null"
        analysis = [
            sqlInRow.split(" ").filter(word => word === "where").length === 3,
            sqlInRow.split(" ").filter(word => word === "select").length === 3,
            sqlInRow.includes("min("),
            sqlInRow.split(" ").filter(word => word === "not").length === 1,
            sqlInRow.split(" ").filter(word => word === "null").length === 1
        ]
    }
    
    // VERIFICADO: 51
    else if (url === 'quarto-subconsulta-3') {
        console.log("QUARTO.SUB CONSULTA.3")
        
        analysis = [
            countIt("select") === 4,
            countIt("in") === 3,
            countIt("and") === 1,
            countIt("or") === 0,
            countIt("join") === 0
        ]
    }
    
    // VERIFICADO: 07
    else if (url === 'sinuca-agregacao-1') {
        // agregação mínima, sem group by, sem join
        analysis = [
            true
            // sqlInRow.includes("avg("),
            // sqlInRow.split(" ").filter(word => word === "group").length === 0,
            // sqlInRow.split(" ").filter(word => word === "join").length === 0
        ]
    }
    
    // VERIFICADO: 08
    else if (url === 'sinuca-agregacao-2') {
        // group by mínimo, sem join
        analysis = [
            true
            // sqlInRow.includes("count("),
            // sqlInRow.split(" ").filter(word => word === "group").length === 1,
            // sqlInRow.split(" ").filter(word => word === "join").length === 0
        ]
    }
    
    // VERIFICADO: 62
    else if (url === 'sinuca-agregacao-3') {
        console.log("SINUCA.AGREGACAO.3")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 1,
            countIt("where") === 0,
            countIt("group") === 1,
            countIt("having") === 1
        ]
    }
    
    // VERIFICADO: 65 
    else if (url === 'sinuca-agregacao-4') {
        console.log("SINUCA.AGREGACAO.4")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 2,
            countIt("where") === 1,
            countIt("group") === 1,
            countIt("having") === 1
        ]
    }

    // VERIFICADO: 74
    else if (url === 'sinuca-case-when-1') {
        console.log("SINUCA.CASE WHEN.1")

        analysis = [
            countIt("select") === 1,
            countIt("case") === 1,
            countIt("group") === 1,
            countIt("join") === 0
        ]
    }

    // VERIFICADO: 75
    else if (url === 'sinuca-case-when-2') {
        console.log("SINUCA.CASE WHEN.2")

        analysis = [
            countIt("select") === 1,
            countIt("case") === 1,
            countIt("group") === 1,
            countIt("join") === 1,
            countIt("left") === 0
        ]
    }

    // VERIFICADO: 01 [has] [j]
    else if (url === 'sinuca-join-1') {
        // 3 condições unidas por OR dentro do ON, um único JOIN, com DISTINCT
        analysis = [
            sqlInRow.split(" ").filter(word => word === "or").length === 2,
            sqlInRow.split(" ").filter(word => word === "join").length === 1,
            sqlInRow.split(" ").filter(word => word === "distinct").length === 1
        ]
    }
    
    // VERIFICADO: 16 [has] [j]
    else if (url === 'sinuca-join-2') {
        // polireferência: sinuquista referenciado 3x, 3 joins
        analysis = [
            sqlInRow.split(" ").filter(word => word === "sinuquista").length === 3,
            sqlInRow.split(" ").filter(word => word === "join").length === 3
        ]
    }
    
    // VERIFICADO: 14 [has] [s]
    else if (url === 'sinuca-subconsulta-1') {
        // mínima, IN puro, sem NOT
        analysis = [
            sqlInRow.split(" ").filter(word => word === "where").length === 1,
            sqlInRow.split(" ").filter(word => word === "in").length === 1,
            sqlInRow.split(" ").filter(word => word === "not").length === 0,
            sqlInRow.split(" ").filter(word => word === "select").length === 2
        ]
    }
    
    // VERIFICADO: 21 [has] [s]
    else if (url === 'sinuca-subconsulta-2') {
        // not in + in combinados com and
        analysis = [
            sqlInRow.split(" ").filter(word => word === "not").length === 1,
            sqlInRow.split(" ").filter(word => word === "in").length === 2,
            sqlInRow.split(" ").filter(word => word === "and").length === 1,
            sqlInRow.split(" ").filter(word => word === "select").length === 3
        ]
    }
    
    // VERIFICADO: 18
    else if (url === 'turismo-agregacao-1') {
        // 2 funções agregadoras, join, sem filtro
        analysis = [
            true
            // sqlInRow.includes("count("),
            // sqlInRow.includes("avg("),
            // sqlInRow.split(" ").filter(word => word === "join").length === 1,
            // sqlInRow.split(" ").filter(word => word === "where").length === 0,
            // sqlInRow.split(" ").filter(word => word === "having").length === 0
        ]
    }
    
    // VERIFICADO: 25
    else if (url === 'turismo-agregacao-2') {
        console.log("TURISMO.AGREGAÇÃO.1")
        
        analysis = [
            true
            // sqlInRow.split(" ").filter(word => word === "guia").length === 1,
        ]
    }

    // VERIFICADO: 46
    else if (url === 'turismo-agregacao-3') {
        console.log("TURISMO.AGREGACAO.3")

        analysis = [
            sqlInRow.split(" ").filter(word => word === "select").length === 1,
            countIt("join") === 2,
            // sqlInRow.split(" ").filter(word => word === "join").length === 2,
            sqlInRow.split(" ").filter(word => word === "where").length === 1,
            sqlInRow.split(" ").filter(word => word === "group").length === 1,
            sqlInRow.split(" ").filter(word => word === "having").length === 1,
            countIt("or") === 1 && countIt("in") === 0 || countIt("or") === 0 && countIt("in") === 1, 
            sqlInRow.split(" ").filter(word => word === "and").length === 0
        ]
    }
    
    // VERIFICADO: 49
    else if (url === 'turismo-agregacao-4') {
        console.log("TURISMO.AGREGACAO.4")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 1,
            countIt("where") === 1,
            countIt("group") === 1,
            countIt("having") === 1
        ]
    }
    
    // VERIFICADO: 10
    else if (url === 'turismo-case-when-1') {
        // case só no select, sem join/group by/order by
        analysis = [
            true
            // sqlInRow.split(" ").filter(word => word === "case").length === 1,
            // sqlInRow.split(" ").filter(word => word === "join").length === 0,
            // sqlInRow.split(" ").filter(word => word === "group").length === 0,
            // sqlInRow.split(" ").filter(word => word === "order").length === 0
        ]
    }
    
    // VERIFICADO: 27 [has] [cw]
    else if (url === 'turismo-case-when-2') {
        console.log("TURISMO.CASE WHEN.2")

        // Versão com else no final do 'order by'
        const sql = "select guia_id, case when expediente = 'm-' then 'manhã' when expediente = 't-' then 'tarde' when expediente = 'n-' then 'noite' else 'dois turnos' end as jornada from guia order by case jornada when 'dois turnos' then 0 when 'manhã' then 1 when 'tarde' then 2 else 3 end;"
        
        // Versão com when no final do 'order by'
        const sqlv2 = "select guia_id, case when expediente = 'm-' then 'manhã' when expediente = 't-' then 'tarde' when expediente = 'n-' then 'noite' else 'dois turnos' end as jornada from guia order by case jornada when 'dois turnos' then 0 when 'manhã' then 1 when 'tarde' then 2 when 'noite' then 3 end;"
        
        const expectedSQLSlice = sqlNormalizer(sql.slice(sql.toLowerCase().indexOf('end')))
        const expectedSQLSlicev2 = sqlNormalizer(sqlv2.slice(sqlv2.toLowerCase().indexOf('end')))
        const personSQLSlice = sqlNormalizer(sqlInRow.slice(sqlInRow.toLowerCase().indexOf('end')))

        analysis = [
            // 'order by' do usuário bate exato com o que é esperado da ordenação
            expectedSQLSlice === personSQLSlice || expectedSQLSlicev2 === personSQLSlice
        ]
    }

    // VERIFICADO: 40
    else if (url === 'turismo-case-when-3') {
        console.log("TURISMO.CASE WHEN.3")

        analysis = [
            sqlInRow.split(" ").filter(word => word === "case").length === 1,
            sqlInRow.split(" ").filter(word => word === "when").length >= 2,
            sqlInRow.split(" ").filter(word => word === "group").length === 1,
            sqlInRow.split(" ").filter(word => word === "join").length === 0
        ]
    }
    
    // VERIFICADO: 15
    else if (url === 'turismo-join-1') {
        analysis = [
            true
            // sqlInRow.split(" ").filter(word => word === "join").length === 3,
            // sqlInRow.split(" ").filter(word => word === "where").length === 0
        ]
    }
    
    // VERIFICADO: 34
    else if (url === 'turismo-join-2') {
        console.log('TURISMO.JOIN.2')

        analysis = [
            sqlInRow.split(" ").filter(word => word === "left").length === 1,
            sqlInRow.split(" ").filter(word => word === "null").length === 1,
            sqlInRow.split(" ").filter(word => word === "select").length === 1,
            sqlInRow.split(" ").filter(word => word === "and").length === 1,
            sqlInRow.split(" ").filter(word => word === "like").length === 1
        ]
    }

    // VERIFICADO: 48
    else if (url === 'turismo-join-3') {
        console.log("TURISMO.JOIN.3")

        analysis = [
            countIt("select") === 1,
            countIt("join") === 2,
            countIt("where") === 1,
            countIt("and") === 2
        ]
    }
    
    // VERIFICADO: 28 [has] [s]
    else if (url === 'turismo-subconsulta-1') {
        console.log("TURISMO.SUB CONSULTA.1")

        analysis = [
          sqlInRow.split(" ").filter(word => word === "where").length === 1,
          sqlInRow.split(" ").filter(word => word === "and").length === 1,
          sqlInRow.split(" ").filter(word => word === "not").length === 1,
          sqlInRow.split(" ").filter(word => word === "in").length === 1
        ]
    }

    // VERIFICADO: 32
    else if(url === 'turismo-subconsulta-2') {
        console.log("TURISMO.SUB CONSULTA.2")
        
        analysis = [
            countIt("select") === 2,
            countIt("join") === 1,
            countIt("in") === 1,
            countIt("where") === 2
        ]
    }

    // VERIFICADO: 71
    else if(url === 'turismo-subconsulta-3') {
        console.log("TURISMO.SUB CONSULTA.3")

        analysis = [
            countIt("select") === 2,
            countIt("join") === 1,
            countIt("in") === 1,
            countIt("where") === 2
        ]
    }

    return !analysis?.includes(false)
}
