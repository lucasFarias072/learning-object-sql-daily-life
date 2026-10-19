

//*TESTADO-89

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN2(): QueryScenarioBackend {
    return {
        // subconsulta-2-!@#onibus-bk 
        
        cenario: 'onibus-subconsulta-2',
        consultaTipo: 'subconsulta',
        id: 2,
        // Liste a credencial dos assentos em estado 'ruim' que estão ocupados por algum passageiro com peso inferior à 75kg.
        consulta: `
        select assento_credencial
        from assento
        where estado = 'ruim'
        and assento_id in (
            select assento_fk
            from passageiro where peso_kg < 75
        );
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
