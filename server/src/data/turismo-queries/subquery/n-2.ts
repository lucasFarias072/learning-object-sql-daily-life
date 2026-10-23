

//*TESTADO-32

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN2(): QueryScenarioBackend {
    return {
        // subconsulta-2-!@#turismo-bk 
        
        cenario: 'turismo-subconsulta-2',
        consultaTipo: 'subconsulta',
        id: 2,
        // Liste o identificador do passeio, o expediente do guia e a avaliação atribuída pelo guia, apenas para passeios feitos em pontos turísticos com avaliação de 4.5.
        consulta: `
        select passeio_id, expediente, avaliacao_guia
        from passeio pass
        join guia gui on gui.guia_id = pass.guia_fk
        where ponto_fk in (
            select ponto_id
            from ponto_turistico
            where avaliacao = 4.5
        );
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
