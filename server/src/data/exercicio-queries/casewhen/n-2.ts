

//*TESTADO-90

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN2(): QueryScenarioBackend {
    return {
        // case-when-2-!@#exercicio-bk 
        
        cenario: 'exercicio-case-when-2',
        consultaTipo: 'case-when',
        id: 2,
        // Crie um campo customizado de apelido exato 'tipo_registro', com base em campos que indiquem o algo que foi visto e o horário desse avistamento. As variações são (nao_identificado), (hora_incerta), (dia), (tarde_ou_noite). Se algo não foi visto (registro não numérico) então defina 'nao_identificado', se algo não possui hora vista (registro não numérico), então defina 'hora_incerta', se algo foi visto antes das 12, defina 'dia' e o que vier depois, defina 'tarde_ou_noite'. Traga a contagem dos grupos formadas, agrupe e ordene pelo apelido, contudo a ordenação terá uma ordem arbitrária. A ordem de pesos é: (1. dia), (2. tarde_ou_noite), (3. hora_incerta), (4 ou 'else'. nao_identificado).
        consulta: `
        select case
        when algo_visto_fk is null then 'nao_identificado'
        when hora_visto is null then 'hora_incerta'
        when hora_visto < 12 then 'dia'
        else 'tarde_ou_noite'
        end as tipo_registro,
        count(*) as total_avistamentos
        from avistamento
        group by tipo_registro
        order by case tipo_registro
            when 'dia' then 1
            when 'tarde_ou_noite' then 2
            when 'hora_incerta' then 3
            when 'nao_identificado' then 4
            end;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
