

//*TESTADO-103

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN4(): QueryScenarioBackend {
    return {
        // join-4-!@#ponto-de-onibus-bk 
        
        cenario: 'ponto-de-onibus-join-4',
        consultaTipo: 'join',
        id: 4,
        // Liste os números dos ônibus, descrição dos locais por onde passaram, tipo do local por onde passaram, a partir dos registros de locomoção
        consulta: `
        select onibus_n, descricao_local, descricao_local_tipo from locomocao loc
        join onibus_veiculo ov on ov.onibus_id = loc.onibus_loc_fk
        join local lcl on lcl.local_id = loc.local_loc_fk
        join local_tipo ltipo on ltipo.local_tipo_id = lcl.local_tipo_fk;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
