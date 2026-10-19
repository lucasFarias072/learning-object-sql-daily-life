

//*TESTADO-47

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN3(): QueryScenarioBackend {
    return {
        // join-3-!@#quarto-bk 
        
        cenario: 'quarto-join-3',
        consultaTipo: 'join',
        id: 3,
        // Liste o codinome do dono do quarto e a descrição do último objeto comprado por ele para o quarto dele. Considere a listagem apenas para quartos sem suite e com mês de adesão a partir de julho.
        consulta: `
        select codinome, descricao_objeto
        from dono dn
        join quarto_relatorio qr on qr.dono_fk = dn.dono_id
        join objeto obj on obj.objeto_id = qr.objeto_fk_comprado_ultimo
        where suite = 0
        and mes_adesao >= 7;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
