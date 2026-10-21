

//*TESTADO-36

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN2(): QueryScenarioBackend {
    return {
        // case-when-2-!@#quarto-bk 
        
        cenario: 'quarto-case-when-2',
        consultaTipo: 'case-when',
        id: 2,
        // Crie duas colunas customizadas, uma para definir época do quarto, outra para definir se o quarto tem banheiro. Use os rótulos (antigo) para antes dos anos 2000, (quase_novo) para até o ano de 2015, (novo) para qualquer outra situação. Use os rótulos (sem_suite) para os quartos com zero banheiros e (com_suite) para qualquer coisa além de zero. Agrupe pelos rótulos e conte-os.
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
