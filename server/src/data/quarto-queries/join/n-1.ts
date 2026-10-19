

//*TESTADO-12

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN1(): QueryScenarioBackend {
    return {
        // join-1-!@#quarto-bk 
        
        cenario: 'quarto-join-1',
        consultaTipo: 'join',
        id: 1,
        // Liste o codinome de cada dono de quarto e o nome do objeto que ele comprou por último.
        consulta: `
        select codinome, descricao_objeto
        from dono dn
        join quarto_relatorio qr on qr.dono_fk = dn.dono_id
        join objeto obj on obj.objeto_id = qr.objeto_fk_comprado_ultimo;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
