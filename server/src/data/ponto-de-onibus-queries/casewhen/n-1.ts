

//*TESTADO-39

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN1(): QueryScenarioBackend {
    return {
        // case-when-1-!@#ponto-de-onibus-bk 
        
        cenario: 'ponto-de-onibus-case-when-1',
        consultaTipo: 'case-when',
        id: 1,
        // Classifique os semáforos em três grupos com base na diferença entre a duração do sinal verde e a do vermelho: (rapido) para diferença acima de 3 segundos, (dinamico) para diferença maior que zero e até 3 segundos, e (truncado) para diferença igual ou menor que zero. Mostre a quantidade de semáforos em cada grupo e nomei-o 'qtd_semaforos'. Dê à classificação o alias 'fluxo', agrupe por esse alias e ordene os grupos na ordem (rapido), (dinamico), (truncado), usando os pesos 1, 2 e 3, respectivamente.
        consulta: `
        select
            case
                when (duracao_cor_verde - duracao_cor_vermelha) > 3 then 'rapido'
                when (duracao_cor_verde - duracao_cor_vermelha) > 0 then 'dinamico'
                else 'truncado'
            end as fluxo,
            count(*) as qtd_semaforos
        from semaforo
        group by fluxo
        order by case fluxo
            when 'rapido' then 1
            when 'dinamico' then 2
            when 'truncado' then 3
        end;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
