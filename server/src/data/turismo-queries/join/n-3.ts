

//*TESTADO-48

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN3(): QueryScenarioBackend {
    return {
        // join-3-!@#turismo-bk 
        
        cenario: 'turismo-join-3',
        consultaTipo: 'join',
        id: 3,
        // Liste os ids de passeio e o nome dos guias que trabalham nos expedientes de apenas 1 turno (os de 1 letra no alfabeto no seu texto) e que trabalharam em passeios que a nota de indicação foi de 4.5 ou mais e que a avaliação do guia tenha superado a de indicação (cláusula 'in' recomendada).
        consulta: `
        select passeio_id, nome from pessoa pess
        join guia gui on gui.pessoa_fk = pess.pessoa_id
        join passeio pass on pass.guia_fk = gui.guia_id
        where expediente in ('m-', 't-', 'n-')
        and indicacao_nota >= 4.5
        and avaliacao_guia > indicacao_nota
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
