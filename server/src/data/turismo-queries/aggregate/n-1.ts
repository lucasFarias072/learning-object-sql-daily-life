

//*TESTADO-18

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN1(): QueryScenarioBackend {
    return {
        // agregacao-1-!@#turismo-bk 
        
        cenario: 'turismo-agregacao-1',
        consultaTipo: 'agregacao',
        id: 1,
        // Para cada guia, quantos passeios fez e qual a média das avaliações atribuidas a eles em cada passeio achado?
        consulta: `
        select guia_fk, count(*) as quantidade_passeios, avg(avaliacao_guia) as media_avaliativa
        from passeio
        group by guia_fk;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
