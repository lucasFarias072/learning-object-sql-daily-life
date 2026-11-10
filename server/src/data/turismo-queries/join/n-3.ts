

//*TESTADO-48

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN3(): QueryScenarioBackend {
    return {
        // join-3-!@#turismo-bk 
        
        cenario: 'turismo-join-3',
        consultaTipo: 'join',
        id: 3,
        // Liste os IDs dos passeios e os nomes dos guias que trabalham em expedientes de apenas 1 turno (representados por uma letra no texto) e que conduziram passeios cuja nota de indicação foi de 4.5 ou mais e cuja avaliação do guia superou a nota de indicação. (Cláusula 'in' recomendada).
        consulta: `
        select passeio_id, nome from pessoa pess
        join guia gui on gui.pessoa_fk = pess.pessoa_id
        join passeio pass on pass.guia_fk = gui.guia_id
        where expediente in ('m-', 't-', 'n-')
        and indicacao_nota >= 4.5
        and avaliacao_guia > indicacao_nota;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
