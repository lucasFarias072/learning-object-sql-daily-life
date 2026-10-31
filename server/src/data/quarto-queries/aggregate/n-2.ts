

//*TESTADO-95

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN2(): QueryScenarioBackend {
    return {
        // agregacao-2-!@#quarto-bk 
        
        cenario: 'quarto-agregacao-2',
        consultaTipo: 'agregacao',
        id: 2,
        // Liste o codinome do dono, a quantidade de objetos registrados e o objeto alvo de menor identificador. Considere apenas registros que têm coordenada/referência (escolha uma dessas colunas) definida (existe valor para ela), filtrando antes de agrupar. Agrupe pelo codinome e depois de agrupar, mostre somente os donos com objeto alvo de menor identificador diferente da quantidade 2.
        consulta: `
        select codinome, count(*) as total_objetos, min(objeto_fk_alvo) as objeto_alvo_menor_id
        from objeto_coordenada objc
        join dono dn on dn.dono_id = objc.dono_fk
        where coordenada_fk is not null
        group by codinome
        having min(objeto_fk_alvo) <> 2;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
