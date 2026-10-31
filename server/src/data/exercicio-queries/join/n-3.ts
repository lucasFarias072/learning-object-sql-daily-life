

//*TESTADO-96

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN3(): QueryScenarioBackend {
    return {
        // join-3-!@#exercicio-bk 
        
        cenario: 'exercicio-join-3',
        consultaTipo: 'join',
        id: 3,
        // Liste a descrição do algo e a descrição da cor, apenas para algo de natureza ‘coisa’ e de cor ‘vermelho’.
        consulta: `
        select descricao_algo, descricao_cor
        from algo al
        join cor_algo ca on ca.algo_fk = al.algo_id
        join cor c on c.cor_id = ca.cor_fk
        where natureza = 'coisa'
        and descricao_cor = 'vermelho';
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
