

//*TESTADO-93

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN3(): QueryScenarioBackend {
    return {
        // agregacao-3-!@#parque-aquatico-bk 
        
        cenario: 'parque-aquatico-agregacao-3',
        consultaTipo: 'agregacao',
        id: 3,
        // Mostre quantas entradas de sócios (coluna esta_socio) existem para cada hora de entrada. Mostre apenas a coluna da contagem.
        consulta: `
        select count(*) as entradas_por_hora
        from parque_aquatico_entrada
        where esta_socio = 1
        group by hora_entrada;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
