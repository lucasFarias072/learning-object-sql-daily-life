

//*TESTADO-36

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN2(): QueryScenarioBackend {
    return {
        // case-when-2-!@#quarto-bk 
        
        cenario: 'quarto-case-when-2',
        consultaTipo: 'case-when',
        id: 2,
        // Crie uma classificação para a época do quarto: (antigo) para antes de 2000, (quase_novo) até 2015 e (novo) nos demais casos. Crie outra classificação para a suíte: (sem_suite) quando suite for 0 e (com_suite) nos demais casos. Agrupe pelas duas classificações e liste a quantidade de quartos em cada grupo.
        consulta: `
        select 
            case
                when ano_adesao < 2000 then 'antigo'
                when ano_adesao <= 2015 then 'quase_novo'
                else 'novo'
            end as epoca,
            case 
                when suite = 0 then 'sem_suite'
                else 'com_suite'
            end as banheiro,
            count(*) as relatorio
        from quarto_relatorio
        group by epoca, banheiro;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
