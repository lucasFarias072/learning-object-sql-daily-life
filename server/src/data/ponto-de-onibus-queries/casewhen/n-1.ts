

//*TESTADO-39

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN1(): QueryScenarioBackend {
    return {
        // case-when-1-!@#ponto-de-onibus-bk 
        
        cenario: 'ponto-de-onibus-case-when-1',
        consultaTipo: 'case-when',
        id: 1,
        // (1) Gere uma única coluna com os possíveis rótulos (rápido) (dinâmico) (truncado) com base nas durações das cores verde em relação à vermelha, dos semáforos. (2) É considerado rápido aquele com mais de 3 segundos de vantagem pro sinal verde, dinâmico é abaixo disso mas ainda positivo, e de zero adiante é truncado. (3) Dê ao case o alias 'fluxo', agrupe pelo alias, ordene com pesos (1, 2, 3) baseados na mesma ordem de apresentação dos rótulos.
        consulta: `
        select
            case
                when (duracao_cor_verde - duracao_cor_vermelha) > 3 then 'rápido'
                when (duracao_cor_verde - duracao_cor_vermelha) > 0 then 'dinâmico'
                else 'truncado'
            end as fluxo,
            count(*) as qtd_semaforos
        from semaforo
        group by fluxo
        order by case fluxo
            when 'rápido' then 1
            when 'dinâmico' then 2
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
