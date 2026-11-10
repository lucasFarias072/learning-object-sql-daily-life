

//*TESTADO-44

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN2(): QueryScenarioBackend {
    return {
        // join-2-!@#quarto-bk 
        
        cenario: 'quarto-join-2',
        consultaTipo: 'join',
        id: 2,
        // Liste os IDs únicos dos quartos e os codinomes de seus donos, considerando os donos com as características 'Organizada' ou 'Otimista' ou cujos quartos tenham mês de adesão um mês antes do fim do ano.
        consulta: `
        select distinct quarto_id, codinome
        from quarto_relatorio qr
        join dono dn on dn.dono_id = qr.dono_fk
        join dono_caracteristica doc on doc.dono_fk = dn.dono_id
        join caracteristica car on car.caract_id = doc.caract_fk
        where descricao_caract = 'Organizada' 
        or descricao_caract = 'Otimista' or mes_adesao = 11
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
