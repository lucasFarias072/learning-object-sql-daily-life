

//*TESTADO-63

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN2(): QueryScenarioBackend {
    return {
        // join-2-!@#ponto-de-onibus-bk 
        
        cenario: 'ponto-de-onibus-join-2',
        consultaTipo: 'join',
        id: 2,
        // Liste o número do ônibus e o seu horário de locomoção. Considere apenas locomoções com lotação superior a 20 passageiros e que tenham ocorrido antes das 8 ou a partir das 18 horas.
        /* EQUIVALENTE - retira parênteses, repete a primeira condição + 1 vez
        select onibus_n, horario_loc
        from onibus_veiculo ov
        join locomocao loc on loc.onibus_loc_fk = ov.onibus_id
        where lotacao > 20 and horario_loc < 8 or lotacao > 20 and horario_loc >= 18;
        */
        consulta: `
        select onibus_n, horario_loc
        from onibus_veiculo ov
        join locomocao loc on loc.onibus_loc_fk = ov.onibus_id
        where lotacao > 20
        and (horario_loc < 8 or horario_loc >= 18);
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
