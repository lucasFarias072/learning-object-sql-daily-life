

//*TESTADO-18

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN1(): QueryScenarioBackend {
    return {
        // agregacao-1-!@#turismo-bk 
        
        cenario: 'turismo-agregacao-1',
        consultaTipo: 'agregacao',
        id: 1,
        // Para cada identificador de guia, liste a quantidade de passeios realizados e a média das avaliações atribuídas a esses passeios.
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
