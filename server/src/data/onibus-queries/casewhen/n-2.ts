

//*TESTADO-81

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN2(): QueryScenarioBackend {
    return {
        // case-when-2-!@#onibus-bk 
        
        cenario: 'onibus-case-when-2',
        consultaTipo: 'case-when',
        id: 2,
        // Crie um campo com base em 4 características dos passageiros, sendo elas: (levantado), (sentado_pesado), (sentado_alto), (sentado_comum). O 'levantado' é para pessoas sem assento registrado, o 'sentado_pesado' é para os que tiverem peso a partir de 80kg, o 'sentado_alto' é para as pessoas de altura 180cm adiante e os demais recebem 'sentado_comum'. Conte a distribuição a partir disso e agrupe pelo campo criado.
        consulta: `
        select case
            when assento_fk is null then 'levantado'
            when peso_kg >= 80 then 'sentado_pesado'
            when altura_cm >= 180 then 'sentado_alto'
            else 'sentado_comum'
            end as tipo_passageiro,
            count(*) as total_passageiros
        from passageiro
        group by tipo_passageiro;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
