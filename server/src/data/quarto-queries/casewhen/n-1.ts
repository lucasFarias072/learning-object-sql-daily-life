

//*TESTADO-31

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN1(): QueryScenarioBackend {
    return {
        // case-when-1-!@#quarto-bk 
        
        cenario: 'quarto-case-when-1',
        consultaTipo: 'case-when',
        id: 1,
        // Crie uma coluna customizada com os rótulos (sem_suite), (suite_simples), (suite_robusta) com base nos valores atuais de 'suite_qtd'. Conte a quantidade de cada grupo. Agrupe e ordene pelo campo criado.
        consulta: `
        select
            case 
            when suite_qtd is null then 'sem_suite'
            when suite_qtd = 1 then 'suite_simples'
            else 'suite_robusta'
            end as tipo_suite,
            count(*) as qtd_quartos
        from quarto_relatorio
        group by tipo_suite
        order by tipo_suite;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
