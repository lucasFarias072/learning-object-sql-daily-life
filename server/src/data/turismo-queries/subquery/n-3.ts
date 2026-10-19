

//*TESTADO-71

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN3(): QueryScenarioBackend {
    return {
        // subconsulta-3-!@#turismo-bk 
        
        cenario: 'turismo-subconsulta-3',
        consultaTipo: 'subconsulta',
        id: 3,
        // Liste a descrição do ponto turístico e a avaliação do guia nos passeios conduzidos por guias do estado 'rj'.
        consulta: `
        select descricao_ponto, avaliacao_guia
        from passeio pass
        join ponto_turistico ptur on ptur.ponto_id = pass.ponto_fk
        where guia_fk in (
            select guia_id
            from guia
            where sigla_estado = 'rj'
        );
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
