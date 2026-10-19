

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
        select guia_id, count(*) as quantidade_passeios, avg(avaliacao_guia) as media_avaliacao
        from guia gui
        join passeio pas on pas.guia_fk = gui.guia_id
        group by guia_id;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
