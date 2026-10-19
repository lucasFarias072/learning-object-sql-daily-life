

//*TESTADO-58

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN1(): QueryScenarioBackend {
    return {
        // join-1-!@#ponto-de-onibus-bk 
        
        cenario: 'ponto-de-onibus-join-1',
        consultaTipo: 'join',
        id: 1,
        // Liste a descrição do local, a duração do verde e a duração do vermelho do semáforo. Considere apenas locais do tipo 'bairro' em que o semáforo fique mais tempo no verde do que no vermelho.
        consulta: `
        select descricao_local, duracao_cor_verde, duracao_cor_vermelha
        from semaforo sem
        join local lcl on lcl.local_id = sem.local_sem_fk
        join local_tipo ltipo on ltipo.local_tipo_id = lcl.local_tipo_fk
        where descricao_local_tipo = 'bairro'
        and duracao_cor_verde > duracao_cor_vermelha;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
