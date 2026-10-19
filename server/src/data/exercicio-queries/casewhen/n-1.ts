

//*TESTADO-26

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN1(): QueryScenarioBackend {
    return {
        // case-when-1-!@#exercicio-bk 
        
        cenario: 'exercicio-case-when-1',
        consultaTipo: 'case-when',
        id: 1,
        // Classifique os avistamentos pela natureza do 'algo' que foi avistado com os rótulos (é animal) (é coisa) (não se sabe), contando cada grupo, incluso aqueles que não foram avistados.
        consulta: `
        select case
            when natureza = 'animal' then 'é animal'
            when natureza = 'coisa' then 'é coisa'
            else 'não se sabe'
        end as classificacao_avistamento,
        count(*) as quantidade
        from avistamento avi
        left join algo al on al.algo_id = avi.algo_visto_fk
        group by classificacao_avistamento;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
