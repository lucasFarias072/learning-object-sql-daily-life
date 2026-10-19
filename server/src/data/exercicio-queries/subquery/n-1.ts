

//*TESTADO-73

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN1(): QueryScenarioBackend {
    return {
        // subconsulta-1-!@#exercicio-bk 
        
        cenario: 'exercicio-subconsulta-1',
        consultaTipo: 'subconsulta',
        id: 1,
        // Liste o id do avistamento, o identificador do algo que foi visto e o nome do membro da família, para avistamentos de algo de natureza 'coisa' cuja descrição termine com a letra 'a'.
        consulta: `
        select vista_id, algo_visto_fk, nome_membro 
        from avistamento avi
        join membro_familia mfam on mfam.membro_id = avi.membro_visto_fk
        where algo_visto_fk in (
            select algo_id
            from algo
            where natureza = 'coisa' and descricao_algo like '%a'
        );
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
