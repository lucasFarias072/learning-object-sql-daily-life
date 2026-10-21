

//*TESTADO-38

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN2(): QueryScenarioBackend {
    return {
        // agregacao-2-!@#ponto-de-onibus-bk 
        
        cenario: 'ponto-de-onibus-agregacao-2',
        consultaTipo: 'agregacao',
        id: 2,
        // Mostre a descrição de cada zona e a contagem dos ônibus estão vinculados a ela. Dos grupos formados, mostre apenas as zonas que comecem com a letra 'S'.
        consulta: `
        select descricao_zona, count(*) as qtd_onibus
        from onibus_zona oz
        join zona z on z.zona_id = oz.zona_fk
        group by descricao_zona
        having descricao_zona like 'S%';
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
