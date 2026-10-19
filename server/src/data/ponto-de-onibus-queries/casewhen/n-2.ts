

//*TESTADO-77

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN2(): QueryScenarioBackend {
    return {
        // case-when-2-!@#ponto-de-onibus-bk 
        
        cenario: 'ponto-de-onibus-case-when-2',
        consultaTipo: 'case-when',
        id: 2,
        // Liste os ids de locomoção e crie uma coluna customizada de nome exato 'relatorio', com base na lotação e horário das locomoções. As variações são (vago-dia), (vago-tarde-noite), (enchendo-dia), (enchendo-tarde-noite). A lotação 'vago' vai até 20 pessoas, além disso será 'enchendo'. Para os horários, considere antes do meio dia como condição para os rótulos com 'dia' na sua escrita, e do meio dia adiante, se enquadram os rótulos 'tarde-noite'. Ordene pelo rótulo da coluna customizada usando uma ordenação arbitrária. A ordem de pesos é: (1. vago-dia), (2. enchendo-dia), (3. vago-tarde-noite), (4 ou 'else'. enchendo-tarde-noite).
        consulta: `
        select loc_id, case
            when lotacao <= 20 and horario_loc < 12 then 'vago-dia'
            when lotacao <= 20 and horario_loc >= 12 then 'vago-tarde-noite'
            when lotacao > 20 and horario_loc < 12 then 'enchendo-dia'
            else 'enchendo-tarde-noite'
            end as relatorio
        from locomocao
        order by case relatorio
            when 'vago-dia' then 1
            when 'enchendo-dia' then 2
            when 'vago-tarde-noite' then 3
            when 'enchendo-tarde-noite' then 4
            end;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
