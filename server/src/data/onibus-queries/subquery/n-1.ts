

//*TESTADO-69

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN1(): QueryScenarioBackend {
    return {
        // subconsulta-1-!@#onibus-bk 
        
        cenario: 'onibus-subconsulta-1',
        consultaTipo: 'subconsulta',
        id: 1,
        // Liste o id do passageiro e sua altura, para o passageiro que está no assento de maior id e em estado 'ruim'.
        consulta: `
        select passageiro_id, altura_cm
        from passageiro
        where assento_fk = (
            select max(assento_id)
            from assento
            where estado = 'ruim'
        );
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
