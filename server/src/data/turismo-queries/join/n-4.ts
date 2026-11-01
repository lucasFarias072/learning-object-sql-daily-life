

//*TESTADO-101

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN4(): QueryScenarioBackend {
    return {
        // join-4-!@#turismo-bk 
        
        cenario: 'turismo-join-4',
        consultaTipo: 'join',
        id: 4,
        // Liste o nome das pessoas, sua quantidade de países conhecidos, para aquelas que não têm origem registrada e que são estrangeiras.
        consulta: `
        select nome, qtd_paises_conhecidos
        from pessoa pes
        left join origem ori on ori.origem_id = pes.origem_fk
        where origem_id is null
        and eh_estrangeiro = 1;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
