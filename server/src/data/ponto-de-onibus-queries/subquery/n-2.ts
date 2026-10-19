

//*TESTADO-42

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN2(): QueryScenarioBackend {
    return {
        // subconsulta-2-!@#ponto-de-onibus-bk 
        
        cenario: 'ponto-de-onibus-subconsulta-2',
        consultaTipo: 'subconsulta',
        id: 2,
        // Liste os nomes de pessoa que estavam num local que é listado como do tipo bairro ou cujo local tenha um semáforo de cor verde mais duradoura que a luz vermelha.
        consulta: `
        select nome
        from pessoa
        where local_pess_fk in (
            select local_id from local 
            where local_tipo_fk in (
                select local_tipo_id from local_tipo where descricao_local_tipo = 'bairro'
            ) or local_id in (
                select local_sem_fk from semaforo
                where duracao_cor_verde > duracao_cor_vermelha
            )
        );
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
