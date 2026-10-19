

//*TESTADO-9

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN1(): QueryScenarioBackend {
    return {
        // agregacao-1-!@#casa-bk 
        
        cenario: 'casa-agregacao-1',
        consultaTipo: 'agregacao',
        id: 1,
        // Para cada grupo formado de identificadores de membro da família e área, quantas rotinas foram registradas?
        consulta: `
        select membro_fk, area_fk, count(*) as quantidade_rotinas
        from membro_rotina
        group by membro_fk, area_fk;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
