

//*TESTADO-77

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN2(): QueryScenarioBackend {
    return {
        // case-when-2-!@#ponto-de-onibus-bk 
        
        cenario: 'ponto-de-onibus-case-when-2',
        consultaTipo: 'case-when',
        id: 2,
        // Liste os ids de locomoção e crie uma coluna customizada de nome exato 'relatorio', com base na lotação e horário das locomoções. As variações são (vago_dia), (vago_tarde_noite), (enchendo_dia), (enchendo_tarde_noite). A lotação 'vago' vai até 20 pessoas, além disso será 'enchendo'. Para os horários, considere antes do meio dia como condição para os rótulos com 'dia' na sua escrita, e do meio dia adiante se enquadram os rótulos 'tarde-noite'. Ordene pelo rótulo da coluna customizada usando uma ordenação arbitrária. A ordem de pesos é: (1. vago_dia), (2. enchendo_dia), (3. vago_tarde_noite), (4 ou 'else'. enchendo_tarde_noite).
        consulta: `
        select loc_id, case
            when lotacao <= 20 and horario_loc < 12 then 'vago_dia'
            when lotacao <= 20 and horario_loc >= 12 then 'vago_tarde_noite'
            when lotacao > 20 and horario_loc < 12 then 'enchendo_dia'
            else 'enchendo_tarde_noite'
            end as relatorio
        from locomocao
        order by case relatorio
            when 'vago_dia' then 1
            when 'enchendo_dia' then 2
            when 'vago_tarde_noite' then 3
            when 'enchendo_tarde_noite' then 4
            end;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
