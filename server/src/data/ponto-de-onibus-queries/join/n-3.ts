

//*TESTADO-67

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN3(): QueryScenarioBackend {
    return {
        // join-3-!@#ponto-de-onibus-bk 
        
        cenario: 'ponto-de-onibus-join-3',
        consultaTipo: 'join',
        id: 3,
        // Liste o nome da pessoa e a descrição do local em que ela se encontra. Considere apenas pessoas em locais onde a luz do semáforo. está verde e a diferença de duração entre a cor vermelha pra cor verde seja de mais do que 5 segundos ou a duração da cor vermelha seja maior que 30 segundos (repetições possíveis).
        /*
        SELECT nome, descricao_local
        FROM pessoa pess
        JOIN local lcl ON lcl.local_id = pess.local_pess_fk
        JOIN semaforo sem ON sem.local_sem_fk = lcl.local_id
        WHERE luz = 'verde' and duracao_cor_vermelha - duracao_cor_verde < 5 
        or luz = 'verde' and duracao_cor_vermelha > 30;
        */
        consulta: `
        SELECT nome, descricao_local
        FROM pessoa pess
        JOIN local lcl ON lcl.local_id = pess.local_pess_fk
        JOIN semaforo sem ON sem.local_sem_fk = lcl.local_id
        WHERE luz = 'verde'
        AND (duracao_cor_vermelha - duracao_cor_verde > 5 or duracao_cor_vermelha > 30);
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
