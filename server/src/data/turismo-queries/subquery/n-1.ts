

//*TESTADO-28

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN1(): QueryScenarioBackend {
    return {
        // subconsulta-1-!@#turismo-bk 
        
        cenario: 'turismo-subconsulta-1',
        consultaTipo: 'subconsulta',
        id: 1,
        // Liste as descrições dos pontos turísticos, sua avaliação, para aqueles que não possuem registros de passeios atualmente e que possuem avaliação alta (4.7 adiante).
        consulta: `
        select descricao_ponto, avaliacao from ponto_turistico
        where ponto_id not in (
            select ponto_fk from passeio 
        ) and avaliacao >= 4.7;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
