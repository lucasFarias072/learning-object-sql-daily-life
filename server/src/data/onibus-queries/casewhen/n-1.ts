

//*TESTADO-3

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN1(): QueryScenarioBackend {
    return {
        // case-when-1-!@#onibus-bk 
        
        cenario: 'onibus-case-when-1',
        consultaTipo: 'case-when',
        id: 1,
        // Para cada passageiro sentado ou em pé (crie uma classificação customizada), agrupe pela contagem dessa distinção.
        consulta: `
        select case 
        when assento_fk is null 
        then 'em pé' 
        else 'sentado' 
        end as situacao_passageiro,
        count(*) as encontrados
        from passageiro psg
        left join assento ast on ast.assento_id = psg.assento_fk
        group by situacao_passageiro;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
