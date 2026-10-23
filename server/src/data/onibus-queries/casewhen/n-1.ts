

//*TESTADO-3

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN1(): QueryScenarioBackend {
    return {
        // case-when-1-!@#onibus-bk 
        
        cenario: 'onibus-case-when-1',
        consultaTipo: 'case-when',
        id: 1,
        // Classifique cada passageiro como (em_peh) ou (sentado) e liste a quantidade de passageiros em cada situação.
        consulta: `
        select case 
        when assento_fk is null 
        then 'em_peh' 
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
