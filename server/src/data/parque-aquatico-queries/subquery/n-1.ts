

//*TESTADO-70

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN1(): QueryScenarioBackend {
    return {
        // subconsulta-1-!@#parque-aquatico-bk 
        
        cenario: 'parque-aquatico-subconsulta-1',
        consultaTipo: 'subconsulta',
        id: 1,
        // Liste a descrição dos produtos do parque aquático que nunca foram alugados.
        consulta: `
        select descricao_pap
        from parque_aquatico_produto
        where pa_produto_id not in (
            select pa_produto_fk
            from parque_aquatico_aluguel
        );
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
